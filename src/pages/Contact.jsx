import React, { useState } from 'react';
import '../styles/contactSytles.css';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',  
    from_email: '', 
    message: '',
  });

  const [errors, setErrors] = useState({
    from_name: '', 
    from_email: '', 
    message: '', 
  });

  const handleBlur = (field, value) => {

    console.log("value: " + value)

    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: 'This field is required',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: '',
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("first value: " + value)
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_kg0h8nr', 'template_xwxts6q', e.target, 'oJYn056XuORmYfCO8')
      .then((result) => {
        alert("Message Sent Successfully!");
        setFormData({ from_name: '', from_email: '', message: '' });
      }, (error) => {
        alert("An error occurred, please try again.");
      });
  };

  return (
    <div className="contact-page">
      <section className="contact-page-content">
        <div className="contact-heading">
          <h2>Contact Me</h2>
          <p>If you have any questions or would like to get in touch, please fill out the form below.</p>
        </div>

        <section className="contactForm-Wrapper">
          <form className='contactForm' onSubmit={sendEmail}>
            <input


              // type="text"
              // Specifies the type of the input element as a text field.
              // This means the input will accept plain text (letters, numbers, etc.).
              type="text"

              // name="from_name"
              // Sets the name attribute of the input element to "from_name".
              // This helps identify the input when handling form data or submitting the form.
              // When the handleChange function is called, this name is used to update the corresponding key in the formData state.
              name="from_name"

              // placeholder="Enter your name"
              // Provides a hint to the user about what to enter in the field.
              // The placeholder text appears inside the input field until the user starts typing.
              placeholder="Enter your name"

              // value={formData.from_name}
              // This binds the input element's value to the from_name property of the formData state.
              // It ensures the input field is controlled, meaning its value is managed by React's state.
              // When the state formData.from_name changes, the input field's value will automatically reflect that change.
              value={formData.from_name}

              // onChange={handleChange}
              // This assigns the handleChange function to handle the onChange event.
              // The onChange event fires whenever the user types or changes the input value.
              // The handleChange function updates the state with the new value for from_name.
              onChange={handleChange}
              onBlur={() => handleBlur('from_name', formData.from_name)}
              required
            />
            {errors.from_name && <p className="error-message">{errors.from_name}</p>}

            <input
              type="email"
              name="from_email"
              placeholder="Enter your email"
              value={formData.from_email}
              onChange={handleChange}
              onBlur={() => handleBlur('from_email', formData.from_email)}
              required
            />
            {errors.from_email && <p className="error-message">{errors.from_email}</p>}

            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              onBlur={() => handleBlur('message', formData.message)}
              required
            />
            {errors.message && <p className="error-message">{errors.message}</p>}

            <button type="submit">Send</button>
          </form>
        </section>
      </section>
    </div>
  );
}

export default Contact;