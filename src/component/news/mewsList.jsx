import styles from "./news.module.css";
import heardIcon from "../../assets/icons/heard.png";
import nextPage from "../../assets/icons/nextPage.png";

const newsCard = [
	{
		title: "tank",
		url: "../../../src/assets/newsImg/tank.png",
		script: "100 користувачів розблокували озброєння ‘Танк’ сьогодні",
		count: "95",
	},
	{
		title: "trasure",
		url: "../../../src/assets/newsImg/trasure.png",
		script: "10 000 одиниць допомоги було доставлено на фронт вчора",
		count: "75",
	},
	{
		title: "air",
		url: "../../src/assets/newsImg/air.png",
		script: "100 користувачів розблокували озброєння Літак сьогодні",
		count: "45",
	},
];

const NewsList = () => {
	return (
		<div className={styles.newsListContainer}>
			<ul className={styles.ul}>
				{newsCard.map((item) => (
					<li key={item.title} className={styles.cardList}>
						<img src={item.url} alt={item.title} className={styles.img} />
						<p className={styles.cardScript}>{item.script}</p>
						<button className={styles.btmHeard}>
							<img src={heardIcon} alt="heardIcon" width={21} height={18} />
							<p className={styles.count}>{item.count}</p>
						</button>
						<button className={styles.btmNextPage}>
							<img src={nextPage} alt="nextPage" width={21} height={21} />
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NewsList;
