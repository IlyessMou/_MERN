const ProductController = require("../controllers/controller.product")


module.exports = (app) => {
    app.post("/api/products", ProductController.createNewProduct);
}
