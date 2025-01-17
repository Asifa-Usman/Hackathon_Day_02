// Product Schema
export const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name'
      }
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().positive()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'Living Room',
          'Bedroom',
          'Dining Room',
          'Office',
          'Outdoor'
        ]
      }
    },
    {
      name: 'stock',
      title: 'Stock',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}]
    }
  ]
}

// Order Schema
export const order = {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'orderNumber',
      title: 'Order Number',
      type: 'string'
    },
    {
      name: 'customer',
      title: 'Customer',
      type: 'reference',
      to: [{type: 'customer'}]
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'product',
              type: 'reference',
              to: [{type: 'product'}]
            },
            {
              name: 'quantity',
              type: 'number'
            }
          ]
        }
      ]
    },
    {
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          'pending',
          'processing',
          'shipped',
          'delivered'
        ]
      }
    },
    {
      name: 'shippingAddress',
      title: 'Shipping Address',
      type: 'object',
      fields: [
        {name: 'street', type: 'string'},
        {name: 'city', type: 'string'},
        {name: 'state', type: 'string'},
        {name: 'zipCode', type: 'string'}
      ]
    }
  ]
}