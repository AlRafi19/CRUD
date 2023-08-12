const ProductsModel = require("../model/ProductsModel")

// ....Create Product....

exports.CreateProduct = (req, res) => {
    let reqBody = req.body;
    ProductsModel.create(reqBody)
        .then((data) => {
            res.status(200).json({ status: "success", data: data });
        })
        .catch((err) => {
            res.status(400).json({ status: "fail", data: err });
        });
};

// ....Read product.... 

// here maling a list of all product/ Reading all products from Database ... 

exports.ReadProduct=(req,res)=>{
    let Query = {}
    let Projection = "ProductName productCode ProductImage UnitPrice Quantity TotalPrice"
    ProductsModel.find(Query,Projection)
    .then((data) => {
        res.status(200).json({ status: "success", data: data });
    })
        .catch((err) => {
            res.status(400).json({ status: "fail", data: err });
        });
}


//....Update Product....

exports.UpdateProduct=(req,res)=>{
    let id = req.params.id
    let Query = {_id:id}
    let reqBody= req.body
    
   ProductsModel.updateOne(Query,reqBody,(err,data)=>{
       if(err){
           res.status(400).json({status:"fail", data:err}) 
       }else{
           res.status(200).json({status:"success", data:data}) 
       }
   })
}

//...Delete Product....

exports.DeleteProduct=(req,res)=>{
    let id = req.params.id
    let Query = {_id:id}
   ProductsModel.deleteOne(Query,(err,data)=>{
       if(err){
           res.status(400).json({status:"fail", data:err}) 
       }else{
           res.status(200).json({status:"success", data:data}) 
       }
   })
}
