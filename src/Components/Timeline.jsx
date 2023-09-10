import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { IoSchool } from 'react-icons/io5'
import { HiCodeBracket } from 'react-icons/hi2'
import { FaReact } from 'react-icons/fa'
import { AiFillPlayCircle } from 'react-icons/ai'
import { BsFillBriefcaseFill } from "react-icons/bs";

export default function Timeline() {
    return (
        <div className="font-poppins flex flex-col items-center sm:pt-20 dark:bg-dark-bg">
            <motion.h1
                initial={{ scale : 0 }}
                animate={{ scale : 1 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-3xl text-center text-light-fg dark:text-light-text mb-10 uppercase">My <span className="text-light-primary">Timeline</span></motion.h1>
            <VerticalTimeline lineColor="#555" animate={false} >
            <VerticalTimelineElement
                    
                    className="text-light-primary vertical-timeline-element--work"
                    contentStyle={{ background: '#fcfcfc', color: '#2978b5', boxShadow: '2px 5px 9px rgba(0,0,0,0.8)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)', color: 'black' }}
                    iconStyle={{ background: '#fff', color: '#2978b5', boxShadow: '2px 5px 9px rgba(0,0,0,0.8)' }}
                    date="12/06/2023 - 12/09/2023"
                    icon={<BsFillBriefcaseFill className="text-5xl dark:text-dark-bg" />}
                >
                    <h1 className="vertical-timeline-element-title">Software Engineering Intern</h1>
                    <p className="vertical-timeline-element-subtitle text-light-fg">
                        Joined <a href="https://www.seaflux.tech/" className="decoration-none text-light-primary">Seaflux Technologies</a> as Software Engineering Intern.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    
                    className="text-light-primary vertical-timeline-element--work"
                    contentStyle={{ background: '#fcfcfc', color: '#2978b5', boxShadow: '2px 5px 9px rgba(0,0,0,0.8)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)', color: 'black' }}
                    iconStyle={{ background: '#fff', color: '#2978b5', boxShadow: '2px 5px 9px rgba(0,0,0,0.8)' }}
                    date="2020-2023"
                    icon={<IoSchool className="text-5xl dark:text-dark-bg" />}
                >
                    <h1 className="vertical-timeline-element-title">Bachelor of Computer Application</h1>
                    <p className="vertical-timeline-element-subtitle text-light-fg">
                        <span className="text-light-primary">Graduated </span> from Lokmanya College of Computer Application, Ahmedabad
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="text-light-primary vertical-timeline-element--work"
                    contentStyle={{ background: '#fcfcfc', color: '#2978b5', boxShadow: '2px 5px 9px rgba(0,0,0,0.8)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)', color: 'black' }}
                    iconStyle={{ background: '#fff', color: '#2978b5', boxShadow: '2px 5px 9px rgba(0,0,0,0.8)' }}
                    date="2022-2023"
                    icon={<FaReact className="text-5xl  dark:text-dark-bg" />}
                >
                    <h1 className="vertical-timeline-element-title">Learned ReactJS</h1>
                    <p className="vertical-timeline-element-subtitle text-light-fg">
                        Learned About <span className="text-light-primary">ReactJS</span> From various sources and started going <span className="text-light-primary">deep</span> into the concepts
                        and created some cool <span className="text-light-primary">side projects</span> too.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="text-light-primary vertical-timeline-element--work"
                    contentStyle={{ background: '#fcfcfc', color: '#2978b5', boxShadow: '2px 5px 9px rgba(0,0,0,0.8)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)', color: 'black' }}
                    iconStyle={{ background: '#fff', color: '#2978b5', boxShadow: '2px 5px 9px rgba(0,0,0,0.8)' }}
                    date="july/2020 - 2022"
                    icon={<HiCodeBracket className="text-5xl  dark:text-dark-bg" />}
                >
                    <h1 className="vertical-timeline-element-title">Learned Web Developement</h1>
                    <p className="vertical-timeline-element-subtitle text-light-fg">
                        During this time I <span className="text-light-primary">learned </span> about HTML CSS JS BOOTSTRAP C CPP OOPS and other Core CS subjects.
                        Apart from this created some small projects to <span className="text-light-primary">Enhance </span> my learning.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="text-light-primary vertical-timeline-element--work"
                    contentStyle={{ background: '#fcfcfc', color: '#2978b5', boxShadow: '2px 5px 9px rgba(0,0,0,0.8)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)', color: 'black' }}
                    iconStyle={{ background: '#fff', color: '#2978b5', boxShadow: '2px 5px 9px rgba(0,0,0,0.8)' }}
                    date="April/2020"
                    icon={<HiCodeBracket className="text-5xl  dark:text-dark-bg" />}
                >
                    <h1 className="vertical-timeline-element-title text">First Bootcamp</h1>
                    <p className="vertical-timeline-element-subtitle text-light-fg">
                        Attended My First 2 weeks long Bootcamp on<span className="text-light-primary">HTML and CSS </span> Organized by Ganpat University.
                        First time I wrote and HTML code (That Feeling writing your first code &#128526;)
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement

                    className="text-light-primary vertical-timeline-element--work"
                    contentStyle={{ background: '#fcfcfc', color: '#2978b5', boxShadow: '2px 5px 9px rgba(0,0,0,0.8)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)', color: 'black' }}
                    iconStyle={{ background: '#fff', color: '#2978b5', boxShadow: '2px 5px 9px rgba(0,0,0,0.8)' }}
                    date="2018-2020"
                    icon={<IoSchool className="text-5xl  dark:text-dark-bg" />}
                >
                    <h1 className="vertical-timeline-element-title">Completed Higher Secondary - Commerce</h1>
                    <p className="vertical-timeline-element-subtitle text-light-fg">
                        Bhavna Vidhyalaya, Saijput Tower, Ahmedabad
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement

                    className="text-light-primary vertical-timeline-element--work"
                    iconStyle={{ background: '#fff', color: '#2978b5', boxShadow: '2px 5px 9px rgba(0,0,0,0.8)' }}
                    icon={<AiFillPlayCircle className="text-5xl  dark:text-dark-bg" />}
                >
                </VerticalTimelineElement>




            </VerticalTimeline>
        </div>
    );
}