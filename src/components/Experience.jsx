import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
function dateToYearsAndMonths(dateString) {
  const givenDate = new Date(dateString);
  const currentDate = new Date();

  let years = currentDate.getFullYear() - givenDate.getFullYear();
  let months = currentDate.getMonth() - givenDate.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months };
}

const ExperienceCard = ({ experience }) => {
  const { years, months } = dateToYearsAndMonths(experience.date);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "4px  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-light">
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-light"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const isDesktop = window.innerWidth >= 600;
  if (isDesktop) {
    // ON DESKTOP (With Timeline Transition)
    return (
      <>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Work Experience
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </>
    );
  } else {
    // ON MOBILE (No Timeline Transition)
    return (
      <>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Work Experience
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </div>
      </>
    );
  }
};

export default SectionWrapper(Experience, "work");
