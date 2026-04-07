// ملف تمهيدي للربط المستقبلي مع Sanity
// عند تفعيل Sanity أضف القيم داخل .env.local ثم فعّل الاستدعاءات من هنا.

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-01-01'
};

export const productQuery = `*[_type == "product"] | order(_createdAt desc){
  title,
  category,
  description,
  serves,
  leadTime,
  "image": image.asset->url,
  featured,
  tags
}`;

export const testimonialQuery = `*[_type == "testimonial"] | order(_createdAt desc){
  name,
  city,
  text,
  rating,
  occasion
}`;

export const socialQuery = `*[_type == "socialLink"] | order(_createdAt asc){
  title,
  url,
  handle,
  accent
}`;
