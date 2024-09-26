import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { programs } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, zoomIn } from "../utils/motion";

const ProgramCard = ({ index, company, title, description, date, icon }) => (
  <div className="xs:w-[498px] w-full">
    <motion.div
      variants={fadeIn(
        index % 2 === 0 ? "right" : "left",
        "spring",
        (Math.floor(index / 2) + 1) * 0.5,
        0.55
      )}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-10 min-h-[250px] flex justify-evenly flex-col">
        <div className=" flex justify-between items-center">
          <div className="flex-1 flex flex-col">
            <h3 className="text-white font-bold text-[24px]">{title}</h3>
            <p className={styles.sectionSubText}>{company}</p>
            <p className="sm:text-[16px] text-[14px] text-secondary">
              <i>{date}</i>
            </p>
          </div>

          <img src={icon} alt={`${company} logo`} className="w-10 h-10" />
        </div>

        <div className="mt-1">
          {description && description.startsWith("http") ? (
            <a
              href={description}
              target="_blank"
              className="text-white tracking-wider text-[14px]"
            >
              {description}
            </a>
          ) : (
            <span className="text-white tracking-wider text-[14px]">
              {description}
            </span>
          )}{" "}
        </div>
      </div>
    </motion.div>
  </div>
);

const Programs = () => {
  return (
    <div className={`mt-12 rounded-[20px]`}>
      <div className={`rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Leadership & Achievements</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {programs.map((program, index) => (
          <ProgramCard key={program.name} index={index} {...program} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Programs, "programs");
