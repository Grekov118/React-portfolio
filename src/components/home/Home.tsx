import "./Home.css";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaCircleArrowRight, FaArrowDownLong } from "react-icons/fa6";
import { mainImg } from "../../images";
import { iconAnimVariants } from "../utils/animation";
// eslint-disable-next-line
import { motion } from "motion/react";


const icons = [
  { id: 1, href: "", icon: FaFacebookF },
  { id: 2, href: "", icon: FaInstagram },
  { id: 3, href: "", icon: FaGithub },
];

function Home() {
  return (
    <section className="home" id="home">
      <div className="container home-wrapper">
        <div className="media-icons">
          {icons.map((item, i) => (
            <motion.a
              href={item.href}
              key={item.id}
              custom={i}
              variants={iconAnimVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              <item.icon/>
            </motion.a>
          ))}
        </div>
        <div className="home-info">
          <h1>Hi, I am Ilay</h1>
          <h3>Front-end Developer</h3>
          <p>
            I create stunning websites for your business, Highly experienced in
            web design and development
          </p>
          <a href="" className="home-info-link inner-info-link">
            Contact me
            <FaCircleArrowRight />
          </a>
        </div>
        <div className="home-img">
          <img src={mainImg} alt="man" />
        </div>
      </div>
      <a href="#about" className="scroll-down">
        Scroll down
        <FaArrowDownLong />
      </a>
    </section>
  );
}

export default Home;
