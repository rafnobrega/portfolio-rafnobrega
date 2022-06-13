import "./contact.css";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_feak0s8", //THIS COMES FROM EMAILJS.COM
        "template_nreiesg", //THIS COMES FROM EMAILJS.COM
        formRef.current,
        "GddRYuUA-YWZIhphF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Send me a message</h1>
          <div className="c-info">
            <div className="c-info-item">
              <a href="tel:+17785221801" className="c-icon">
                <FiPhoneCall />
              </a>
              <p>+1 778-522-1801</p>
            </div>
            <div className="c-info-item">
              <a
                href="mailto:rafael.rlnr@outlook.com"
                rel="noreferrer"
                className="c-icon"
              >
                <MdEmail />
              </a>
              <p>rafael.rlnr@outlook.com</p>
            </div>
          </div>
        </div>

        <div className="c-right">
          <p className="c-desc">
            <b>Don't be a stranger.</b> Get in touch. Call, text, or send an
            email.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you for your message!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
