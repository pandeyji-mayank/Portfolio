import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/19186031/pexels-photo-19186031/free-photo-of-people-on-pavement-in-alley-in-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloribus blanditiis laboriosam voluptates id nulla omnis, velit labore ea vero animi asperiores fuga eligendi recusandae, molestiae pariatur consequatur provident accusamus?",
  },
  {
    id: 2,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/19186031/pexels-photo-19186031/free-photo-of-people-on-pavement-in-alley-in-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloribus blanditiis laboriosam voluptates id nulla omnis, velit labore ea vero animi asperiores fuga eligendi recusandae, molestiae pariatur consequatur provident accusamus?",
  },
  {
    id: 3,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/19186031/pexels-photo-19186031/free-photo-of-people-on-pavement-in-alley-in-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloribus blanditiis laboriosam voluptates id nulla omnis, velit labore ea vero animi asperiores fuga eligendi recusandae, molestiae pariatur consequatur provident accusamus?",
  },
  {
    id: 4,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/19186031/pexels-photo-19186031/free-photo-of-people-on-pavement-in-alley-in-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloribus blanditiis laboriosam voluptates id nulla omnis, velit labore ea vero animi asperiores fuga eligendi recusandae, molestiae pariatur consequatur provident accusamus?",
  },
  {
    id: 5,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/19186031/pexels-photo-19186031/free-photo-of-people-on-pavement-in-alley-in-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloribus blanditiis laboriosam voluptates id nulla omnis, velit labore ea vero animi asperiores fuga eligendi recusandae, molestiae pariatur consequatur provident accusamus?",
  },
];
const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="image" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <motion.h2>{item.title}</motion.h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    dumping: 30,
  });

  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Project Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
