import React from "react";
import "./Contact.css";
import Footer from "./Footer";

function Contact() {
  return (
    <div>
      <div className="contact_head">
        <h1>Contact Me</h1>
      </div>
      <hr></hr>
      <div className="Contact_container">
        <div>
          <img
            className="Contact_image"
            src={require("./image/photo3.gif")}
            alt=""
          />
        </div>
        <div className="details">
          <form
            className="form"
            action="mailto:bharshit468@gamil.com"
            method="post"
          >
            <div className="name">
              <label className="details_header">Full name</label>
              <br />
              <input
                className="inputs"
                type="text"
                placeholder="What's your Full Name ?"
                required="true"
              ></input>
            </div>
            <div className="email">
              <label className="details_header">Email address</label>
              <br />
              <input
                className="inputs"
                type="email"
                placeholder="xxx@gmail.com"
                required="true"
              ></input>
            </div>
            <div className="message">
              <lable className="details_header">Your Message </lable>
              <br />
              <textarea
                className="textArea"
                required="ture"
                placeholder="Write something..."
              ></textarea>
            </div>
            <button className="contact_submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
