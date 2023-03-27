import { motion } from "framer-motion";
import movie_app from '../Assets/movie_app.png'
import rtk_shop from '../Assets/rtkShop.png'
import weather_buddy from '../Assets/wb.png'
import poke_card from '../Assets/pokecard.png'
import { FaReact } from 'react-icons/fa'
import { SiRedux, SiTailwindcss } from 'react-icons/si'
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { BsFillBootstrapFill } from "react-icons/bs";

export default function Projects() {
    return (
        <div className="font-poppins mt-10">
            <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                className="text-xl md:text-3xl text-center text-light-fg mb-10 uppercase">
                My <span className="text-light-primary">Projects</span>
            </motion.h1>
            <div className="p-10 space-y-3">
                <motion.div
                    initial={{x : -300}}
                    animate={{x : 0}}
                    transition={{duration : 1}}
                className="border-4 border-light-primary rounded-lg grid grid-cols-1 sm:grid-cols-3 items-center justify-around p-10">
                    <div>
                        <img src={movie_app} alt="projectg 1" className="w-[30vw]" />
                    </div>
                    <div className="flex flex-col p-5 space-y-5 col-span-2">
                        <h1 className="text-xl sm:text-4xl text-light-primary">Movie App</h1>
                        <p className="text-lg sm:text-2xl text-justify">Clone of Netflix.Built using React and Redux-Toolkit with Tailwind CSS</p>
                        <div className="text-4xl flex justify-around">
                            <FaReact fill="#80DEEA" />
                            <SiRedux color="#7E57C2" />
                            <SiTailwindcss fill="#00ACC1" />
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-start space-x-5 mt-5">
                            <button className="border border-light-primary px-8 py-1 rounded-lg bg-light-primary
                                hover:bg-light-bg hover:text-light-primary hover:border-light-fg mb-5 sm:mb-0
                            ">
                                <a href="https://movie-app-villash.vercel.app/" >Live Demo</a>
                            </button>
                            <button className="border border-light-primary px-8 py-1 rounded-lg bg-light-primary
                                hover:bg-light-bg hover:text-light-primary hover:border-light-fg
                            ">
                                <a href="https://github.com/villAsh/Movie_app">Source Code</a>
                            </button>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{x : -400}}
                    animate={{x : 0}}
                    transition={{duration : 1.3}} className="border-4 border-light-primary rounded-lg grid grid-cols-1 sm:grid-cols-3 items-center justify-around p-10">
                    <div>
                        <img src={rtk_shop} alt="projectg 1" className="w-[30vw]" />
                    </div>
                    <div className="flex flex-col p-5 space-y-5 col-span-2">
                        <h1 className="text-xl sm:text-4xl text-light-primary">RTK Shop</h1>
                        <p className="text-lg sm:text-2xl text-justify">RTK shop is an cart shopping app.Built using React and Redux-Toolkit with Tailwind CSS.
                            User can add,remove,delete items from cart and place order too.
                        </p>
                        <div className="text-4xl flex justify-around">
                            <FaReact fill="#80DEEA" />
                            <SiRedux color="#7E57C2" />
                            <SiTailwindcss fill="#00ACC1" />
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-start space-x-5 mt-5">
                            <button className="border border-light-primary px-8 py-1 rounded-lg bg-light-primary
                                hover:bg-light-bg hover:text-light-primary hover:border-light-fg mb-5 sm:mb-0
                            ">
                                <a href="https://vilas-rtk-shop.netlify.app/" >Live Demo</a>
                            </button>
                            <button className="border border-light-primary px-8 py-1 rounded-lg bg-light-primary
                                hover:bg-light-bg hover:text-light-primary hover:border-light-fg
                            ">
                                <a href="https://github.com/villAsh/RTK-shop">Source Code</a>
                            </button>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{x : -500}}
                    animate={{x : 0}}
                    transition={{duration : 1.6}} className="border-4 border-light-primary rounded-lg grid grid-cols-1 sm:grid-cols-3 items-center justify-around p-10">
                    <div>
                        <img src={weather_buddy} alt="projectg 1" className="w-[30vw]" />
                    </div>
                    <div className="flex flex-col p-5 space-y-5 col-span-2">
                        <h1 className="text-xl sm:text-4xl text-light-primary">Weather Buddy</h1>
                        <p className="text-lg sm:text-2xl text-justify">
                            Weather buddy is a weather App which gives weather information to users.
                        </p>
                        <div className="text-4xl flex justify-around">
                            <FaReact fill="#80DEEA" />
                            <SiTailwindcss fill="#00ACC1" />
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-start space-x-5 mt-5">
                            <button className="border border-light-primary px-8 py-1 rounded-lg bg-light-primary
                                hover:bg-light-bg hover:text-light-primary hover:border-light-fg mb-5 sm:mb-0
                            ">
                                <a href="https://vilas-weatherbuddy.netlify.app/" >Live Demo</a>
                            </button>
                            <button className="border border-light-primary px-8 py-1 rounded-lg bg-light-primary
                                hover:bg-light-bg hover:text-light-primary hover:border-light-fg
                            ">
                                <a href="https://github.com/villAsh/Weather-Buddy">Source Code</a>
                            </button>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{x : -600}}
                    animate={{x : 0}}
                    transition={{duration : 1.9}} className="border-4 border-light-primary rounded-lg grid grid-cols-1 sm:grid-cols-3 items-center justify-around p-10">
                    <div>
                        <img src={poke_card} alt="projectg 1" className="w-[30vw]" />
                    </div>
                    <div className="flex flex-col p-5 space-y-5 col-span-2">
                        <h1 className="text-xl sm:text-4xl text-light-primary">Poke Card</h1>
                        <p className="text-lg sm:text-2xl text-justify">
                            Poke Card is venilla javascript app in which use can search for specific pokemon and will get information about that pokemon.
                        </p>
                        <div className="text-4xl flex justify-around">
                            <AiFillHtml5 fill="#FF6D00" />
                            <IoLogoCss3 fill="#0277BD" />
                            <IoLogoJavascript fill="#FFD600" />
                            <BsFillBootstrapFill fill="#673AB7" />
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-start space-x-5 mt-5">
                            <button className="border border-light-primary px-8 py-1 rounded-lg bg-light-primary
                                hover:bg-light-bg hover:text-light-primary hover:border-light-fg mb-5 sm:mb-0
                            ">
                                <a href="https://villash.github.io/Poke_card/" >Live Demo</a>
                            </button>
                            <button className="border border-light-primary px-8 py-1 rounded-lg bg-light-primary
                                hover:bg-light-bg hover:text-light-primary hover:border-light-fg
                            ">
                                <a href="https://github.com/villAsh/Poke_card">Source Code</a>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}