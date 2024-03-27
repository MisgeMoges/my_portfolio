import { useState } from "react";

export default function ContactMe() {
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    topic: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    };

    await fetch("https://portfolio-backend-ggd2.onrender.com/contact", options)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    setContactData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      topic: "Select One",
      message: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };
  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2>
          Contact <span style={{ color: "#5e3bee" }}>Me</span>
        </h2>
        <p className="text-lg">
          If you have any ideas to share with me, please feel free to leave your
          message here along with your genuine information.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="firstName"
              value={contactData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="lastName"
              value={contactData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              value={contactData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="text"
              className="contact--input text-md"
              name="phoneNumber"
              id="phoneNumber"
              value={contactData.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select
            id="choose-topic"
            name="topic"
            value={contactData.topic}
            onChange={handleChange}
            className="contact--input text-md"
          >
            <option>Select One...</option>
            <option>feedback on Portfolio</option>
            <option>Contact to Hire</option>
            <option>Other Information</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
            name="message"
            value={contactData.message}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
