import worksShape from "../../assets/worksShape.svg";
import { works } from "../../constants";
import { motion } from "framer-motion";
import Star from "../Star";

const fadeInAnimationVariants = (id: number) => ({
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: id * 0.05,
    },
  },
});

const Works: React.FC = () => {
  return (
    <section className="py-[5rem] bg-[#1F1F1F] px-[5%] text-white" id="works">
      <div className="relative flex flex-col">
        {/* Background SVG */}
        <div className="hidden md:block absolute top-[30%] left-[55%] w-full h-full pointer-events-none z-0">
          <svg
            width="287"
            height="310"
            viewBox="0 0 387 410"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2.50049C341.89 -4.07579 384.5 97 384.5 407.5"
              stroke="#FFFEFE"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="384.172"
              y1="408"
              x2="324"
              y2="347.828"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Star Component */}
        <div className="hidden md:block absolute bottom-[20vh] left-[10vw] z-10 pointer-events-none">
          <Star width="300px" height="300px" color="#EEAB3C" />
        </div>

        {/* Header */}
        <div className="flex flex-row items-baseline z-20">
          <img
            src={worksShape}
            alt="works shape"
            className="w-[100px] h-[100px] md:w-[172px] md:h-[172px]"
          />
          <h1 className="text-[100px] md:text-[200px] font-bebas leading-none ml-4 md:ml-8">
            WORKS
          </h1>
        </div>

        {/* Works Content */}
        <div className="flex flex-col justify-between mt-5 w-full z-20">
          {works.map((work, idx) => (
            <div
              key={idx}
              className={`w-full md:w-1/2 flex flex-col p-6 ${
                idx % 2 === 0 ? "self-start" : "self-end"
              }`}
            >
              {idx % 2 === 0 ? (
                <a href={work.link}>
                  <img
                    src={work.image}
                    alt={`${work.title} image`}
                    className="w-full rounded-[20px] hover:scale-105 transition duration-300"
                  />
                  <p className="mt-3 text-[32px] font-plex text-center">
                    {work.title}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center w-full mt-3">
                    {work.stack.map((stack, stackIdx) => (
                      <motion.div
                        variants={fadeInAnimationVariants(stackIdx)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        key={stackIdx}
                      >
                        <div className="border border-white rounded-[50px] h-[44px] flex items-center justify-center px-4 hover:bg-white hover:text-[#1F1F1F] transition duration-500">
                          {stack}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </a>
              ) : (
                <div className="cursor-default">
                  {" "}
                  <img
                    src={work.image}
                    alt={`${work.title} image`}
                    className="w-full rounded-[20px] hover:scale-105 transition duration-300"
                  />
                  <p className="mt-3 text-[32px] font-plex text-center">
                    {work.title}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center w-full mt-3">
                    {work.stack.map((stack, stackIdx) => (
                      <motion.div
                        variants={fadeInAnimationVariants(stackIdx)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        key={stackIdx}
                      >
                        <div className="border border-white rounded-[50px] h-[44px] flex items-center justify-center px-4 hover:bg-white hover:text-[#1F1F1F] transition duration-500">
                          {stack}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
