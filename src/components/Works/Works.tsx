import worksShape from "../../assets/worksShape.svg";
import { works } from "../../constants";

const Works: React.FC = () => {
  return (
    <section className="py-[10rem] bg-[#1F1F1F] px-[5%] text-white">
      <div className="flex flex-col">
        <div className="flex flex-row items-baseline">
          <img
            src={worksShape}
            alt="works shape"
            className="w-[172px] h-[172px]"
          />
          <h1 className="text-[200px] font-bebas leading-none ml-8">WORKS</h1>
        </div>
        <div className="flex flex-row justify-between mt-5">
          {works.map((work, idx) => (
            <div
              key={idx}
              className="w-1/2 flex flex-col p-2 items-center"
              style={{ marginTop: `${idx * 20}rem` }}
            >
              <img
                src={work.image}
                alt={`${work.title} image`}
                className="w-full rounded-[20px]"
              />

              <div className="flex flex-wrap w-full gap-2 justify-center w-full mt-3">
                {work.stack.map((stack, stackIdx) => (
                  <div
                    key={stackIdx}
                    className="border border-white rounded-[50px] h-[44px] flex items-center justify-center px-4 hover:bg-white hover:text-[#1F1F1F] transition duration-500"
                  >
                    {stack}
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[32px] font-plex text-center">
                {work.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
