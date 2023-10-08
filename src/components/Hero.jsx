import styles from "../style";
import { mission } from "../assets";

const Hero = () => {
  return (
    <section
      id="hero"
      className={`flex md:flex-row h-[650px] flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/*
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>*/}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Become a
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Space Hero</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          at Mission EMIT.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}></p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative my-5 md:hero-image`}
      >
        <img src={mission} alt="billing" className="w-[100%] z-[5]" />
      </div>
    </section>
  );
};

export default Hero;
