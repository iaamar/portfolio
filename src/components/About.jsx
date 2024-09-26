import React, { useEffect, useRef } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { useBackgroundContext } from "../utils/background.jsx";
import { gsap, ScrollTrigger } from "gsap/all";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, zoomIn } from "../utils/motion";
import { me, github, linkedin, outlook, resume } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[300px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px] "
    >
      {/* <div
  options={{
    max: 45,
    scale: 1,
    speed: 150,
  }}
  className='relative bg-tertiary rounded-[20px] min-h-[280px] overflow-hidden'
  style={{ minWidth: '280px' }}
>
  <img
    src={icon}
    alt={title}
    className='w-full h-full object-cover rounded-[20px]'
  />

  <h3 className='absolute bottom-0 left-0 right-0 bg-opacity-75 bg-gray-800 text-white text-[20px] font-bold py-2 text-center'>
    {title}
  </h3>
</div> */}

      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="relative rounded-[20px] min-h-[280px] overflow-hidden"
        style={{ minWidth: "280px" }}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={icon}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5  inset-1 flex justify-center items-end">
          <h3 className="text-white font-semibold text-[16px]">{title}</h3>
        </div>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  const { setCurrentBG } = useBackgroundContext();
  const aboutRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "+=200 70%",
        end: "+=00 60%",
        scrub: true,
        pinSpacing: false,
        onEnter: () => {
          setCurrentBG("#050816");
          gsap.to(textRef.current, {
            duration: 1,
          });
        },
        onLeaveBack: () => {
          setCurrentBG("#050816");
          gsap.to(textRef.current, {
            duration: 1,
          });
        },
      },
    });
  }, []);

  return (
    <>
      <div ref={aboutRef}>
        <motion.div variants={textVariant()}>
          <div variants={textVariant()}>
            <h2 className={styles.heroSubText}>Hey, I'm Amar!</h2>
          </div>
        </motion.div>

        <div
          variants={fadeIn("", "", 0.1, 1)}
          className="flex items-center min-[1000px]:flex-row flex-col-reverse"
        >
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            {/* Left Column */}
            <div className="flex flex-col items-center min-[1000px]:items-start">
              <p
                className="mt-4 text-white text-[14px] min-[1000px]:max-w-lg w-full leading-[30px]"
                style={{ textAlign: "justify" }}
              >
                I'm a master's student studying Computer Software at
                Northeastern University set to graduate by May 2025.
                <br /> <br />
                I'm passionate about ML, SW Development and leveraging cutting
                edge technologies to develop innovative solutions.
                <br /> <br />
                With 3 years of experience, my diverse portfolio is a testament
                to my unquenchable curiosity and unwavering drive to ignite
                impactful innovation.
                <br /> <br />I love working with people, and I'm always looking
                for new opportunities to grow. If this interests you, check out
                my resume and links below! And feel free to reach out at
                <a href="mailto:nagargoje.a@northeastern.edu">
                  {" "}
                  <u>nagargoje.a@northeastern.edu</u>{" "}
                </a>
              </p>
            </div>
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14"
          >
            {/* Right Column */}
            {/* Photo */}
            <div className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14 flex justify-center items-center">
              <div className="relative w-full hover:green-pink-gradient p-[4px] rounded-[20px] shadow-card">
                <div className="bg-tertiary rounded-[20px] min-h-[200px] flex justify-center items-center overflow-hidden">
                  <img
                    src={me}
                    alt="Amar Nagargoje Profile Picture"
                    className="object-contain h-full"
                  />
                </div>
              </div>
            </div>
          </motion.p>
        </div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="flex mt-6 flex-wrap justify-center sm:justify-start"
        ></motion.p>

        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
