const express = require("express")
const ProductsController = require("../controller/ProductsController")
const router = express.Router()

// API Routing End Point 

//Product Create routing End Point .... 

router.post("/CreateProduct", ProductsController.CreateProduct)

// Read Product Routing End Point...

router.get("/ReadProduct", ProductsController.ReadProduct)

// Update Product Routing End Point...

router.post("/UpdateProduct/:id", ProductsController.UpdateProduct)

// Delete Product Routing End Point...

router.get("/DeleteProduct/:id", ProductsController.DeleteProduct)


module.exports= router