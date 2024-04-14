const category_model = require("../models/category.model");

exports.insertCategory = async (req, res) => {
  const categoryObj = {
    name: req.body.name,
    description: req.body.description,
  };

  try {
    const category = await category_model.create(categoryObj);

    console.log(category);

    return res.status(200).send({
      message: "Given category has been successfully added!",
    });
  } catch (err) {
    res.status(400).send({
      message: "There is some problem in adding the category!",
    });
  }
};

//fetching the data from the database

exports.find = async (req, res) => {
  let categoryName = req.body.name;

  try {
    let category = await category_model.findOne({ name: categoryName });

    res.status(200).send({
      name: category.name,
      description: category.description,
    });
  } catch (err) {
    res.status(400).send({
      message: "There is some error while fetching the data!",
    });
  }
};

exports.categoryDelete = async (req, res) => {
  // Check if the 'name' property exists in the request body
  if (!req.body || !req.body.name) {
    return res.status(400).send({
      message: "Category name is missing in the request body"
    });
  }

  let categoryName = req.body.name;

  try {
    let categoryD = await category_model.deleteOne({ name: categoryName });

    return res.status(200).send({
      message: "The given category has been deleted successfully"
    });

  } catch (err) {
    res.status(400).send({
      message: "There is some problem while deleting the category"
    });
  }
};

//updating the documents of the collection

exports.categoryUpdate = (req,res) =>{
  let categoryName = req.body.name;

  try{
     let categoryU = category_model.updateOne({name : categoryName},{name : "Kids and Todlers Section",description : "This section is for kids as well as for todlers"})

    return res.status(200).send({
      message: "The given category has been updated successfully"
    });
  }catch(err){
    res.status(400).send({
      message: "There is some problem while updating the category"
    });
  }
}
