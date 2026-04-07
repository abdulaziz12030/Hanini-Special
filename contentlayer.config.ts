import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc: { _raw: { flattenedPath: string } }) => doc._raw.flattenedPath.replace(/^[^/]+\//, '')
  }
};

export const Product = defineDocumentType(() => ({
  name: 'Product',
  filePathPattern: 'products/*.json',
  contentType: 'data',
  fields: {
    title: { type: 'string', required: true },
    category: { type: 'string', required: true },
    description: { type: 'string', required: true },
    serves: { type: 'string', required: true },
    leadTime: { type: 'string', required: true },
    image: { type: 'string', required: true },
    featured: { type: 'boolean', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true }
  },
  computedFields
}));

export const Testimonial = defineDocumentType(() => ({
  name: 'Testimonial',
  filePathPattern: 'testimonials/*.json',
  contentType: 'data',
  fields: {
    name: { type: 'string', required: true },
    city: { type: 'string', required: true },
    text: { type: 'string', required: true },
    rating: { type: 'number', required: true },
    occasion: { type: 'string', required: true }
  },
  computedFields
}));

export const SocialLink = defineDocumentType(() => ({
  name: 'SocialLink',
  filePathPattern: 'social/*.json',
  contentType: 'data',
  fields: {
    title: { type: 'string', required: true },
    url: { type: 'string', required: true },
    handle: { type: 'string', required: true },
    accent: { type: 'string', required: true }
  },
  computedFields
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Product, Testimonial, SocialLink]
});
