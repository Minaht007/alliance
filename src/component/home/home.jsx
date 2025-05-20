import bgImage from "../../assets/background/bg1.png";
import styles from "./home.module.css";

const Home = () => {
	return <div className={styles.wrapper} style={{ backgroundImage: `url(${bgImage})` }}></div>;
};

export default Home;
