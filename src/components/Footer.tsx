import footerShape from "../assets/footerShape.svg";
import arrow from "../assets/arrow.svg";
const Footer: React.FC = () => {
  return (
    <section className="relative h-screen bg-hero-bg bg-cover px-[5%] bg-center font-lancelot text-white flex py-10 overflow-y-hidden">
      <div className="flex flex-col w-full">
        <img
          src={footerShape}
          alt="footer shape"
          className="w-[172px] h-[172px] mt-4"
        />
        <h1 className="mt-16 font-bebas text-[250px] leading-[200px]">
          LET’S
          <br />
          <span className="text-[#EEAB3C]">CONNECT</span>
        </h1>
        <div className="flex flex-row w-full justify-end">
          <img src={arrow} alt="arrow" className="w-[98px] h-[25px]" />
          <p className="text-[48px] leading-none font-bebas">
            astarunov444@gmail.com
          </p>
        </div>
        <div className="absolute bottom-0 flex flex-col w-[90%]">
          <div className="w-full h-[1px] bg-white mt-3"></div>
          <ul className="flex flex-row gap-[10vw] mx-auto my-5">
            <li className="text-[16px] font-plex">
              <a href="https://www.linkedin.com/in/astarunov/">linkedin</a>
            </li>
            <li className="text-[16px] font-plex">
              <a href="https://github.com/astarunov">github</a>
            </li>
            <li className="text-[16px] font-plex">
              <a href="https://t.me/astarunovv">telegram</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
