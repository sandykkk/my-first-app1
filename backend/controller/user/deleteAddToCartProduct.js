const addToCartModel = require("../../models/cartProduct")

const deleteAddToCartProduct = async(req,res)=>{
    try {
        const currentUserId = req.userId
        const addToCartProductId = req.body._id

        const deleteProduct = await addToCartModel.deleteOne({_id: addToCartProductId})

        res.json({
            message: "Product delete from Cart",
            error: false,
            success: true,
            data: deleteProduct
        })

    } catch (err) {
        res.json({ 
            message: err?.message || err,
            success: false,
            error: true
        })
    }
}
module.exports = deleteAddToCartProduct