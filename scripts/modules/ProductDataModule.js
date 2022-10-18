const ProductDataModule = (function () {
  const products = [
    {
      type: "Pizza",
      name: "Vesuvio",
      description: "Tomato Sauce, Cheese, Ham",
      salesPrice: 99,
      costPrice: 35
    },
    {
      type: "Pizza",
      name: "Cappricciosa",
      description: "Tomato Sauce, Cheese, Ham, Mushroom",
      salesPrice: 99,
      costPrice: 35
    },
    {
      type: "Pizza",
      name: "Hawaii",
      description: "Tomato Sauce, Cheese, Ham, Pineapple",
      salesPrice: 99,
      costPrice: 35
    },
    {
      type: "Pizza",
      name: "Spicy Salami",
      description: "Tomato Sauce, Cheese, Spicy Salami, Chili Flakes",
      salesPrice: 105,
      costPrice: 40
    },
    {
      type: "Pizza",
      name: "Pepperoni",
      description: "Tomato Sauce, Cheese, Pepperoni, Onion",
      salesPrice: 99,
      costPrice: 35
    },
    {
      type: "Pizza",
      name: "Opera",
      description: "Tomato Sauce, Cheese, Bacon, Salami, Mushroom, Onion",
      salesPrice: 99,
      costPrice: 35
    },
    {
      type: "Pizza",
      name: "Mexicana",
      description: "Tomato Sauce, Cheese, Meat Sauce, Pepper, Jalapeno",
      salesPrice: 110,
      costPrice: 45
    },
    {
      type: "Pizza",
      name: "Tropicana",
      description: "Tomato Sauce, Cheese, Ham, Shrimp, Mussels",
      salesPrice: 110,
      costPrice: 45
    },
    {
      type: "Pizza",
      name: "Provencale",
      description: "Tomato Sauce, Cheese, Ham, Fresh Tomato, Fresh Garlic, Ruccola",
      salesPrice: 110,
      costPrice: 45
    },
    {
      type: "Pizza",
      name: "Kebab Pizza",
      description: "Tomato Sauce, Cheese, Kebab Meat, Fresh Salad, Tomato, Onion, Kebab Sauce",
      salesPrice: 120,
      costPrice: 50
    },
    {
      type: "Pizza",
      name: "Rolando Special",
      description: "Tomato Sauce, Cheese, Fillet Beef, Onion, Mushroom, Bearnaise Sauce",
      salesPrice: 120,
      costPrice: 50
    },
    {
      type: "Pizza",
      name: "Norway Special",
      description: "Tomato Sauce, Cheese, Fillet Beef, Bacon, Pepper, Garlic Sauce",
      salesPrice: 120,
      costPrice: 50
    },
    {
      type: "Drink",
      name: "Sparkling Water",
      description: "Bottle (50cl)",
      salesPrice: 15,
      costPrice: 2
    },
    {
      type: "Drink",
      name: "Coca Cola",
      description: "Bottle (50cl)",
      salesPrice: 20,
      costPrice: 4
    },
    {
      type: "Drink",
      name: "Coca Cola Zero",
      description: "Bottle (50cl)",
      salesPrice: 20,
      costPrice: 4
    },
    {
      type: "Drink",
      name: "Fanta",
      description: "Bottle (50cl)",
      salesPrice: 20,
      costPrice: 4
    },
    {
      type: "Drink",
      name: "Sprite",
      description: "Bottle (50cl)",
      salesPrice: 20,
      costPrice: 4
    },
    {
      type: "Sides",
      name: "Pizza Salad",
      description: "Traditional Side Pizza Salad",
      salesPrice: 10,
      costPrice: 1
    },
    {
      type: "Sides",
      name: "Kebab Sauce",
      description: "Box (10cl)",
      salesPrice: 10,
      costPrice: 1
    },
    {
      type: "Sides",
      name: "Bearnaise Sauce",
      description: "Box (10cl)",
      salesPrice: 10,
      costPrice: 1
    },
    {
      type: "Sides",
      name: "Garlic Sauce",
      description: "Box (10cl)",
      salesPrice: 10,
      costPrice: 1
    },
    {
      type: "Dessert",
      name: "Ice Cream",
      description: "Vanilla Ice Cream with Caramel Sauce",
      salesPrice: 10,
      costPrice: 1
    },
    {
      type: "Dessert",
      name: "Cake",
      description: "Chocolate Cake with Strawberry Sauce",
      salesPrice: 10,
      costPrice: 1
    }
    
  ];

  const getAllProducts = () => products;

  return { getAllProducts };
})();

export default ProductDataModule;
