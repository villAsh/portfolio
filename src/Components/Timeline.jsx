import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { GiPointyHat } from "react-icons/gi";
import { FaHandPointRight, FaDotCircle } from "react-icons/fa";
export default function Timeline() {
  return (
    <div className="font-poppins flex flex-col items-center sm:pt-20 dark:bg-dark-bg capitalize">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-3xl text-center text-light-fg dark:text-light-text mb-10 uppercase"
      >
        My <span className="text-light-primary">Timeline</span>
      </motion.h1>
      <VerticalTimeline lineColor="#555" animate={false}>
        <VerticalTimelineElement
          className="text-light-primary vertical-timeline-element--work"
          contentStyle={{
            background: "#fcfcfc",
            color: "#2978b5",
            boxShadow: "2px 5px 9px rgba(0,0,0,0.8)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(33, 150, 243)",
            color: "black",
          }}
          iconStyle={{
            background: "#fff",
            color: "#2978b5",
            boxShadow: "2px 5px 9px rgba(0,0,0,0.8)",
          }}
          date="September-2023 - Present"
          icon={<BsFillBriefcaseFill className="text-5xl dark:text-dark-bg" />}
        >
          <h1 className="vertical-timeline-element-title">
            <FaHandPointRight className="inline mr-2" />
            Junior Software Engineering
          </h1>
          <p className="vertical-timeline-element-subtitle text-light-fg">
            <FaDotCircle className="inline mr-1" />
            <a
              href="https://www.seaflux.tech/"
              className="decoration-none text-light-primary"
            >
              Seaflux Technologies
            </a>
            , Ahmedabad.
            <br />
            <ul>
              <li>
                <FaDotCircle className="inline mr-1" /> Android/iOS App
                Development Using React Native.
              </li>
              <li>
                <FaDotCircle className="inline mr-1" />
                Improved and Optimized User Interfaces.
              </li>
              <li>
                <FaDotCircle className="inline mr-1" /> Proficient in using
                Linux / Mac OS and tools like GIT , GitLab , GitHub.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="text-light-primary vertical-timeline-element--work"
          contentStyle={{
            background: "#fcfcfc",
            color: "#2978b5",
            boxShadow: "2px 5px 9px rgba(0,0,0,0.8)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(33, 150, 243)",
            color: "black",
          }}
          iconStyle={{
            background: "#fff",
            color: "#2978b5",
            boxShadow: "2px 5px 9px rgba(0,0,0,0.8)",
          }}
          date="June-2023 - September-2023"
          icon={<BsFillBriefcaseFill className="text-5xl dark:text-dark-bg" />}
        >
          <h1 className="vertical-timeline-element-title">
            <FaHandPointRight className="inline mr-2" /> Software Engineering
            Intern
          </h1>
          <p className="vertical-timeline-element-subtitle text-light-fg">
            <FaDotCircle className="inline mr-1" />
            <a
              href="https://www.seaflux.tech/"
              className="decoration-none text-light-primary"
            >
              Seaflux Technologies
            </a>
            , Ahmedabad.
            <br />
            <ul>
              <li>
                <FaDotCircle className="inline mr-1" /> Learned software
                development process
              </li>
              <li>
                <FaDotCircle className="inline mr-1" /> Learned Advanced
                Javascript, React , NextJS.
              </li>
              <li>
                <FaDotCircle className="inline mr-1" /> Learned Git and Gitlab
                Workflow.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="text-light-primary vertical-timeline-element--work"
          contentStyle={{
            background: "#fcfcfc",
            color: "#2978b5",
            boxShadow: "2px 5px 9px rgba(0,0,0,0.8)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(33, 150, 243)",
            color: "black",
          }}
          iconStyle={{
            background: "#fff",
            color: "#2978b5",
            boxShadow: "2px 5px 9px rgba(0,0,0,0.8)",
          }}
          date="2020-2023"
          icon={<IoSchool className="text-5xl dark:text-dark-bg" />}
        >
          <h1 className="vertical-timeline-element-title">
            <FaHandPointRight className="inline mr-2" /> Bachelor of Computer
            Application
          </h1>
          <p className="vertical-timeline-element-subtitle text-light-fg">
            <FaDotCircle className="inline mr-1" />
            Lokmanya College of Computer Application, Ahmedabad.
            <br />
            <FaDotCircle className="inline mr-1" /> 8.54 (CGPA)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="text-light-primary vertical-timeline-element--work"
          contentStyle={{
            background: "#fcfcfc",
            color: "#2978b5",
            boxShadow: "2px 5px 9px rgba(0,0,0,0.8)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(33, 150, 243)",
            color: "black",
          }}
          iconStyle={{
            background: "#fff",
            color: "#2978b5",
            boxShadow: "2px 5px 9px rgba(0,0,0,0.8)",
          }}
          date="2018-2020"
          icon={<GiPointyHat className="text-5xl  dark:text-dark-bg" />}
        >
          <h1 className="vertical-timeline-element-title">
            <FaHandPointRight className="inline mr-2" />
            Higher Secondary - Commerce
          </h1>
          <p className="vertical-timeline-element-subtitle text-light-fg">
            <FaDotCircle className="inline mr-1" />
            Bhavna vidhyalay, Ahmedabad.
            <br />
            <FaDotCircle className="inline mr-1" /> 72.00 % (percentage)
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
