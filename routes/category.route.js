const category_controller = require("../controllers/category.controller")


module.exports = (app)  =>{
    app.post("/ecomm/api/v1/auth/categoryInsert",category_controller.insertCategory);

    app.get("/ecomm/api/v1/auth/categoryFetch",category_controller.find);

    app.delete("/ecomm/api/v1/auth/categoryDelete",category_controller.categoryDelete);

    app.put("/ecomm/api/v1/auth/categoryUpdate",category_controller.categoryUpdate);
}