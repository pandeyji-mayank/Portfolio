import { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const ref = useRef();

  const formRef = useRef();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_y82k0z4", "template_32pl2bi", formRef.current, {
        publicKey: "t5aB7rvTSy-Q0CzWT",
      })
      .then(
        () => {
          setSuccess(true);
          console.log("SUCCESS!");
        },
        (error) => {
          setError(true);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1>Let's Work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>mayankpandey0303@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>New Boys Hostel IIIT Bhagalpur</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+91 8009840009</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <svg
            fill="#ff7800"
            height="450px"
            width="450px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 478.417 478.417"
            xmlSpace="preserve"
            stroke="#ff7800"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g id="XMLID_659_">
                  {" "}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                    id="XMLID_1611_"
                    d="M283.682,352.1c-12.2-12-27.4-12-39.5,0c-9.2,9.2-18.5,18.3-27.6,27.7c-2.5,2.5-4.6,3.1-7.6,1.4 c-6-3.2-12.3-5.9-18.1-9.5c-26.8-16.8-49.2-38.5-69.1-62.9c-9.9-12.1-18.7-25.1-24.7-39.6c-1.2-3-1-4.9,1.4-7.3 c9.2-8.9,18.3-18.1,27.3-27.2c12.6-12.7,12.6-27.6-0.1-40.5c-7.2-7.3-14.5-14.5-21.7-21.7c-7.5-7.5-14.8-15-22.4-22.3 c-12.2-12-27.4-12-39.5,0c-9.3,9.1-18.3,18.6-27.7,27.5c-8.8,8.4-13.2,18.5-14.1,30.4c-1.4,19.3,3.3,37.5,9.9,55.4 c13.7,36.8,34.5,69.4,59.7,99.4c34,40.5,74.7,72.6,122.3,95.7c21.4,10.4,43.7,18.4,67.8,19.7c16.6,0.9,31.1-3.3,42.6-16.2 c7.9-8.9,16.8-16.9,25.2-25.4c12.4-12.5,12.5-27.8,0.2-40.2C313.282,381.6,298.482,366.8,283.682,352.1z"
                  />{" "}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                    id="XMLID_1712_"
                    d="M326.782,0c-83.7,0-151.5,67.8-151.5,151.5c0,39.5,15.1,75.5,39.9,102.4c-5.8,11.8-15.3,25.8-29.9,32.9 c-5.1,2.5-3.9,10.1,1.7,11c16.5,2.6,40-0.2,62.2-16.3c22.7,13.6,49.3,21.4,77.7,21.4c83.7,0,151.5-67.8,151.5-151.5 C478.282,67.9,410.482,0,326.782,0z M326.782,81.9c-38.4,0-69.6,31.2-69.6,69.6c0,10-8.1,18.1-18.1,18.1s-18.1-8.1-18.1-18.1 c0-58.4,47.5-105.9,105.9-105.9c10,0,18.1,8.1,18.1,18.1C344.882,73.8,336.782,81.9,326.782,81.9z"
                  />{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button type="submit">Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
