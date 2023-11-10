import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contact from "./contact.css";
import bb from "../../assets/blackberry.png";
import ford from "../../assets/ford.png";
import tencent from "../../assets/tencent.png";
import tesla from "../../assets/tesla.png";
import github from "../../assets/github.png";
import x from "../../assets/x.png";
import linkedin from "../../assets/linkedin.png";
import meta from "../../assets/meta.png";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d5ltess",
        "template_5inwzbv",
        form.current,
        "KWWzCzWASiVgfCPCoAdjB"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("email sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact--page">
      <div id="contact--client">
        <h2 className="my--clients">My Clients</h2>
        <p className="client--desc">
          I have worked with notable companies which includes
        </p>
        <div className="client--imgs">
          <img src={bb} alt={bb} className="client-img" />
          <img src={ford} alt={ford} className="client-img" />
          <img src={tencent} alt={tencent} className="client-img" />
          <img src={tesla} alt={tesla} className="client-img" />
        </div>
      </div>
      <div id="contact--contact">
        <h2 className="contact--me"> Contact Me</h2>
        <span className="conctact--description">
          Kindly fill the form below for any work opportunities
        </span>
        <form onSubmit={sendEmail} className="contact--form" ref={form}>
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your message"
          ></textarea>
          <button type="submit" value="send" className="submit--btn">
            Submit
          </button>
        </form>
        <div className="links">
          <img src={github} alt={github} className="links--img" />
          <img src={x} alt={x} className="links--img" />
          <img src={linkedin} alt={linkedin} className="links--img" />
          <img src={meta} alt={meta} className="links--img" />
        </div>
      </div>
    </section>
  );
}
