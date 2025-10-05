import React from "react";

const specials = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    description: "Fresh vegetables with feta cheese and olives",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Bruschetta",
    price: "$8.99",
    description: "Grilled bread with tomatoes and herbs",
    image:
      "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$6.99",
    description: "Homemade lemon cake with fresh berries",
    image:
      "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

function Specials() {
  return (
    <section className="specials">
      <h2>Our Specials</h2>
      <div className="specials-grid">
        {specials.map((item) => (
          <div key={item.id} className="special-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span className="price">{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}



export default Specials;


