import { Fragment, useState } from "react";
import "./global.css";

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = () => {
    if (emailSubmitted) {
      console.log("Email will be submitted");
    }
  };
  return (
    <Fragment>
      <div className="container contact">
        <div className="reach">
          <h3 className="connect">Let's Connect</h3>
          I’m currently seeking new job opportunities and my inbox is always
          open. If you have a question, want to discuss potential roles, or just
          want to say hi, I’ll get back to you as soon as possible. I look
          forward to hearing from you!
        </div>
        <form onSubmit={handleSubmit}>
          <div className="container column">
            <label className="label-tab">Enter Your Email: </label>
            <input
              className="input-item"
              type="text"
              name="Subject"
              placeholder="example@email.com"
              color="white"
            />
            <label className="label-tab">Subject: </label>
            <input
              className="input-item"
              type="text"
              name="message"
              placeholder="Subject"
            />
            <label className="label-tab">Message: </label>
            <input
              className="input-item"
              type="text"
              name="message"
              id="message"
              placeholder="Your Message here"
            />
            <br />
            <input
              className="input-item"
              type="submit"
              name="submit"
              id="submit"
              onClick={() => setEmailSubmitted(true)}
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Contact;
