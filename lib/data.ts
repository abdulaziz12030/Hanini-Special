import type { Category, Product, Review, SubscriptionPlan } from '@/types';

export const categories: Category[] = [
  {
    id: 'desserts',
    title: 'الحلويات',
    blurb: 'حلويات شعبية بلمسة سعودية أصيلة وتقديم أنيق يناسب الضيافة والمناسبات.'
  },
  {
    id: 'drinks',
    title: 'المشروبات',
    blurb: 'قهوة وشاي ومشروبات دافئة تكمل تجربة الضيافة بطابع فاخر ودافئ.'
  },
  {
    id: 'boxes',
    title: 'بوكسات الجمعات',
    blurb: 'بوكسات متكاملة تجمع بين الحلى والمشروبات لتناسب الجلسات العائلية والزيارات.'
  },
  {
    id: 'subs',
    title: 'الاشتراكات',
    blurb: 'اشتراكات شهرية مرنة للحلويات والمشروبات وبوكسات الجمعات والوجبات الصحية.'
  }
];

export const products: Product[] = [
  {
    id: 'hanini-special',
    name: 'حنيني سبيشل',
    description: 'وصفتنا الخاصة بطابع تراثي غني ومذاق دافئ مناسب للضيافة اليومية والمناسبات.',
    category: 'الحلويات',
    badge: 'الأكثر طلبًا',
    options: [
      { label: 'صغير', price: 18 },
      { label: 'كبير', price: 32 }
    ]
  },
  {
    id: 'qasht-malaki',
    name: 'قشط ملكي',
    description: 'قشط فاخر بتقديم أنيق ولمسة مميزة لعشاق الحلويات الغنية.',
    category: 'الحلويات',
    options: [
      { label: 'صغير', price: 20 },
      { label: 'كبير', price: 36 }
    ]
  },
  {
    id: 'saudi-coffee',
    name: 'قهوة سعودية',
    description: 'قهوة سعودية بنكهة أصيلة لتكمل تجربة الضيافة بأفضل صورة.',
    category: 'المشروبات',
    options: [
      { label: 'فردي', price: 8 },
      { label: 'ترمس', price: 45 }
    ]
  },
  {
    id: 'jumaa-box',
    name: 'بوكس الجمعات',
    description: 'بوكس متكامل يضم أصنافًا مختارة من الحلى والمشروبات لجلسة أكثر دفئًا وتميزًا.',
    category: 'البوكسات',
    badge: 'مميز',
    options: [
      { label: 'صنفين', price: 120 },
      { label: '3 أصناف', price: 169 }
    ]
  }
];

export const subscriptions: SubscriptionPlan[] = [
  {
    id: 'healthy-meals',
    title: 'اشتراك الوجبات الصحية',
    description: 'اشتراك مرن يتيح للعميل اختيار الوجبات المناسبة له طوال الشهر.',
    price: 599,
    features: ['اختيار الوجبات', 'تنسيق أسبوعي', 'مرونة في التخصيص']
  },
  {
    id: 'desserts-sub',
    title: 'اشتراك الحلويات',
    description: 'تنويع أسبوعي للحلويات الشعبية المميزة لعشاق الضيافة.',
    price: 199,
    features: ['تنويع أسبوعي', 'منتجات مختارة', 'مناسب للمنازل والمكاتب']
  },
  {
    id: 'drinks-sub',
    title: 'اشتراك المشروبات',
    description: 'اشتراك للقهوة والمشروبات الدافئة بشكل دوري ومنظم.',
    price: 149,
    features: ['قهوة وشاي', 'مناسب للضيافة', 'جدولة مريحة']
  },
  {
    id: 'boxes-sub',
    title: 'اشتراك بوكسات الجمعات',
    description: 'بوكس أسبوعي جاهز للجمعات العائلية والضيافة الخاصة.',
    price: 299,
    features: ['بوكس أسبوعي', 'تنسيق فاخر', 'مثالي للمناسبات']
  }
];

export const reviews: Review[] = [
  { id: '1', name: 'سارة', comment: 'التقديم أنيق والطعم رائع جدًا، تجربة تستحق التكرار.' },
  { id: '2', name: 'أم عبدالله', comment: 'بوكس الجمعات ممتاز وفخم ويصلح للضيافة بشكل جميل.' },
  { id: '3', name: 'ريم', comment: 'التنوع في الأحجام والأسعار مناسب جدًا وسهل في الاختيار.' }
];
