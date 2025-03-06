 Order Management System 
 API DocumenThis API provides role-based authentication and product management for the Order Management System. Users can register, log in, and manage products based on their roles (Manufacturer, Seller,     Customer).

*Authentication API
Register a User Seller And manufacturer change the role

           Endpoint: POST /api/auth/register   
                 Request Body:
                   {
                        "name": "John Doe",
                       "email": "john@example.com",
                        "password": "password123",
                          role": "manufacturer"
                   }       


              Response:
                 {
                     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3Yzk3YmM0Y2FiNDExMjhmOGEyNGIzNyIsImlhdCI6MTc0MTI3OTg2NiwiZXhwIjoxNzQxMjgzNDY2fQ._towbVaFfhaTOiP_GJKXSjm5fYesv8V4BeLc6HsYWiQ"
                       }

                       

A) ADD PRODUCT

                     Apiend point :POST api/products/add
                     Request Body:
                         {
                             "name": "iPhone 13 Pro",
                              "description": "Apple iPhone 13 Pro with A15 Bionic chip, 6.1-inch Super Retina XDR display, ProMotion, and triple-camera system.",
                              "quantity": 50,
                               "price": 999
                           }
                     Headers: Authorization: Bearer <token>

                     Response:
                        {
                              "name": "iPhone 13 Pro",
                              "description": "Apple iPhone 13 Pro with A15 Bionic chip, 6.1-inch Super Retina XDR display, ProMotion, and triple-camera system.",
                              "status": "available",
                               "quantity": 50,
                                "price": 999,
                                 "createdBy": "67c97bc4cab41128f8a24b37",
                               "_id": "67c9d74a15b161f446778a74",
                                 "__v": 0
                      }
                     


                    
B) API To CHANGE STATUS OF PROFUCT

                                Apiend point: PUT /api/products/67c9d74a15b161f446778a74/status

                                   Request Body:
                                   {
                                      "status": "faulty"
                                    }
                                   Response:
     {
    "_id": "67c9d74a15b161f446778a74",
    "name": "iPhone 13 Pro",
    "description": "Apple iPhone 13 Pro with A15 Bionic chip, 6.1-inch Super Retina XDR display, ProMotion, and triple-camera system.",
    "status": "faulty",
    "quantity": 50,
    "price": 999,
    "createdBy": "67c97bc4cab41128f8a24b37",
    "__v": 0,
    "lastUpdatedBy": "67c97bc4cab41128f8a24b37"
    }                      
                            


C) API to get the faulty products along with the details of who lastupdated the status


                   APIEND POINT:GET  /api/products/faulty
                    RESPONSE
                    [
    {
        "_id": "67c9d74a15b161f446778a74",
        "name": "iPhone 13 Pro",
        "description": "Apple iPhone 13 Pro with A15 Bionic chip, 6.1-inch Super Retina XDR display, ProMotion, and triple-camera system.",
        "status": "faulty",
        "quantity": 50,
        "price": 999,
        "createdBy": "67c97bc4cab41128f8a24b37",
        "__v": 0,
        "lastUpdatedBy": {
            "_id": "67c97bc4cab41128f8a24b37",
            "name": "John Doe",
            "email": "john@example.com",
            "role": "manufacturer"
        }
    }
    ]







D) Create an API to get all the orders with the seller,manufacturer,product and customers details-create oder

  
             create oder
                     endponitapi : http://localhost:5000/api/orders
                       Request body
                       {
             "product": "64f1b2c8e4b0f5a3d4e5f6a7",
             "seller": "67c98bc0d59425364edc6d4a",
             "manufacturer": "67c97bc4cab41128f8a24b37",
              "customer": "67c98c0ad59425364edc6d4d",
              "quantity": 5,
              "totalPrice": 500
             }

             response 

             {
    "product": "64f1b2c8e4b0f5a3d4e5f6a7",
    "seller": "67c98bc0d59425364edc6d4a",
    "manufacturer": "67c97bc4cab41128f8a24b37",
    "customer": "67c98c0ad59425364edc6d4d",
    "quantity": 5,
    "totalPrice": 500,
    "_id": "67c9e015abf1ed319f34e4b3",
    "orderDate": "2025-03-06T17:49:09.380Z",
    "__v": 0
}




Create an API to get all the orders with the seller,manufacturer,product and customers details

                 end poit of api:Get http://localhost:5000/api/orders
                 
                 response

                 {
    "orders": [
        {
            "_id": "67c9e015abf1ed319f34e4b3",
            "product": null,
            "seller": {
                "_id": "67c98bc0d59425364edc6d4a",
                "name": "Lakshmi",
                "email": "lakshminairkalleri@gamil.com"
            },
            "manufacturer": {
                "_id": "67c97bc4cab41128f8a24b37",
                "name": "John Doe",
                "email": "john@example.com"
            },
            "customer": {
                "_id": "67c98c0ad59425364edc6d4d",
                "name": "customer",
                "email": "customer@gamil.com"
            },
            "quantity": 5,
            "totalPrice": 500,
            "orderDate": "2025-03-06T17:49:09.380Z",
            "__v": 0
        }
    ],
    "totalOrders": 1,
    "page": 1,
    "limit": 10
}





 E) Create an API to get most ordered products list in decending order

       endpoint of api :Get /api/orders/most-ordered
       response 
       [
            {
    "product": "Product 1",
    "totalOrders": 10
  }
]


F) Create an API to get total orders & revenue grouped by month.


      end point of api : Get :/api/orders/revenue-by-month

      response

      [
    {
        "_id": 3,
        "totalOrders": 1,
        "totalRevenue": 500
    }
]

                  
          
                     
