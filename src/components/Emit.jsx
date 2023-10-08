import { bill } from "../assets";
import styles, { layout } from "../style";

const Emit = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Unlocking the Wonders of EMIT Satellite Data
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Explore the seamless integration of EMIT satellite data within the
        game's dynamic phases, showcasing the endless possibilities it offers to
        enhance your gaming adventure.
      </p>
    </div>
  </section>
);

export default Emit;
