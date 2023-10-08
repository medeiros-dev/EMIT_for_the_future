import { content2 } from "../assets";
import styles, { layout } from "../style";

const Goal = () => (
  <section className={layout.section} id="goal">
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Learning and playing with science</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Through the game, the player gets to learn about the possible outcomes
        of mineral dust and atmospheric gasses on earth, and about EMIT’s
        history and it’s future possibilities as well as how EMIT processes the
        data, expanding their knowledge about that new incredible tool of
        research.
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={content2} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Goal;
