export const companyInfo = {
  name: "ONE SOURCE BUILDING & MARBLE",
  tagline: "Rare Italian Marble. Bespoke Stone Fabrication.",
  description: "One Source Building & Marble is a premier global importer, custom fabricator, and master installer of rare Italian marble, exotic quartzite, book-matched onyx, and architectural natural stone surfaces.",
  phone: "+1 (800) 555-MARBLE",
  emergencyPhone: "+1 (800) 555-9911",
  email: "inquiries@onesourcebuilding.com",
  address: "750 Grand Avenue, Suite 1200, Design & Stone District, NY 10019",
  hours: "Mon - Fri: 8:00 AM - 6:00 PM EST | Sat: 9:00 AM - 3:00 PM EST",
  licenseNumber: "NYC Stone Guild #4920194 / Marble Institute Certified",
  social: {
    instagram: "https://instagram.com/onesourcebuilding",
    linkedin: "https://linkedin.com/company/onesourcebuilding",
    youtube: "https://youtube.com/@onesourcebuilding",
    facebook: "https://facebook.com/onesourcebuilding"
  }
};

export const stats = [
  { label: "Sourcing Excellence", value: "18+", suffix: "Years", description: "Direct quarry access in Carrara, Verona, and international stone capitals" },
  { label: "Rare Slabs In Stock", value: "2,500+", suffix: "Slabs", description: "Book-matched Calacatta, Statuario, Quartzite, and Honey Onyx" },
  { label: "Installed Stone Area", value: "1.8M", suffix: "sq. ft.", description: "Bespoke stone installations in penthouses, luxury estates, and corporate HQs" },
  { label: "Vein Alignment Rating", value: "99.8%", suffix: "Match", description: "Precision 5-Axis CNC waterjet cutting and dry-lay inspection" }
];

export const services = [
  {
    id: "exotic-marble-supply",
    title: "Exotic Italian Marble & Natural Stone Supply",
    category: "Marble Supply",
    iconName: "Compass",
    shortDesc: "Direct quarry sourcing of rare Calacatta Gold, Statuario, Arabescato, Travertine, and Honey Onyx slabs.",
    fullDesc: "Our stone curation division hand-selects premium natural stone blocks directly from premier Italian quarries in Carrara and Verona. Each slab features unique flowing veining, rich tonal warmth, and exceptional structural density.",
    features: ["Direct Quarry Selection & Inspection", "Book-Matched Slab Pairs Available", "Exotic Quartzite & Onyx Inventory", "Custom Thickness & Finish Options"],
    image: "/images/hero_construction.jpg"
  },
  {
    id: "bookmatched-wall-cladding",
    title: "Book-Matched Stone Wall Cladding",
    category: "Wall Cladding",
    iconName: "Building2",
    shortDesc: "Symmetrical mirror-image marble slab installation for dramatic feature walls, fireplace surrounds, and lobbies.",
    fullDesc: "Book-matching creates a seamless mirror-image pattern where adjacent stone slabs mirror each other like an open book. Using 3D laser templating and dry-lay inspection, we align intricate veining across expansive living room feature walls.",
    features: ["3D Laser Scanning & Vein Alignment", "Sub-Millimeter CNC Joint Matching", "Concealed Mechanical Anchor Systems", "Backlit Translucent Onyx Installations"],
    image: "/images/luxury_interior.jpg"
  },
  {
    id: "bespoke-surface-fabrication",
    title: "Bespoke Countertops & Surface Fabrication",
    category: "Fabrication",
    iconName: "Wrench",
    shortDesc: "Custom mitered waterfall kitchen islands, integrated stone sinks, bathroom vanities, and marble dining tables.",
    fullDesc: "Our master stone artisans combine traditional hand-finishing with 5-axis waterjet technology. We craft seamless waterfall island edges, custom integrated sink basins, drainboard fluting, and stain-resistant sealer treatments.",
    features: ["Seamless 45° Mitered Edge Profiles", "Integrated Carved Stone Sink Basins", "Hydrophobic Stain Sealer Treatment", "Custom Furniture & Tabletop Crafting"],
    image: "/images/renovation_project.jpg"
  },
  {
    id: "stone-restoration-honing",
    title: "Architectural Stone Restoration & Honing",
    category: "Restoration",
    iconName: "DraftingCompass",
    shortDesc: "Diamond disc honing, polish restoration, etch removal, and historical marble preservation treatments.",
    fullDesc: "Preserving natural stone luster over decades requires specialized diamond polishing and chemical re-crystallization. We eliminate scratches, repair chips, re-grout seams, and apply museum-grade breathable sealants.",
    features: ["Diamond Abrasive Micro-Honing", "Acid Etch & Stain Extraction", "Lippage Grinding & Flatness Tuning", "Museum-Grade Penetrating Sealers"],
    image: "/images/architectural_blueprint.jpg"
  }
];

export const projects = [
  {
    id: "skyline-calacatta-feature",
    title: "The Skyline Penthouse Calacatta Wall",
    category: "Interiors",
    location: "Manhattan, NY",
    year: "2025",
    client: "Apex Global Holdings",
    area: "3,200 sq. ft. Stone",
    budget: "$1.4 Million Stone Spec",
    duration: "4 Months",
    image: "/images/luxury_interior.jpg",
    gallery: [
      "/images/luxury_interior.jpg",
      "/images/hero_construction.jpg",
      "/images/renovation_project.jpg"
    ],
    summary: "Full floor penthouse featuring 14-foot book-matched Italian Calacatta Gold marble feature wall, cantilevered marble vanity, and book-matched foyer flooring.",
    specs: {
      "Stone Origin": "Carrara, Italy (Quarry Block #892)",
      "Finish": "Polished Silk Touch",
      "Slab Thickness": "3/4 Inch (20mm) Match-Cut",
      "Sealer": "Dry-Treat Stain-Proof Penetrating Sealer"
    }
  },
  {
    id: "aurora-travertine-lobby",
    title: "The Aurora Center Roman Travertine Lobby",
    category: "Commercial",
    location: "Brooklyn Navy Yard, NY",
    year: "2024",
    client: "Horizon Realty Group",
    area: "18,000 sq. ft. Stone",
    budget: "$4.2 Million",
    duration: "6 Months",
    image: "/images/hero_construction.jpg",
    gallery: [
      "/images/hero_construction.jpg",
      "/images/luxury_interior.jpg"
    ],
    summary: "Multi-story commercial lobby clad in veined Roman Navona Travertine with brass inlay reveals, reception desk carved from solid stone block, and honed flooring.",
    specs: {
      "Stone Spec": "Roman Navona Travertine",
      "Anchoring": "Stainless Steel Concealed Clips",
      "Finish": "Honed Filled Grain",
      "Vein Orientation": "Continuous Horizontal Vein-Cut"
    }
  },
  {
    id: "hudson-quartzite-island",
    title: "Hudson Estate Taj Mahal Quartzite Kitchen",
    category: "Renovation",
    location: "Greenwich, CT",
    year: "2024",
    client: "Private Family Estate",
    area: "2,400 sq. ft. Stone",
    budget: "$850,000",
    duration: "3 Months",
    image: "/images/renovation_project.jpg",
    gallery: [
      "/images/renovation_project.jpg",
      "/images/luxury_interior.jpg"
    ],
    summary: "16-foot waterfall kitchen island and full backsplash fabricated from exotic Taj Mahal Quartzite with warm mocha diagonal veining and leathered finish.",
    specs: {
      "Stone Material": "Exotic Taj Mahal Quartzite",
      "Edge Profile": "2-Inch Mitered Waterfall Edge",
      "Surface Finish": "Velvet Leathered Texture",
      "Hardness Rating": "7 Mohs Scale (Scratch-Proof)"
    }
  },
  {
    id: "soho-onyx-bar",
    title: "SoHo VIP Lounge Backlit Honey Onyx",
    category: "Interiors",
    location: "SoHo, NY",
    year: "2025",
    client: "Modena Luxury Goods",
    area: "1,800 sq. ft. Stone",
    budget: "$1.1 Million",
    duration: "3 Months",
    image: "/images/architectural_blueprint.jpg",
    gallery: [
      "/images/architectural_blueprint.jpg",
      "/images/luxury_interior.jpg"
    ],
    summary: "Translucent Honey Onyx bar counter and floor-to-ceiling feature wall backlit by dimmable 2700K LED panel matrix, flanked by Nero Marquina black marble.",
    specs: {
      "Stone Type": "Persian Honey Onyx & Nero Marquina",
      "Backlighting": "Custom Dimmable LED Light Guide Panel",
      "Substrate": "Honeycomb Composite Backing",
      "Transmission": "42% Light Translucency"
    }
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Quarry Selection & 3D Scanning",
    desc: "Selecting premium stone blocks at Italian quarries, followed by high-resolution 3D laser slab scanning."
  },
  {
    step: "02",
    title: "Vein Match & Layout Design",
    desc: "Digital slab dry-lay layout allowing clients to approve exact vein continuity prior to cutting."
  },
  {
    step: "03",
    title: "Precision Waterjet Fabrication",
    desc: "5-Axis CNC waterjet cutting with hand-mitered edge finishing and factory sealer application."
  },
  {
    step: "04",
    title: "White-Glove Installation",
    desc: "Master stone mason installation, concealed clip anchoring, seam color matching, and final polish."
  }
];

export const testimonials = [
  {
    id: "t1",
    name: "Marcus Vance",
    role: "CEO, Apex Global Holdings",
    company: "Skyline Penthouse Calacatta Wall",
    quote: "One Source Building & Marble delivered a level of vein continuity on our 14-foot Calacatta feature wall that blew our architects away. The dry-lay preview guaranteed zero surprises.",
    rating: 5,
    project: "Skyline Penthouse Marble",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "t2",
    name: "Elena Rostova",
    role: "Managing Director, Horizon Realty",
    company: "The Aurora Center Travertine",
    quote: "Sourcing 18,000 sq ft of uniform Roman Travertine required direct quarry access. One Source secured matched block numbers and executed installation ahead of schedule.",
    rating: 5,
    project: "The Aurora Travertine",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "t3",
    name: "David & Sarah Thorne",
    role: "Private Homeowners",
    company: "Hudson River Estate Quartzite",
    quote: "Our Taj Mahal Quartzite kitchen island is the focal point of our entire estate. Their waterjet mitered waterfall edges are completely seamless.",
    rating: 5,
    project: "Hudson Quartzite Island",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export const newsArticles = [
  {
    id: "bookmatching-marble-guide",
    title: "The Art of Book-Matching Marble: Flowing Veins in Luxury Interior Design",
    category: "Design Trends",
    date: "August 4, 2026",
    author: "Sophia Laurent, Head of Stone Architecture",
    readTime: "5 min read",
    summary: "How precision digital dry-lays and mirror-image slab pairing elevate living room feature walls and master bathrooms into fine art.",
    image: "/images/hero_construction.jpg",
    content: "Natural stone veining tells a geological story spanning millions of years. When book-matched, those natural fluid lines create symmetrical visual masterpieces..."
  },
  {
    id: "quartzite-vs-marble-durability",
    title: "Quartzite vs. Marble: Selecting the Ideal Surface for High-Traffic Kitchen Islands",
    category: "Stone Material Science",
    date: "July 28, 2026",
    author: "Eng. Richard Sterling, Chief Materials Officer",
    readTime: "4 min read",
    summary: "Comparing Mohs hardness, scratch resistance, and acidic etch susceptibility across natural quartzite and Italian marble.",
    image: "/images/luxury_interior.jpg",
    content: "While marble remains unmatched for aesthetic elegance, quartzite offers 7 Mohs hardness that resists lemon juice and wine staining without sealing compromise..."
  },
  {
    id: "translucent-backlit-onyx",
    title: "Illuminating Translucent Onyx: Substrate Engineering & LED Matrices",
    category: "Lighting & Stone",
    date: "July 12, 2026",
    author: "Arthur Vance, Director of Custom Fabrication",
    readTime: "6 min read",
    summary: "Technical guidelines for backing translucent honey onyx with aluminum honeycomb panels and 2700K dimmable LED light guides.",
    image: "/images/renovation_project.jpg",
    content: "Backlighting onyx requires careful thermal management and uniform light diffusion to avoid hot spots behind translucent stone slabs..."
  }
];

export const faqs = [
  {
    category: "Stone Selection & Sourcing",
    question: "How does One Source Building & Marble ensure vein match accuracy?",
    answer: "Before cutting any stone, we perform high-resolution 3D laser scanning of all physical slabs and generate a digital 'Dry-Lay Model'. Clients and architects review and approve the exact slab alignment and vein flow in 3D prior to waterjet fabrication."
  },
  {
    category: "Stone Selection & Sourcing",
    question: "Can I inspect physical marble slabs before purchasing?",
    answer: "Yes. Clients can visit our Design District Stone Gallery in New York or view live 4K video walk-throughs of specific slab bundles arriving directly from Italy."
  },
  {
    category: "Fabrication & Installation",
    question: "What is the difference between Marble and Quartzite?",
    answer: "Marble is a metamorphic calcium carbonate stone prized for its soft flowing veining and classic aesthetic. Quartzite is a metamorphic sandstone composed of natural quartz, making it scratch-proof and highly resistant to kitchen acid etching."
  },
  {
    category: "Fabrication & Installation",
    question: "How are waterfall island edges fabricated to look seamless?",
    answer: "We utilize 5-axis CNC waterjets to cut precise 45-degree mitered edges, matching the veining around the top corner down to the floor for a solid block appearance."
  },
  {
    category: "Care & Warranty",
    question: "What sealants and warranties are included with marble installations?",
    answer: "All our natural stone installations receive a 25-Year Stain-Proof Penetrating Sealer treatment. We also provide a 10-Year Craftsmanship Guarantee on all mitered joints and anchoring."
  }
];

export const partners = [
  { name: "Carrara Quarry Alliance", logo: "CARRARA ITALY" },
  { name: "Antolini Italy", logo: "ANTOLINI" },
  { name: "Marble Institute of America", logo: "MIA GUILD" },
  { name: "Cosentino Stone", logo: "COSENTINO" },
  { name: "Dry-Treat Sealing", logo: "DRY-TREAT" },
  { name: "Waterjet Precision", logo: "WATERJET CNC" }
];
