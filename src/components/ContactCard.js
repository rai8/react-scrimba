import React from "react";

export default function ContactCard(props) {
  return (
    <div className="contact-card">
      <img src={props.contact.imgUrl} alt={props.contact.alt} />
      <h3>{props.contact.name}</h3>
      <p>Phone: {props.contact.phone}</p>
      <p>Email: {props.contact.email}</p>
    </div>
  );
}
