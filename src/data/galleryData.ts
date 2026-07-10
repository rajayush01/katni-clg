// Shared gallery data — single source of truth for both the landing
// section (category tiles) and the per-category gallery page.

export type CategorySlug = 'campus' | 'academics' | 'sports' | 'cultural' | 'convocation';

export interface GalleryImage {
  id: number;
  src: string;
  category: CategorySlug;
  caption: string;
  height: number; // controls masonry rhythm on the category page
  cover?: boolean; // marks the image used as the tile cover on the landing section
}

export const CATEGORY_LABELS: Record<CategorySlug, string> = {
  campus: 'Campus',
  academics: 'Academics',
  sports: 'Sports',
  cultural: 'Cultural',
  convocation: 'Convocation',
};

export const CATEGORY_TAGLINES: Record<CategorySlug, string> = {
  campus: 'Courtyards, corridors and everyday campus life',
  academics: 'Lectures, labs and life inside the classroom',
  sports: 'Matches, meets and the annual sports calendar',
  cultural: 'Fests, performances and the college stage',
  convocation: 'Graduation day, year after year',
};

// TODO: replace with real campus photography — these are placeholders.
export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80&auto=format&fit=crop', category: 'campus', caption: 'The main library reading hall', height: 380, cover: true },
  { id: 2, src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80&auto=format&fit=crop', category: 'convocation', caption: 'Convocation day, 2025 batch', height: 280, cover: true },
  { id: 3, src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80&auto=format&fit=crop', category: 'campus', caption: 'The heritage academic block', height: 440 },
  { id: 4, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80&auto=format&fit=crop', category: 'academics', caption: 'Students at a seminar', height: 300, cover: true },
  { id: 5, src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80&auto=format&fit=crop', category: 'academics', caption: 'A lecture in progress', height: 360 },
  { id: 6, src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&q=80&auto=format&fit=crop', category: 'campus', caption: 'Students between classes', height: 260 },
  { id: 7, src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80&auto=format&fit=crop', category: 'sports', caption: 'Annual sports meet', height: 420, cover: true },
  { id: 8, src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80&auto=format&fit=crop', category: 'sports', caption: 'Athletics track day', height: 300 },
  { id: 9, src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=80&auto=format&fit=crop', category: 'cultural', caption: 'Cultural fest performance', height: 340, cover: true },
  { id: 10, src: 'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=1200&q=80&auto=format&fit=crop', category: 'cultural', caption: 'Traditional dance evening', height: 400 },
  { id: 11, src: 'https://images.unsplash.com/photo-1523289333742-be1143f6b766?w=1200&q=80&auto=format&fit=crop', category: 'campus', caption: 'The central courtyard', height: 300 },
  { id: 12, src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&q=80&auto=format&fit=crop', category: 'academics', caption: 'Research lab session', height: 380 },
  { id: 13, src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&q=80&auto=format&fit=crop', category: 'convocation', caption: 'Degrees being conferred', height: 260 },
  { id: 14, src: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1200&q=80&auto=format&fit=crop', category: 'sports', caption: 'Inter-college tournament', height: 340 },
  { id: 15, src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80&auto=format&fit=crop', category: 'cultural', caption: 'Annual day celebrations', height: 420 },
  { id: 16, src: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=1200&q=80&auto=format&fit=crop', category: 'campus', caption: 'Evening at the quad', height: 300 },
];

export const CATEGORY_ORDER: CategorySlug[] = ['campus', 'academics', 'sports', 'cultural', 'convocation'];

export function getImagesByCategory(category: CategorySlug): GalleryImage[] {
  return GALLERY_IMAGES.filter((img) => img.category === category);
}

export function getCoverImage(category: CategorySlug): GalleryImage {
  return (
    GALLERY_IMAGES.find((img) => img.category === category && img.cover) ??
    GALLERY_IMAGES.find((img) => img.category === category)!
  );
}