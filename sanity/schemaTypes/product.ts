export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'serves', title: 'Serves', type: 'string' },
    { name: 'leadTime', title: 'Lead Time', type: 'string' },
    { name: 'image', title: 'Image', type: 'image' },
    { name: 'featured', title: 'Featured', type: 'boolean' },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }
  ]
};
