import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Mayank's Portfolio
        </motion.span>
        <motion.div
          className="social"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://www.codechef.com/users/hiddeniiitian">
            <img src="/codechef.jpeg" />
          </a>
          <a href="https://github.com/pandeyji-mayank">
            <img src="/github.jpeg" />
          </a>
          <a href="https://www.instagram.com/pandey_ji_mayank/">
            <img src="/instagram.png" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
