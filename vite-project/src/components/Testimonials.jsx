import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      comment: "The best Mediterranean food I've ever had! The flavors are incredible.",
      avatar: "/customer1.jpg" 
    },
    {
      id: 2,
      name: "John D.",
      rating: 5,
      comment: "Amazing atmosphere and even better food. Will definitely be back!",
      avatar: "/customer2.jpg"
    },
    {
      id: 3,
      name: "Maria L.",
      rating: 4,
      comment: "Fresh ingredients and friendly service. Highly recommended!",
      avatar: "/customer3.jpg"
    },
    {
      id: 4,
      name: "Mike R.",
      rating: 5,
      comment: "The lemon dessert is to die for! Perfect ending to a great meal.",
      avatar: "/customer4.jpg"
    }
  ];

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="customer-avatar">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }}
                />
              </div>
              <div className="rating">{renderStars(testimonial.rating)}</div>
              <p style={{fontStyle: 'italic', marginBottom: '1rem'}}>"{testimonial.comment}"</p>
              <p style={{fontWeight: 'bold'}}>- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;