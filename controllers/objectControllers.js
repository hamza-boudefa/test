const objects = require("../models/objectSchema");

const addNewObject = async (req, res) => {
    try {
      const newObject = new objects(req.body);
    if(newObject.price<50 || newObject.price>150 )
    console.log("invalid price");
      await newObject.save();
      return res.json({ message: "object added successfully", newObject });
    } catch (error) {
      return res.json({ message: error });
    }
  };
// get

  const getObject = async (req, res) => {
    try {
      const getObj = await objects.findOne(req.body);
      return res.json(getObj);
    } catch (error) {
      return res.json({ message: error });
    }
  };



// update

const updateObject = async (req, res) => {
    try {
      const updateObject = await objects.findByIdAndUpdate(
        req.params.id,
        { $set: { ...req.body } },
        { new: true }
      );
      await updateObject.save();
      return res.json({ message: "Object updated successfully", updateObject });
    } catch (error) {
      return res.json({ message: error });
    }
  };
  
  // delete
  
  const deleteObject = async (req, res) => {
    try {
      const deleteObject = await objects.findByIdAndDelete(req.params.id);
      return res.json({ message: "Object deleted successfully" });
    } catch (error) {
      return res.json({ message: error });
    }
  };


  module.exports = {addNewObject,updateObject,deleteObject,getObject};