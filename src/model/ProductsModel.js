const mongoose = require ("mongoose")

const ProductSchema = mongoose.Schema(
    {
    ProductName: {type:String},
    productCode: {type:String},
    ProductImage: {type:String},
    UnitPrice: {type:String},
    Quantity: {type:String},
    TotalPrice:{type:String}
    },
    {timestamps:true, versionKey:false}
)

const ProductsModel = mongoose.model("products", ProductSchema)

module.exports = ProductsModel