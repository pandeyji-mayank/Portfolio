import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "TV Flix",
    img: "/tvflix.png",
    desc: "This project seamlessly combines frontend technologies (HTML, CSS, JavaScript) with backend functionality via the TMDB API. Users can explore a diverse range of movies, sorted by genres and language preferences. The search bar allows for quick access to specific films, while the recommendation system enhances the user experience by suggesting movies tailored to individual tastes. The incorporation of TMDB API keys ensures up-to-date and extensive movie information, offering a user-friendly and engaging platform for movie enthusiasts.",
    link: "https://pandeyji-mayank.github.io/Tvflix---movie/",
  },
  {
    id: 2,
    title: "Dear Diary",
    img: "/deardiary.png",
    desc: "Dear Diary is a Flask-based web application with a Jinja-powered, CSS-styled interface and SQL as the database, offering users a secure space to share their thoughts with the world. Featuring robust user authentication, the platform facilitates CRUD operations, enabling the creation, reading, updating, and deletion of diary entries. The intuitive diary interface encourages personalized expression, while a global sharing option allows users to make their entries public. With a responsive design, privacy settings, and a search functionality, Dear Diary aims to be a versatile and engaging platform for users to connect and share their stories across the globe.",
    link: "https://diary-xxa7.onrender.com/",
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
            <a href={item.link}>See Demo</a>
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
