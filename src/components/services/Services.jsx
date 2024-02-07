import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
const variants = {
  initial: {
    x: -500,
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
          focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Buisness
            <button>What we do?</button>
          </h1>
        </div>
      </div>
      <div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            fuga illo enim saepe tempora, tempore error dignissimos debitis, ab
            autem delectus repudiandae consequatur atque ex placeat. Sunt
            repudiandae harum expedita.
          </p>
          <button>Go</button>
        </motion.div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            fuga illo enim saepe tempora, tempore error dignissimos debitis, ab
            autem delectus repudiandae consequatur atque ex placeat. Sunt
            repudiandae harum expedita.
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            fuga illo enim saepe tempora, tempore error dignissimos debitis, ab
            autem delectus repudiandae consequatur atque ex placeat. Sunt
            repudiandae harum expedita.
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            fuga illo enim saepe tempora, tempore error dignissimos debitis, ab
            autem delectus repudiandae consequatur atque ex placeat. Sunt
            repudiandae harum expedita.
          </p>
          <button>Go</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
