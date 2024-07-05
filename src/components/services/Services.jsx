import { useRef } from "react";
import React from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import StarIcon from '@mui/icons-material/Star';



const variants = {
  initial: {
    x: -100,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Dream is not that which you see while sleeping
          <br /> it is something that does not let you sleep - APJ Kalam
        </p>
        <hr />
      </motion.div>
      <div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/college.jpg" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Platform</motion.b>{" "}
            Standings
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Know More</motion.b>{" "}
            About Me
            <a href="https://drive.google.com/file/d/1ragnbrmAVyXK_S3K8VEvHG7bGSGM7cVz/view?usp=sharing">
              <button>View Resume</button>
            </a>
          </h1>
        </div>
      </div>
      <div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Codeforces Expert</h2>
          <p>
            Codeforces <b>Expert</b>, with my account, redinside, achieved 554 rank in
            Div 2, 363 rank in Div 3, and boasts a max rating of 1631,
            showcasing exceptional proficiency in competitive programming.
          </p>
          <a href="https://codeforces.com/profile/redinside">Go</a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>CodeChef   5 <StarIcon ></StarIcon> </h2>
          <p>
            CodeChef standout, hiddeniiitian, shines with a <b>5-star rating,</b>
            demonstrating exceptional problem-solving skills and algorithmic
            expertise in competitive programming challenges.
          </p>
          <a href="https://www.codechef.com/users/hiddeniiitian">Go</a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>LeetCode Guardian</h2>
          <p>
            LeetCode standout, with the handle hiddeniiitan, commands a
            remarkable 2290 rating, placing in the <b>top 0.71%</b> globally, showcasing
            elite problem-solving skills in algorithmic challenges, wearing a <b>Guardian</b> Badge.
          </p>
          <a href="https://leetcode.com/hiddeniiitan/">Go</a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>AtCoder Cyan</h2>
          <p>
            AtCoder enthusiast, bearing the handle cyanCoder, attains a
            commendable 1204 rating and holds the prestigious 4 kyu rank,
            marking expertise in algorithmic problem-solving within the AtCoder
            community.
          </p>
          <a href="https://atcoder.jp/users/hiddeniiitian">Go</a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
