import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select onChange={onChange}>
      <option selected="selected">No Contact Selected</option>
      {contacts.map(contact => <option>{contact.name}</option>)}
    </select>
  );
};
