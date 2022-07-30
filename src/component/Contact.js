import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <div className="contact_head">
        <h1>Contacts</h1>
      </div>
      <hr></hr>
      <div>
        <img src={require("./image/photo3.gif")} />
        <img src={require("./image/photo4.gif")} />
      </div>
    </div>
  );
}

export default Contact;
