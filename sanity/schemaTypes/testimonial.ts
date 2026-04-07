export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'city', title: 'City', type: 'string' },
    { name: 'text', title: 'Text', type: 'text' },
    { name: 'rating', title: 'Rating', type: 'number' },
    { name: 'occasion', title: 'Occasion', type: 'string' }
  ]
};
