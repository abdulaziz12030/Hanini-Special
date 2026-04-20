
import { Category, Product, Review } from '@/types'

export const storeMeta = {
  name: 'حنيني سبيشل',
  englishName: 'Hanini Special',
  tagline: 'نكهة دافئة ولمسة فاخرة',
  description:
    'حنيني سبيشل يقدم تجربة طعام راقية بروح دافئة، مع هوية بصرية هادئة ولمسات فخمة في العرض والتقديم وخيارات توصيل مرنة تناسب العميل.',
  whatsapp: '966500000000',
  instagram: 'https://www.instagram.com/',
  tiktok: 'https://www.tiktok.com/'
}

export const heroBanner = {
  title: 'HANINI SPECIAL',
  subtitle: 'تجربة شهية بطابع فاخر وهادئ',
  description:
    'أطباق مختارة، لمسة راقية، وخيارات توصيل مرنة تشمل التوصيل الخاص والاستلام من الفرع وشركاء النجاح.',
  posterImage: '/brand/hanini-wordmark.jpg',
  videoUrl: '',
  videoLabel: 'جاهزون لخدمتك يوميًا',
  primaryAction: '/products'
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'الأطباق الأكثر طلبًا',
    slug: 'best-sellers',
    description: 'اختياراتنا الأشهر بطابع مميز وتقديم أنيق.',
    image: '/images/products/alreem-camel.svg'
  },
  {
    id: '2',
    name: 'وجبات خاصة',
    slug: 'special-meals',
    description: 'خيارات منتقاة بعناية لتناسب الذوق الراقي.',
    image: '/images/products/alnoor-orange.svg'
  },
  {
    id: '3',
    name: 'صناديق ضيافة',
    slug: 'hospitality-boxes',
    description: 'حلول ضيافة مرتبة ومناسبة للمناسبات والاجتماعات.',
    image: '/images/products/alatheer-silver-blush.svg'
  },
  {
    id: '4',
    name: 'طلبات اليوم',
    slug: 'daily-orders',
    description: 'منتجات يومية سريعة التحضير عالية الجودة.',
    image: '/images/products/almada-blue.svg'
  }
]

export const products: Product[] = [
  {
    id: 'p1',
    name: 'وجبة حنيني الخاصة',
    slug: 'hanini-special-meal',
    category: 'الأطباق الأكثر طلبًا',
    categorySlug: 'best-sellers',
    shortDescription: 'وجبة مميزة بتفاصيل شهية وتقديم راقٍ.',
    description: 'وجبة متوازنة ومشبعة مناسبة للطلبات الفردية والعائلية بطابع حنيني الخاص.',
    price: 42,
    compareAtPrice: 52,
    stock: 11,
    rating: 4.8,
    reviewCount: 16,
    featured: true,
    hero: true,
    image: '/images/products/alreem-camel.svg',
    colors: ['ذهبي']
  },
  {
    id: 'p2',
    name: 'صندوق ضيافة مميز',
    slug: 'hospitality-box',
    category: 'صناديق ضيافة',
    categorySlug: 'hospitality-boxes',
    shortDescription: 'ترتيب أنيق يناسب الضيافة والاجتماعات.',
    description: 'صندوق ضيافة بلمسة فخمة مع تقديم مرتب وسهل ومناسب للمناسبات.',
    price: 85,
    compareAtPrice: 99,
    stock: 8,
    rating: 4.9,
    reviewCount: 11,
    featured: true,
    image: '/images/products/alnoor-orange.svg',
    colors: ['أسود', 'ذهبي']
  },
  {
    id: 'p3',
    name: 'عرض اليوم',
    slug: 'daily-special',
    category: 'طلبات اليوم',
    categorySlug: 'daily-orders',
    shortDescription: 'خيار يومي سريع مع جودة عالية.',
    description: 'اختيار يومي محبوب بطعم متوازن وسعر مناسب.',
    price: 29,
    compareAtPrice: 35,
    stock: 20,
    rating: 4.7,
    reviewCount: 20,
    featured: true,
    image: '/images/products/almada-blue.svg',
    colors: ['ذهبي']
  }
]

export function getFeaturedProducts() {
  return products.filter((product) => product.featured)
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug)
}

export function getProductsByCategorySlug(slug: string) {
  return products.filter((product) => product.categorySlug === slug)
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}

export const reviews: Review[] = [
  {
    id: 'r1',
    customer: 'سارة',
    body: 'الطلب مرتب والطعم ممتاز والتغليف أنيق جدًا.'
  },
  {
    id: 'r2',
    customer: 'أميرة',
    body: 'أفضل شيء عندهم الالتزام واللمسة الراقية في التقديم.'
  }
]
