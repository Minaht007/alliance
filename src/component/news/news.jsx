import bgImage from "../../assets/background/bg2.png";
import styles from "./news.module.css";

const News = () => {
	return <div className={styles.wrapper} style={{ backgroundImage: `url(${bgImage})` }}></div>;
};

export default News;
