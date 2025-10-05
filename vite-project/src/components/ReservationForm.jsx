import { useState } from "react";



export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: ""
  });

  const [confirmation, setConfirmation] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setConfirmation(
      `Thank you ${formData.name}! Your table for ${formData.guests} on ${formData.date} at ${formData.time} has been reserved.`
    );
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: ""
    });
  }

  return (
    <div className="reservation-form">
      <h2>Reserve a Table</h2>
      <p>Book your spot at Little Lemon</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <select
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
        >
          <option value="">Number of Guests</option>
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
          <option value="5">5 Guests</option>
          <option value="6+">6+ Guests</option>
        </select>

        <button type="submit" className="btn">Confirm Reservation</button>
      </form>

      {confirmation && <p className="confirmation">{confirmation}</p>}
    </div>
  );
}