import bgImage from "../../assets/background/bg3.png";
import styles from "./weapons.module.css";

const Weapons = () => {
	return <div className={styles.wrapper} style={{ backgroundImage: `url(${bgImage})` }}></div>;
};

export default Weapons;
