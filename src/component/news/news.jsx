import bgImage from "../../assets/background/bg2.png";
import styles from "./news.module.css";
import NewsList from "./mewsList"

const News = () => {
	return <div className={styles.wrapper} style={{ backgroundImage: `url(${bgImage})` }}>
		<NewsList />
	</div>;
};

export default News;
