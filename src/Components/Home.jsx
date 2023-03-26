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
            name : 'github',
            icon : <AiFillGithub />,
            link : 'https://github.com/villAsh'
        },
        {
            id: 2,
            name : 'mail',
            icon : <AiOutlineMail />,
            link : 'chavhanvilas02@gmail.com'
        },
        {
            id : 3,
            name : 'linkedIn',
            icon : <AiFillLinkedin />,
            link : 'https://www.linkedin.com/in/vilas-chauvhan-4609391aa'
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
            <ul className="flex items-center md:space-x-5 my-5  text-3xl">
                {links.map((item) => <li className="relative group hover:cursor-pointer hover:text-light-primary" key={item.id}>
                        {
                        item.name === 'mail' ? (
                            <a href="mailto:chavhanvilas02@gmail.com" className="transition-all" target="_blank" rel="noreferrer">{item.icon}</a>
                        ) : (<a href={`${item.link}`} className="transition-all" target="_blank" rel="noreferrer">{item.icon}</a>)
                        }
                        {/* <span className="transition-all">{item.icon}</span> */}
                        <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-light-primary transition-all group-hover:w-full"></span>
                    </li>
                    )}
            </ul>
        </div>
    );
}