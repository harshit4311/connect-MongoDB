const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://harshitshah1605:4311@harshitdb.wtprwst.mongodb.net/?retryWrites=true&w=majority&appName=harshitDB"
  )
  .then(() => {
    console.log("MongoDb Connected");
  })
  .catch((err) => {
    console.log("Failed", err);
  });

// ProductSchema
const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  product_price: {
    type: String,
    required: true,
  },
  isInStock: {
    type: Boolean,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const productModel = mongoose.model("products", productSchema);

// Create
// Create
app.post("/api/products", async (req, res) => {
    try {
      const product = await productModel.create({
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        isInStock: req.body.isInStock,
        category: req.body.category,
      });
  
      console.log(product);
  
      return res.status(201).json({ message: "Product Created", product });
    } 
    catch (error) {
      console.error("Error creating product:", error);
      return res.status(500).json({ error: "Failed to create product" });
    }
  });

app.listen(3000, () => {
  console.log("Server sarted at port 3000");
});