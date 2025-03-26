import { Fragment, useState } from "react";
import "./global.css";

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      subject: e.target.email.value,
      message: e.target.email.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    // Check if the response is OK (status code 200-299)
    if (response.ok) {
      const resData = await response.json();
      console.log("Message Sent.", resData);
      setEmailSubmitted(true);
    } else {
      // If not OK, log the response for debugging
      const errorText = await response.text(); // Get error text
      console.error("Error:", errorText);
      throw new Error("Error sending message: " + errorText);
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
            <label htmlFor="email" className="label-tab">
              Enter Your Email:{" "}
            </label>
            <input
              className="input-item"
              type="text"
              name="Subject"
              placeholder="example@email.com"
              color="white"
            />
            <label htmlFor="subject" className="label-tab">
              Subject:{" "}
            </label>
            <input
              className="input-item"
              type="text"
              name="message"
              placeholder="Subject"
            />
            <label htmlFor="message" className="label-tab">
              Message:{" "}
            </label>
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
              onClick={handleSubmit}
            />
            {emailSubmitted && (
              <p className="text-sm pt-2 text-white">
                Message Sent Successfully! I will get back to you as soon as I
                can!
              </p>
            )}
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Contact;
