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
  campus: 'NSS',
  academics: 'World Bank Focal Point Visit',
  sports: 'Govt. Tilak P.G.College',
  cultural: 'NCC',
  convocation: 'Tiranga Raily 12-08-2025',
};

// export const CATEGORY_TAGLINES: Record<CategorySlug, string> = {
//   campus: 'Courtyards, corridors and everyday campus life',
//   academics: 'Lectures, labs and life inside the classroom',
//   sports: 'Matches, meets and the annual sports calendar',
//   cultural: 'Fests, performances and the college stage',
//   convocation: 'Graduation day, year after year',
// };

import NSS01 from '@/assets/NSS/NSS01.png';
import NSS1 from '@/assets/NSS/NSS1.jpeg';
import NSS2 from '@/assets/NSS/NSS2.jpeg';
import NSS3 from '@/assets/NSS/NSS3.jpeg';
import NSS4 from '@/assets/NSS/NSS4.jpeg';
import NSS5 from '@/assets/NSS/NSS5.jpeg';
import NSS6 from '@/assets/NSS/NSS6.jpg';
import NSS7 from '@/assets/NSS/NSS7.jpeg';
import NSS8 from '@/assets/NSS/NSS8.jpeg';
import NSS9 from '@/assets/NSS/NSS9.jpeg';
import NSS10 from '@/assets/NSS/NSS10.jpeg';
import NSS11 from '@/assets/NSS/NSS11.jpeg';
import NSS12 from '@/assets/NSS/NSS12.jpeg';
import NSS13 from '@/assets/NSS/NSS13.jpeg';
import NSS14 from '@/assets/NSS/NSS14.jpeg';
import NSS15 from '@/assets/NSS/NSS15.jpeg';
import NSS16 from '@/assets/NSS/NSS16.jpeg';
import NSS17 from '@/assets/NSS/NSS17.jpeg';
import NSS18 from '@/assets/NSS/NSS18.jpeg';
import NSS19 from '@/assets/NSS/NSS19.jpeg';
import NSS20 from '@/assets/NSS/NSS20.jpeg';
import NSS21 from '@/assets/NSS/NSS21.jpeg';
import NSS22 from '@/assets/NSS/NSS22.jpeg';
import NSS23 from '@/assets/NSS/NSS23.jpeg';
import NSS24 from '@/assets/NSS/NSS24.jpeg';
import NSS25 from '@/assets/NSS/NSS25.jpeg';
import NSS26 from '@/assets/NSS/NSS26.jpeg';
import NSS27 from '@/assets/NSS/NSS27.jpeg';
import NSS28 from '@/assets/NSS/NSS28.jpeg';
import NSS29 from '@/assets/NSS/NSS29.jpeg';
import NSS30 from '@/assets/NSS/NSS30.jpeg';
import NSS31 from '@/assets/NSS/NSS31.jpeg';
import NSS32 from '@/assets/NSS/NSS32.jpeg';
import Govt from "@/assets/NSS/Govt.jpeg";
import WorldBank01 from "@/assets/NSS/WorldBank01.png";
import NCC01 from "@/assets/NSS/NCC01.png";
import Tiranga from "@/assets/NSS/Tiranga01.png";

// TODO: replace with real campus photography — these are placeholders.
// export const GALLERY_IMAGES: GalleryImage[] = [
//   { id: 1, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80&auto=format&fit=crop', category: 'campus', caption: 'The main library reading hall', height: 380, cover: true },
//   { id: 2, src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80&auto=format&fit=crop', category: 'convocation', caption: 'Convocation day, 2025 batch', height: 280, cover: true },
//   { id: 3, src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80&auto=format&fit=crop', category: 'campus', caption: 'The heritage academic block', height: 440 },
//   { id: 4, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80&auto=format&fit=crop', category: 'academics', caption: 'Students at a seminar', height: 300, cover: true },
//   { id: 5, src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80&auto=format&fit=crop', category: 'academics', caption: 'A lecture in progress', height: 360 },
//   { id: 6, src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&q=80&auto=format&fit=crop', category: 'campus', caption: 'Students between classes', height: 260 },
//   { id: 7, src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80&auto=format&fit=crop', category: 'sports', caption: 'Annual sports meet', height: 420, cover: true },
//   { id: 8, src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80&auto=format&fit=crop', category: 'sports', caption: 'Athletics track day', height: 300 },
//   { id: 9, src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=80&auto=format&fit=crop', category: 'cultural', caption: 'Cultural fest performance', height: 340, cover: true },
//   { id: 10, src: 'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=1200&q=80&auto=format&fit=crop', category: 'cultural', caption: 'Traditional dance evening', height: 400 },
//   { id: 11, src: 'https://images.unsplash.com/photo-1523289333742-be1143f6b766?w=1200&q=80&auto=format&fit=crop', category: 'campus', caption: 'The central courtyard', height: 300 },
//   { id: 12, src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&q=80&auto=format&fit=crop', category: 'academics', caption: 'Research lab session', height: 380 },
//   { id: 13, src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&q=80&auto=format&fit=crop', category: 'convocation', caption: 'Degrees being conferred', height: 260 },
//   { id: 14, src: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1200&q=80&auto=format&fit=crop', category: 'sports', caption: 'Inter-college tournament', height: 340 },
//   { id: 15, src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80&auto=format&fit=crop', category: 'cultural', caption: 'Annual day celebrations', height: 420 },
//   { id: 16, src: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=1200&q=80&auto=format&fit=crop', category: 'campus', caption: 'Evening at the quad', height: 300 },
// ];

export const GALLERY_IMAGES: GalleryImage[] = [
  // =========================
  // CAMPUS
  // =========================
  { id: 1, src: NSS01, category: 'campus', caption: 'NSS Photo\'s', height: 380, cover: true },
  { id: 2, src: NSS1, category: 'campus', caption: 'शासकीय तिलक महाविद्यालय के एनएसस छात्राओं द्वारा समाज सुधार हेतु विविध कार्यक्रमों का किया आयोजन (2025-26)', height: 440 },
  { id: 3, src: NSS2, category: 'campus', caption: 'तिलक स्नातकोत्तर महाविद्यालय में जल संरक्षण कार्यक्रम के अंतर्गत जल बचाओ कल बचाओ से संबंधित संगोष्ठी आयोजन (2025-26)', height: 260 },
  { id: 4, src: NSS3, category: 'campus', caption: 'तिलक स्नातकोत्तर महाविद्यालय में जल संरक्षण कार्यक्रम के अंतर्गत जल बचाओ कल बचाओ से संबंधित संगोष्ठी आयोजन (2025-26)', height: 300 },
  { id: 5, src: NSS4, category: 'campus', caption: 'परिसर की साफ सफाई पाउच... पन्नी .पालीथीन मुक्त करने का प्रयास', height: 320 },
  { id: 6, src: NSS5, category: 'campus', caption: 'परिसर की साफ सफाई पाउच... पन्नी .पालीथीन मुक्त करने का प्रयास', height: 360 },
  { id: 7, src: NSS6, category: 'campus', caption: 'PMCoE शासकीय तिलक  स्नातकोत्तर महाविद्यालय कटनी के एनएसएस की छात्राओं के द्वारा प्राचार्य डॉक्टर सुनील बाजपेई जी की अध्यक्षता में कार्यक्रम अधिकारी डॉक्टर माधुरी गर्ग के नेतृत्व में एस आई आर विशेष गहन पुनरीक्षण कार्यक्रम में BLO के साथ मिलकर कार्य कर रहे ', height: 420 },
  { id: 8, src: NSS7, category: 'campus', caption: 'महाविद्यालय की NSS स्वयंसेवक द्वारा SIRकाम में सहयोग करती हुई (2025-26)', height: 300 },
  { id: 9, src: NSS8, category: 'campus', caption: 'महाविद्यालय की NSS स्वयंसेवक द्वारा SIRकाम में सहयोग करती हुई (2025-26)', height: 380 },
  { id: 10, src: NSS9, category: 'campus', caption: 'विश्व एड्स जागरूकता सप्ताह के अंतर्गत विशेष कार्यशाला आयोजित', height: 340 },
  { id: 11, src: NSS10, category: 'campus', caption: 'विश्व एड्स जागरूकता सप्ताह के अंतर्गत विशेष कार्यशाला आयोजित (2025-26)', height: 400 },
  { id: 12, src: NSS11, category: 'campus', caption: 'NSS Photo\'s', height: 320 },
  { id: 13, src: NSS12, category: 'campus', caption: 'NSS Photo\'s', height: 360 },
  { id: 14, src: NSS13, category: 'campus', caption: 'NSS Photo\'s', height: 300 },
  { id: 15, src: NSS14, category: 'campus', caption: 'NSS Photo\'s', height: 430 },
  { id: 16, src: NSS15, category: 'campus', caption: 'NSS Photo\'s', height: 340 },
  { id: 17, src: NSS16, category: 'campus', caption: 'NSS Photo\'s', height: 390 },
  { id: 18, src: NSS17, category: 'campus', caption: 'NSS Photo\'s', height: 350 },
  { id: 19, src: NSS18, category: 'campus', caption: 'NSS Photo\'s', height: 310 },
  { id: 20, src: NSS19, category: 'campus', caption: 'NSS Photo\'s', height: 420 },
  { id: 21, src: NSS20, category: 'campus', caption: 'NSS Photo\'s', height: 330 },
  { id: 22, src: NSS21, category: 'campus', caption: 'NSS Photo\'s', height: 380 },
  { id: 23, src: NSS22, category: 'campus', caption: 'NSS Photo\'s', height: 300 },
  { id: 24, src: NSS23, category: 'campus', caption: 'NSS Photo\'s', height: 410 },
  { id: 25, src: NSS24, category: 'campus', caption: 'NSS Photo\'s', height: 360 },
  { id: 26, src: NSS25, category: 'campus', caption: 'NSS Photo\'s', height: 340 },
  { id: 27, src: NSS26, category: 'campus', caption: 'NSS Photo\'s', height: 390 },
  { id: 28, src: NSS27, category: 'campus', caption: 'NSS Photo\'s', height: 310 },
  { id: 29, src: NSS28, category: 'campus', caption: 'NSS Photo\'s', height: 430 },
  { id: 30, src: NSS29, category: 'campus', caption: 'NSS Photo\'s', height: 350 },
  { id: 31, src: NSS30, category: 'campus', caption: 'NSS Photo\'s', height: 380 },
  { id: 32, src: NSS31, category: 'campus', caption: 'NSS Photo\'s', height: 320 },
  { id: 33, src: NSS32, category: 'campus', caption: 'NSS Photo\'s', height: 400 },

  // =========================
  // ACADEMICS
  // =========================
  { id: 34, src: WorldBank01, category: 'academics', caption: 'Students at a seminar', height: 300, cover: true },
  { id: 35, src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80&auto=format&fit=crop', category: 'academics', caption: 'A lecture in progress', height: 360 },
  { id: 36, src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&q=80&auto=format&fit=crop', category: 'academics', caption: 'Research lab session', height: 380 },

  // =========================
  // SPORTS
  // =========================
  { id: 37, src: Govt, category: 'sports', caption: 'Annual sports meet', height: 420, cover: true },
  { id: 38, src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80&auto=format&fit=crop', category: 'sports', caption: 'Athletics track day', height: 300 },
  { id: 39, src: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1200&q=80&auto=format&fit=crop', category: 'sports', caption: 'Inter-college tournament', height: 340 },

  // =========================
  // CULTURAL
  // =========================
  { id: 40, src: NCC01, category: 'cultural', caption: 'Cultural fest performance', height: 340, cover: true },
  { id: 41, src: 'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=1200&q=80&auto=format&fit=crop', category: 'cultural', caption: 'Traditional dance evening', height: 400 },
  { id: 42, src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80&auto=format&fit=crop', category: 'cultural', caption: 'Annual day celebrations', height: 420 },

  // =========================
  // CONVOCATION
  // =========================
  { id: 43, src: Tiranga, category: 'convocation', caption: 'Convocation day, 2025 batch', height: 280, cover: true },
  { id: 44, src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&q=80&auto=format&fit=crop', category: 'convocation', caption: 'Degrees being conferred', height: 260 },
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