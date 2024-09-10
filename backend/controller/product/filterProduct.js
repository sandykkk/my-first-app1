const productModel = require("../../models/productModel")

const filterProductController = async(req,res)=>{
    try{
        const categoryList = req?.body?.category || []

        const product = await productModel.find({
            category : {
                "$in": categoryList
            }
        })

        res.json({
            data: product,
            message: "product",
            error: false,
            success: true
        })
    }catch(err){
        req.json({
            message: err.message || err,
            success: false,
            error: true
        })
    }
}
module.exports = filterProductController