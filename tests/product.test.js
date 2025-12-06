const request = require("supertest");
const app = require("../app");

describe("Product API Tests", () => {

    test("GET /api/products → should return empty array initially", async () => {
        const res = await request(app).get("/api/products");

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    test("POST /api/products → should create a product", async () => {
        const product = { name: "Laptop", price: 50000, stock: 10 };

        const res = await request(app)
            .post("/api/products")
            .send(product);

        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe("Laptop");
        expect(res.body.price).toBe(50000);
        expect(res.body.id).toBeDefined();
    });

    test("GET /api/products/:id → should return product", async () => {
        const res = await request(app).get("/api/products/1");

        expect(res.statusCode).toBe(200);
        expect(res.body.id).toBe(1);
    });

    test("PUT /api/products/:id → should update product", async () => {
        const update = { price: 45000 };

        const res = await request(app)
            .put("/api/products/1")
            .send(update);

        expect(res.statusCode).toBe(200);
        expect(res.body.price).toBe(45000);
    });

    test("DELETE /api/products/:id → should delete product", async () => {
        const res = await request(app).delete("/api/products/1");

        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("Product deleted");
    });

});
