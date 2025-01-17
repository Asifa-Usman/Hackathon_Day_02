Product Endpoints
GET /api/products
Fetches all available products.

javascriptCopyResponse: {
  products: [
    {
      id: string,
      name: string,
      price: number,
      description: string,
      category: string,
      stock: number,
      images: string[]
    }
  ]
}
 //GET /api/products/{id}
Fetches a specific product by ID.
javascriptCopyResponse: {
  id: string,
  name: string,
  price: number,
  description: string,
  category: string,
  stock: number,
  images: string[]
}
Order Endpoints
POST /api/orders
Creates a new order.
javascriptCopyRequest: {
  customerId: string,
  products: [
    {
      productId: string,
      quantity: number
    }
  ],
  shippingAddress: {
    street: string,
    city: string,
    state: string,
    zipCode: string
  }
}

Response: {
  orderId: string,
  status: string,
  estimatedDelivery: string
}
GET /api/orders/{id}
Fetches order status.
javascriptCopyResponse: {
  orderId: string,
  status: string,
  products: Array,
  shippingStatus: string,
  deliveryDate: string
}