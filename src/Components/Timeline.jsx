import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { IoSchool } from 'react-icons/io5'
import { HiCodeBracket } from 'react-icons/hi2'
import { FaReact } from 'react-icons/fa'
import { AiFillPlayCircle } from 'react-icons/ai'
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
                    date="2020-2023"
                    icon={<IoSchool className="text-5xl dark:text-dark-bg" />}
                >
                    <h1 className="vertical-timeline-element-title">Bachelor of Computer Application</h1>
                    <p className="vertical-timeline-element-subtitle text-light-fg">
                        Lokmanya College of Computer Application, Ahmedabad
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
                    <h1 className="vertical-timeline-element-title">Learnt ReactJS</h1>
                    <p className="vertical-timeline-element-subtitle text-light-fg">
                        Learnt About ReactJS From various sources and started going deep into the concepts
                        and created some cool side projects also.
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
                    <h1 className="vertical-timeline-element-title">Learnt Web Developement</h1>
                    <p className="vertical-timeline-element-subtitle text-light-fg">
                        During this time i learnt about HTML CSS JS BOOTSTRAP C CPP OOPS and other Core CS subjects.
                        Apart from this created some small projects to enhanche my learning.
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
                        Attended First 2 weeks long Bootcamp on HTML and CSS Organized by Ganpat University.
                        First time i wrote and html code(one of the best feelings i ever have)
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
                        Bhavna Vidhyalaya ,Saijput Tower ,Ahmedabad
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