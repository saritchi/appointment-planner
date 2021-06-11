import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Name: </label><input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <label>Phone: </label><input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} pattern="[0-9]{3}[0-9]{3}[0-9]{4}"/>
      <label>Email: </label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type="submit" />
    </form>
  );
};

