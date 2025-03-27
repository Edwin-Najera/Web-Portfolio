import { Fragment } from "react";
import "./global.css";

const Contact = () => {
  return (
    <Fragment>
      <div className="container-fluid text-start" id="contactContainer">
        <div className="row align-items-start">
          <div className="col">
            <h1 className="connect">Let's Connect</h1>
            <div className="txt">
              I’m currently seeking new job opportunities and my inbox is always
              open. If you have a question, want to discuss potential roles, or
              just want to say hi, I’ll get back to you as soon as possible. I
              look forward to hearing from you!
            </div>
          </div>

          <form className="col ml-2" id="form">
            <div className="container">
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  placeholder="name@example.com"
                />
                <label htmlFor="email">Email Address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
                <label htmlFor="subject">Subject</label>
              </div>
              <div className="form-floating mb-2">
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  placeholder="Your Message here"
                  rows={3}
                />
                <label htmlFor="message">Message</label>
              </div>
              <br />
              <input
                className="form-control mb-5"
                type="submit"
                name="submit"
                id="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
