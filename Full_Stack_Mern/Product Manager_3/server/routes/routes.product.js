const ProductController = require("../controllers/controller.product")


module.exports = (app) => {
    app.post("/api/products", ProductController.createNewProduct);
    app.get("/api/products", ProductController.findALLProducts);
    app.get("/api/products/:id", ProductController.findOneSingleProduct);
    app.put("/api/update/:id", ProductController.updateExistingProduct);
    app.delete("/api/products/:id", ProductController.deleteAnExistingProduct)
}
