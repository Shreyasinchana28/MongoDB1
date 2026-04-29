db.products.insertOne({
    product_id: "P001",
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: 45.00,
    stock_quantity: 100,
    expiry_date: new Date("2025-06-15")
})
db.products.insertMany([
    {
        product_id: "P002",
        name: "Full Cream Milk",
        category: "Dairy",
        price: 60.00,
        stock_quantity: 50,
        expiry_date: new Date("2025-05-20")
    },
    {
        product_id: "P003",
        name: "Potato Chips",
        category: "Snacks",
        price: 35.00,
        stock_quantity: 8,
        expiry_date: new Date("2025-12-01")
    },
    {
        product_id: "P004",
        name: "Whole Wheat Bread",
        category: "Bakery",
        price: 40.00,
        stock_quantity: 25,
        expiry_date: new Date("2025-05-10")
    },
    {
        product_id: "P005",
        name: "Orange Juice",
        category: "Beverages",
        price: 120.00,
        stock_quantity: 5,
        expiry_date: new Date("2025-07-30")
    },
    {
        product_id: "P006",
        name: "Fresh Spinach",
        category: "Vegetables",
        price: 30.00,
        stock_quantity: 3,
        expiry_date: new Date("2025-05-08")
    }
])
db.products.find({
    stock_quantity: { $lt: 10 }
})
db.products.find(
    {},
    {
        _id: 0,
        name: 1,
        price: 1,
        stock_quantity: 1
    }
)
db.products.deleteOne({
    product_id: "P003"
})
