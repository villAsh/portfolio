import { motion } from "framer-motion";
import { AiFillRightCircle } from "react-icons/ai";
export default function About() {
  return (
    <div className="font-poppins sm:mt-0 dark:bg-dark-bg flex flex-col">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-xl md:text-3xl text-center text-light-fg dark:text-light-text md:mb-0 uppercase"
      >
        About <span className="text-light-primary">Me</span>
      </motion.h1>
      <div className="h-screen grid grid-cols-1 sm:grid-cols-3 place-content-center ">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          src={
            "https://media.licdn.com/dms/image/D4D03AQE-1XqtztQb8Q/profile-displayphoto-shrink_800_800/0/1685284239763?e=1701907200&v=beta&t=eDmODSn_NfNg7kdTiigkJd1M4tq7vWgSFE9QSc3MF7I"
          }
          alt="avatar"
          className="rounded-full w-80 mx-auto md:w-auto"
        />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="col-span-2"
        >
          <p className="px-10 md:px-0 capitalize text-base text-xl sm:mt-0 mt-10 text-light-fg dark:text-light-text text-justify md:mr-5">
            Hey There, I am Vilas Chauvhan from Ahmadabad, Gujarat. A{" "}
            <span className="text-light-primary">Junior Software Engineer</span>{" "}
            Having strong foundation in computer science and a deep love for
            Video Games and Technologies. As a Tech Enthusiast I love Building{" "}
            <span className="text-light-primary ">WebApps</span> as well as
            <span className="text-light-primary"> exploring</span> new
            Technologies.
          </p>
          <div className="flex flex-col mt-5">
            <h1 className="text-light-fg dark:text-light-text text-lg sm:text-xl px-10">
              My Other Interest Apart from Coding
            </h1>
            <div className="px-10 mt-5 mb-10 space-y-3 text-center sm:text-left">
              <h1 className="text-xl text-light-primary">
                <AiFillRightCircle className="inline text-light-fg dark:text-light-text" />{" "}
                Video Games
              </h1>
              <h1 className="text-xl text-light-primary">
                <AiFillRightCircle className="inline text-light-fg dark:text-light-text" />{" "}
                Cricket
              </h1>
              <h1 className="text-xl text-light-primary">
                <AiFillRightCircle className="inline text-light-fg dark:text-light-text" />{" "}
                Marvel
              </h1>
              <h1 className="text-xl text-light-primary">
                <AiFillRightCircle className="inline text-light-fg dark:text-light-text" />{" "}
                Fitness
              </h1>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
