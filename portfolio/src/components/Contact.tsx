import { Fragment, useState } from "react";
import "./global.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [state, setState] = useState<string>();

  const handSubmit = (e) => {
    e.preventDefault();

    setState("loading");

    emailjs.sendForm(
      "service_jjivtzs",
      "template_y90rkqk",
      e.target,
      "kv-61HwN9YJbAzsqf"
    );

    alert("Email sent successfully!!");

    setTimeout(() => {
      setState("ready");
    }, 1500);
  };

  return (
    <Fragment>
      <section className="d-flex text-start justify-content-center mx-lg-5">
        <div className="d-lg-inline-flex align-items-start">
          <div className="d-sm-block mt-3 ms-sm-5" id="reach">
            <h1 className="connect">Let's Connect</h1>
            <div className="txt">
              I’m currently seeking new job opportunities and my inbox is always
              open. If you have a question, want to discuss potential roles, or
              just want to say hi, I’ll get back to you as soon as possible. I
              look forward to hearing from you!
            </div>
          </div>
          <form
            className="d-lg-inline-flex w-sm-100"
            id="form"
            onSubmit={handSubmit}
          >
            <div className="container w-sm-100">
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  type="email"
                  id="Email"
                  name="email_from"
                  placeholder="name@example.com"
                />
                <label htmlFor="Email">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="subject"
                  placeholder="Subject"
                />
                <label htmlFor="subject">Name</label>
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
                disabled={state == "loading"}
              />
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
