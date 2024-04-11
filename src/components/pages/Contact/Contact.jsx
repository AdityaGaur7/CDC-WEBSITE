import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

function Contact() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Msg, setMsg] = useState("");

  const HandleMsg = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "adkumargmail",
        "template_o3q8fxc",
        {
          from_name: Name,
          from_email: Email,
          message: Msg,
        },
        "96KwWOj585iomGuyD"
      );

      alert("Email sent successfully");
      setName("");
      setEmail("");
      setMsg("");
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Error sending email");
    }
  };
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="ok">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/test1-80c19.appspot.com/o/Codechef_team%2Fassets%2Fchat%20(1).png?alt=media&token=3228f7b1-378d-4dea-adb6-0c4ad3735f30"
            alt="ok"
          />

          <form>
            <h1 className="title text-center mb-4">CONTACT US</h1>

            <div className="form-group position-relative">
              <label htmlFor="formName" className="d-block">
                <i className="icon" data-feather="user"></i>
              </label>
              <input
                type="text"
                id="formName"
                className="form-control form-control-lg thick"
                placeholder="Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group position-relative">
              <label htmlFor="formEmail" className="d-block">
                <i className="icon" data-feather="mail"></i>
              </label>
              <input
                type="email"
                id="formEmail"
                className="form-control form-control-lg thick"
                placeholder="E-mail"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group message">
              <textarea
                id="formMessage"
                className="form-control form-control-lg"
                rows="7"
                placeholder="Write your message here"
                value={Msg}
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary"
                tabIndex="-1"
                onClick={HandleMsg}
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    
    </div>
  );
}

export default Contact;
