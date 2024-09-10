const addToCartModel =  require("../../models/cartProduct")

const addToCartViewProduct = async(req,res)=>{
    try {
        const CurrentUser = req.userId
        
        const allProduct = await addToCartModel.find({
            userId : CurrentUser
        }).populate("productId")
      
        res.json({
            data: allProduct,
            success: true,
            error: false
        })

    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}
module.exports= addToCartViewProduct