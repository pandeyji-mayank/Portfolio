import { motion } from "framer-motion";
import { useState } from "react";
const Test = () => {
  const [open, setOpen] = useState(false);
  // 30:00 idhar se chal nahi raha

  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 100,
      transition: { delay: i * 0.3 },
    }),
    hidden: { opacity: 0 },
  };
  0.2;

  const items = ["items1", "items2", "items3", "items4"];

  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item, i) => (
          <motion.li variants={variants} key={item} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
