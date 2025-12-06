const express = require("express");

const app = express();
app.use(express.json());

// Dummy in-memory data
let products = [];
let nextId = 1;

// GET ALL PRODUCTS
app.get("/api/products", (req, res) => {
    res.json(products);
});

// CREATE PRODUCT
app.post("/api/products", (req, res) => {
    const { name, price, stock = 0 } = req.body;

    if (!name || !price)
        return res.status(400).json({ error: "Name and price are required" });

    const newProduct = {
        id: nextId++,
        name,
        price,
        stock
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
});

// GET SINGLE PRODUCT
app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p.id == req.params.id);

    if (!product)
        return res.status(404).json({ error: "Product not found" });

    res.json(product);
});

// UPDATE PRODUCT
app.put("/api/products/:id", (req, res) => {
    const product = products.find((p) => p.id == req.params.id);

    if (!product)
        return res.status(404).json({ error: "Product not found" });

    const { name, price, stock } = req.body;

    product.name = name ?? product.name;
    product.price = price ?? product.price;
    product.stock = stock ?? product.stock;

    res.json(product);
});

// DELETE PRODUCT
app.delete("/api/products/:id", (req, res) => {
    const index = products.findIndex((p) => p.id == req.params.id);

    if (index === -1)
        return res.status(404).json({ error: "Product not found" });

    products.splice(index, 1);
    res.json({ message: "Product deleted" });
});

module.exports = app;
