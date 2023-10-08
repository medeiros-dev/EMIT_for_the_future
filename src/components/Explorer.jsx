import styles from "../style";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Explorer = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    <div
      className={`flex-1 flex text-white justify-center items-center flex-row m-3 font-poppins text-[32px]`}
    >
      <a href={`#mission`} className="flex">
        Start the Journey
        <IoIosArrowDropdownCircle size={42} className="ml-3" color="white" />
      </a>
    </div>
  </section>
);

export default Explorer;
