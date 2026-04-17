import { Category, Product, Review, SubscriptionPlan } from '@/types';

export const brand = {
  arabicName: 'حنيني سبيشل',
  englishName: 'Hanini Special',
  tagline: 'صُنع بحب في السعودية',
  description:
    'مشروع سعودي يقدّم تجربة ضيافة دافئة تجمع بين الحلى التراثي، والمشروبات المختارة، وبوكسات الجمعات، واشتراك الوجبات الصحية بخدمة مرتبة تناسب مختلف شرائح المجتمع في المملكة.'
};

export const categories: Category[] = [
  {
    id: 'desserts',
    title: 'الحلويات',
    shortDescription: 'حلويات شعبية فاخرة بلمسة تقديم عصرية.',
    longDescription:
      'نقدّم وصفات محبوبة بطابع سعودي أصيل مع عناية بالتفاصيل وجودة المكونات لتناسب الضيافة اليومية والمناسبات.',
    pricingHint: 'الأسعار تبدأ من 14 ريال'
  },
  {
    id: 'drinks',
    title: 'المشروبات',
    shortDescription: 'قهوة وشاي ومشروبات دافئة للضيافة.',
    longDescription:
      'خيارات مختارة بعناية تكمل تجربة الضيافة من القهوة السعودية وقهوة القشر إلى شاي الكرك والشاي المنكّه.',
    pricingHint: 'الأسعار تبدأ من 6 ريالات'
  },
  {
    id: 'boxes',
    title: 'بوكسات الجمعات',
    shortDescription: 'بوكسات متكاملة للجلسات العائلية والضيافة.',
    longDescription:
      'بوكسات أنيقة تجمع أصنافًا مختارة من الحلى والمشروبات مع إمكانية التخصيص حسب عدد الضيوف ونوع المناسبة.',
    pricingHint: 'الأسعار تبدأ من 129 ريال'
  },
  {
    id: 'healthy-meals',
    title: 'اشتراك الوجبات الصحية',
    shortDescription: 'اشتراك مرن مع اختيار الوجبات حسب الرغبة.',
    longDescription:
      'خدمة اشتراك شهرية تتيح للعميل اختيار وجباته الصحية المفضلة ضمن باقات أسبوعية أو شهرية تناسب نمط حياته.',
    pricingHint: 'الاشتراكات تبدأ من 349 ريال شهريًا'
  }
];

export const products: Product[] = [
  {
    id: 'hanini-special',
    categoryId: 'desserts',
    name: 'حنيني سبيشل',
    description: 'الوصفة الخاصة التي تحمل هوية المكان بطعم دافئ وتقديم فاخر.',
    image: '/products/hanini-special.jpg',
    featured: true,
    tags: ['الأكثر طلبًا', 'اختيار الحجم'],
    variants: [
      { label: 'صغير', price: 24, size: 'small' },
      { label: 'كبير', price: 42, size: 'large' }
    ]
  },
  {
    id: 'royal-gasht',
    categoryId: 'desserts',
    name: 'قشط ملكي',
    description: 'تحلية فاخرة بقوام غني وتقديم أنيق يناسب الضيافة الراقية.',
    image: '/products/royal-gasht.jpg',
    variants: [
      { label: 'صغير', price: 18, size: 'small' },
      { label: 'كبير', price: 33, size: 'large' }
    ]
  },
  {
    id: 'fattet-tamer',
    categoryId: 'desserts',
    name: 'فتة تمر بالقشطة',
    description: 'مزيج متوازن من التمر والقشطة في طبق ضيافة محبوب.',
    image: '/products/fattet-tamer.jpg',
    basePrice: 28
  },
  {
    id: 'saudi-coffee',
    categoryId: 'drinks',
    name: 'القهوة السعودية',
    description: 'قهوة سعودية بنكهة مميزة تناسب الجلسات والزيارات.',
    image: '/products/saudi-coffee.jpg',
    basePrice: 16
  },
  {
    id: 'qishr-coffee',
    categoryId: 'drinks',
    name: 'قهوة قشر',
    description: 'دفء تراثي بنكهة معروفة لعشاق الضيافة الأصيلة.',
    image: '/products/qishr-coffee.jpg',
    basePrice: 14
  },
  {
    id: 'karak-tea',
    categoryId: 'drinks',
    name: 'شاي كرك',
    description: 'شاي بالحليب والهيل يقدّم بنكهة متوازنة محبوبة.',
    image: '/products/karak-tea.jpg',
    basePrice: 12
  },
  {
    id: 'gathering-box-2',
    categoryId: 'boxes',
    name: 'بوكس الجمعات - صنفين',
    description: 'بوكس يجمع صنفين مع ترمس قهوة سعودية في تقديم متكامل.',
    image: '/products/gathering-box-2.jpg',
    basePrice: 129
  },
  {
    id: 'gathering-box-3',
    categoryId: 'boxes',
    name: 'بوكس الجمعات - 3 أصناف',
    description: 'خيار مثالي للجلسات الكبيرة مع تنويع أوسع في الأصناف.',
    image: '/products/gathering-box-3.jpg',
    basePrice: 179
  }
];

export const subscriptions: SubscriptionPlan[] = [
  {
    id: 'healthy-basic',
    title: 'الوجبات الصحية - باقة أساسية',
    description: '4 وجبات أسبوعيًا مع إمكانية اختيار الوجبات من القائمة المتاحة.',
    monthlyPrice: 349,
    bullets: ['اختيار الوجبات', 'توصيل مجدول', 'متابعة شهرية']
  },
  {
    id: 'healthy-plus',
    title: 'الوجبات الصحية - باقة بلس',
    description: '6 وجبات أسبوعيًا للأفراد الباحثين عن انتظام أكبر في التغذية.',
    monthlyPrice: 499,
    bullets: ['مرونة في الاختيار', 'خطة أسبوعية', 'أفضل قيمة']
  },
  {
    id: 'dessert-subscription',
    title: 'اشتراك الحلويات',
    description: 'تشكيلة أسبوعية من الحلويات الشعبية والمنتجات الموسمية.',
    monthlyPrice: 219,
    bullets: ['تنويع أسبوعي', 'مناسب للمنزل والمكتب', 'تخصيص بسيط عند الطلب']
  },
  {
    id: 'drinks-subscription',
    title: 'اشتراك المشروبات',
    description: 'توريد دوري للمشروبات الساخنة للمنزل أو بيئة العمل.',
    monthlyPrice: 169,
    bullets: ['قهوة وشاي', 'مرونة في الجدولة', 'مناسب للضيافة']
  },
  {
    id: 'gathering-subscription',
    title: 'اشتراك بوكسات الجمعات',
    description: 'بوكس أسبوعي أو نصف شهري جاهز للضيافة.',
    monthlyPrice: 299,
    bullets: ['بوكسات جاهزة', 'خيار التخصيص', 'توفير على الطلبات المتكررة']
  }
];

export const reviews: Review[] = [
  {
    id: 1,
    name: 'سارة العتيبي',
    location: 'الرياض',
    text: 'الترتيب راقٍ جدًا والطعم ثابت ومميز، خصوصًا القشط الملكي وبوكسات الجمعات.',
    rating: 5
  },
  {
    id: 2,
    name: 'أم نايف',
    location: 'الخبر',
    text: 'تجربة جميلة في الضيافة، التغليف أنيق ووصل الطلب في الوقت المناسب.',
    rating: 5
  },
  {
    id: 3,
    name: 'محمد الحربي',
    location: 'جدة',
    text: 'ميزة الاشتراك مناسبة جدًا للمكتب، وسهولة اختيار المنتجات رائعة.',
    rating: 5
  }
];

export const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '966500000000'}`;
