export interface Palette {
  name: string;
  desc: string;
  swatchBg: string;
  hexes: { hex: string; bg: string; fg: string }[];
  accent: string;
  biome?:string;
}

export interface Feature {
  icon: string;
  bg: string;
  title: string;
  desc: string;
}

export interface Step {
  num: string;
  title: string;
  desc: string;
}

export interface Testimonial {
  stars: number;
  text: string;
  name: string;
  role: string;
  emoji: string;
}

export const palettes: Palette[] = [
  {
    name: "Forest Solstice",
    desc: "Deep canopy greens inspired by ancient temperate rainforests at midsummer.",
    swatchBg: "linear-gradient(135deg, #1a3a1a 0%, #2d5a27 50%, #4a7c59 100%)",
    hexes: [
      { hex: "#1A3A1A", bg: "#1a3a1a", fg: "#c8dbc0" },
      { hex: "#2D5A27", bg: "#2d5a27", fg: "#c8dbc0" },
      { hex: "#4A7C59", bg: "#4a7c59", fg: "white" },
    ],
    accent: "#4a7c59",
  },
  {
    name: "Autumn Clay",
    desc: "Warm terracotta and bark tones drawn from fired earth and dried botanicals.",
    swatchBg: "linear-gradient(135deg, #6b4423 0%, #a0653a 50%, #d4b896 100%)",
    hexes: [
      { hex: "#6B4423", bg: "#6b4423", fg: "#f5f0e8" },
      { hex: "#A0653A", bg: "#a0653a", fg: "white" },
      { hex: "#D4B896", bg: "#d4b896", fg: "#6b4423" },
    ],
    accent: "#a0653a",
  },
  {
    name: "Sage Mist",
    desc: "Soft grey-greens and morning dew tones from lichen-covered highlands.",
    swatchBg: "linear-gradient(135deg, #b5c4a1 0%, #87a878 50%, #c8dbc0 100%)",
    hexes: [
      { hex: "#87A878", bg: "#87a878", fg: "white" },
      { hex: "#B5C4A1", bg: "#b5c4a1", fg: "#2d5a27" },
      { hex: "#C8DBC0", bg: "#c8dbc0", fg: "#2d5a27" },
    ],
    accent: "#87a878",
  },
  {
    name: "Dark Fern",
    desc: "Rich, shadowed undergrowth — mossy floors and filtered dusk light.",
    swatchBg: "linear-gradient(135deg, #0f2410 0%, #1a3a1a 50%, #2d5a27 100%)",
    hexes: [
      { hex: "#0F2410", bg: "#0f2410", fg: "#b5c4a1" },
      { hex: "#1A3A1A", bg: "#1a3a1a", fg: "#b5c4a1" },
      { hex: "#2D5A27", bg: "#2d5a27", fg: "#c8dbc0" },
    ],
    accent: "#2d5a27",
  },
  {
    name: "Prairie Dust",
    desc: "Golden grasses and dry-season warmth from sun-bleached open plains.",
    swatchBg: "linear-gradient(135deg, #8b6345 0%, #d4b896 50%, #f5f0e8 100%)",
    hexes: [
      { hex: "#8B6345", bg: "#8b6345", fg: "white" },
      { hex: "#D4B896", bg: "#d4b896", fg: "#6b4423" },
      { hex: "#F5F0E8", bg: "#f5f0e8", fg: "#6b4423" },
    ],
    accent: "#8b6345",
  },
  {
    name: "Lichen Stone",
    desc: "Ancient rock surfaces dusted with pale, slow-growing botanical life.",
    swatchBg: "linear-gradient(135deg, #4a5e45 0%, #7a8c75 50%, #e8ede2 100%)",
    hexes: [
      { hex: "#4A5E45", bg: "#4a5e45", fg: "white" },
      { hex: "#7A8C75", bg: "#7a8c75", fg: "white" },
      { hex: "#E8EDE2", bg: "#e8ede2", fg: "#4a5e45" },
    ],
    accent: "#7a8c75",
  },
];

export const features: Feature[] = [
  {
    icon: "🌿",
    bg: "#e8ede2",
    title: "Living Color Theory",
    desc: "Rooted in the biochromatic principles of natural pigmentation, chlorophyll gradients, and mineral deposits found across ecosystems.",
  },
  {
    icon: "🌍",
    bg: "#f0e8d8",
    title: "Biome-Sourced",
    desc: "Every palette originates from a distinct biome — rainforest canopies, tundra moss, coral shallows, desert minerals, and highland mist.",
  },
  {
    icon: "🎨",
    bg: "#e8f0e8",
    title: "Exact Pigment Codes",
    desc: "Professional-grade hex, CMYK, Pantone, and RAL references ensure your designs match the precision of the natural source.",
  },
  {
    icon: "♾️",
    bg: "#ede8e0",
    title: "Seasonal Updates",
    desc: "New palettes are added with each solstice and equinox, tracking the living chromatic calendar of the planet in real time.",
  },
  {
    icon: "🖼️",
    bg: "#e0ede8",
    title: "Usage Templates",
    desc: "Ready-to-use brand kits, UI starter files, print swatches, and textile samples ship with every palette library.",
  },
  {
    icon: "🔬",
    bg: "#f5f0e8",
    title: "Scientific Accuracy",
    desc: "Spectrum-verified against physical field samples. No synthetic approximations — only true biological pigment data.",
  },
];

export const steps: Step[] = [
  { num: "01", title: "Field Collection", desc: "Botanists and ecologists gather physical pigment samples from verified habitats worldwide." },
  { num: "02", title: "Spectral Analysis", desc: "Samples are scanned under multi-spectral light to extract precise wavelength data." },
  { num: "03", title: "Digital Translation", desc: "Wavelengths are mapped to digital color spaces: sRGB, P3, CMYK, and LAB." },
  { num: "04", title: "Curation", desc: "Color scientists curate palettes for harmony, contrast, and emotional resonance." },
  { num: "05", title: "Publishing", desc: "Verified palettes are published with full source documentation and usage rights." },
];

export const testimonials: Testimonial[] = [
  {
    stars: 5,
    text: "Bio Palette transformed our brand. Every color we use now has a story — a forest, a coastline, a season. Our clients feel it immediately.",
    name: "Léa Marchand",
    role: "Brand Director, Verdure Studio",
    emoji: "🌿",
  },
  {
    stars: 5,
    text: "The spectral accuracy is unlike anything I've seen. As a textile designer, knowing my greens match actual fern pigment changes everything.",
    name: "Takeshi Yamamoto",
    role: "Senior Textile Designer, Mori Co.",
    emoji: "🪡",
  },
  {
    stars: 5,
    text: "We redesigned our entire product packaging using the Lichen Stone palette. Sales went up 34% in three months. The authenticity resonates.",
    name: "Sofia Andrade",
    role: "Creative Director, Raiz Foods",
    emoji: "🌱",
  },
];

export const galleryItems = [
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80", label: "Forest Brand Identity" },
  { src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600&q=80", label: "Clay Packaging" },
  { src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&q=80", label: "Mist Editorial" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", label: "Prairie Print" },
  { src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80", label: "Bark Interior" },
];

export const footerCollections = ["Forest Solstice", "Autumn Clay", "Sage Mist", "Dark Fern", "Prairie Dust", "Lichen Stone"];
export const footerResources = ["Starter Kit", "Pantone Map", "Figma Plugin", "Procreate Swatches", "CSS Variables", "Brand Guide"];
export const footerCompany = ["About", "Process", "Blog", "Press", "Careers", "Contact"];

export const statsData = [
  { n: 2840, s: "+", l: "Unique Colors" },
  { n: 48, s: "", l: "Biomes Mapped" },
  { n: 12000, s: "+", l: "Designers" },
  { n: 6, s: "", l: "Continents" },
];

export const spectrumColors = [
  "#1a3a1a", "#2d5a27", "#4a7c59", "#87a878", "#b5c4a1", "#c8dbc0",
  "#e8ede2", "#f5f0e8", "#d4b896", "#a0653a", "#6b4423", "#8b6345",
];