<?php
/**
 * Elementor Widget Registration File - ONE SOURCE BUILDING
 * Copy this file into your active theme or plugin directory.
 */

if (!defined('ABSPATH')) exit; // Exit if accessed directly

class Elementor_One_Source_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'one_source_building_widget';
    }

    public function get_title() {
        return __('One Source Section', 'one-source-building');
    }

    public function get_icon() {
        return 'eicon-code';
    }

    public function get_categories() {
        return ['general', 'theme-elements'];
    }

    protected function _register_controls() {

        $this->start_controls_section(
            'content_section',
            [
                'label' => __('Widget Configuration', 'one-source-building'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'widget_type',
            [
                'label' => __('Select Component Section', 'one-source-building'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'hero',
                'options' => [
                    'hero' => __('Hero Banner Slider', 'one-source-building'),
                    'services' => __('Services Showcase Grid', 'one-source-building'),
                    'stats' => __('Achievement Counters', 'one-source-building'),
                    'projects' => __('Projects Matrix (Filterable)', 'one-source-building'),
                    'process' => __('4-Step Process Timeline', 'one-source-building'),
                    'testimonials' => __('Client Testimonials Carousel', 'one-source-building'),
                    'calculator' => __('Interactive Budget Estimator', 'one-source-building'),
                ],
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        
        // Output React mounting container
        echo '<div class="one-source-elementor-embed" data-widget-type="' . esc_attr($settings['widget_type']) . '"></div>';
    }
}

// Register widget with Elementor
add_action('elementor/widgets/widgets_registered', function($widgets_manager) {
    $widgets_manager->register_widget_type(new Elementor_One_Source_Widget());
});
