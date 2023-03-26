import Typewriter from "typewriter-effect";
import {
    AiFillGithub,
    AiOutlineMail,
    AiFillLinkedin
    } from 'react-icons/ai'
export default function Home() {
    const links = [
        {
            id : 1,
            icon : <AiFillGithub />
        },
        {
            id: 2,
            icon : <AiOutlineMail /> 
        },
        {
            id : 3,
            icon : <AiFillLinkedin />
        },
    ]
    return (
        <div className="h-[80vh] md:h-[70vh] flex flex-col items-center justify-center font-poppins">
            <h1 className="text-5xl md:text-7xl text-light-fg my-5">Hi , I am <span className="text-light-primary">Vilas Chavhan</span></h1>
            <h1 className="text-3xl md:text-5xl text-light-fg my-5">
                <Typewriter
                    options={{
                        strings: ['A Frontend Developer', 'A Web Developer', 'A Fitness Enthusiast', 'A Hardcore Gamer'],
                        autoStart: true,
                        loop: true,
                        delay: 90,
                    }}
                />
            </h1>
            <p className="text-left text-xl text-light-fg mx-auto">
                A self Taught Frontend Developer Who loves building <span className="text-light-primary">Web Apps</span> and <span className="text-light-primary">Solving Problems</span>.<br />
                During my College journey i have Learnt various <span className="text-light-primary">Tools</span> and <span className="text-light-primary">Technologies</span>.
            </p>
            <ul>
                {links}
            </ul>
        </div>
    );
}