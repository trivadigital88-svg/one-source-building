# Elementor & WordPress Integration Blueprint - ONE SOURCE BUILDING

This document explains the technical architecture and embedding strategies for integrating the **One Source Building** React component library into WordPress and the Elementor Page Builder.

---

## 1. Integration Strategies Overview

We provide three primary methods for embedding React components into Elementor:

| Method | Best For | Developer Overhead | Admin User Experience |
| :--- | :--- | :--- | :--- |
| **A. WordPress Shortcode Embedding** | Quick insertion into Elementor HTML or Shortcode widgets | Low | Easy (copy/paste shortcode) |
| **B. Native Elementor Custom Widget (PHP)** | Native Elementor controls (inputs, dropdowns, colors) in editor sidebar | Medium | Native drag-and-drop experience |
| **C. Web Component Custom Elements** | Modern shadow-DOM encapsulated embeds (`<one-source-hero>`) | Low | HTML Widget friendly |

---

## 2. WordPress Shortcode Embedding (Method A)

Non-technical administrators can copy shortcodes directly into Elementor's standard **Shortcode Widget** or **HTML Widget**:

```php
// Add this to your WordPress theme's functions.php or custom plugin:
function render_one_source_react_widget($atts) {
    $a = shortcode_atts(array(
        'type' => 'hero',
        'id' => 'default'
    ), $atts);

    // Enqueue compiled React bundle
    wp_enqueue_script('one-source-react-bundle', get_stylesheet_directory_uri() . '/dist/assets/index.js', array(), '1.0.0', true);
    wp_enqueue_style('one-source-react-style', get_stylesheet_directory_uri() . '/dist/assets/index.css', array(), '1.0.0');

    return '<div class="one-source-widget-container" data-widget-type="' . esc_attr($a['type']) . '" data-widget-id="' . esc_attr($a['id']) . '"></div>';
}
add_shortcode('one_source_widget', 'render_one_source_react_widget');
```

---

## 3. Registering Native Elementor Widgets in PHP (Method B)

Refer to the included [`elementor-widgets.php`](file:///C:/Users/PC/.gemini/antigravity/scratch/one_source_building/src/elementor/elementor-widgets.php) file for full source code.

### Summary of PHP Widget Class:
1. Inherits from `\Elementor\Widget_Base`.
2. Defines editable control fields (e.g. Heading Title, Category Filter, REST API Endpoint).
3. Renders a mounting `<div>` with `data-attributes` consumed by the React app's mounting entry point.

---

## 4. Headless WordPress REST API Integration

To make content dynamically editable in WordPress WP-Admin:

1. Create Custom Post Types in WP: `projects`, `services`, `testimonials`.
2. Fetch dynamic JSON from standard WP endpoints:
   - `GET /wp-json/wp/v2/projects`
   - `GET /wp-json/wp/v2/services`
3. React components fall back gracefully to local `src/data/content.js` when offline or when no API endpoint is specified.

---

## 5. Avoiding CSS Conflicts with Elementor Themes

To prevent Elementor's theme CSS from overriding React/Tailwind styling:
- All React components use explicit Tailwind CSS classes scoped under `#root` or `.one-source-app-wrapper`.
- Preflight resets are targeted to prevent global reset leaks into WordPress header/footer.
