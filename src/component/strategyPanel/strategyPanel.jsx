import styles from "./StrategyPanel.module.css";
import energy from "../../assets/icons/company/energy.svg";
import chest from "../../assets/icons/company/chest.svg";
import delivery from "../../assets/icons/company/delivery.svg";
import people from "../../assets/icons/company/people.svg";
import close from "../../assets/icons/strategy/close.png";

const StrategyPanel = ({ onBack }) => (
	<div className={styles.panel}>
		<div className={styles.header}>
			<h2 className={styles.title}>Стратегія альянсу</h2>
			<button onClick={onBack} className={styles.close}>
				<img src={close} />
			</button>
		</div>
		<ul className={styles.stats}>
			<li>
				<div className={styles.itemContainer}>
					<img src={people} /> <p className={styles.itemText}>Досягти кількості</p>
				</div>
				<span>20 000 000</span>
			</li>
			<li>
				<div className={styles.itemContainer}>
					<img src={chest} /> <p className={styles.itemText}>Збирати ресурсів</p>
				</div>
				<span>2 000 000 000 грн/день</span>
			</li>
			<li>
				<div className={styles.itemContainer}>
					<img src={energy} /> <p className={styles.itemText}>Досягнути потужності</p>
				</div>
				<span>100%</span>
			</li>
			<li>
				<div className={styles.itemContainer}>
					<img src={delivery} /> <p className={styles.itemText}>Поставляти одиниць допомоги</p>
				</div>
				<span>40 000/день</span>
			</li>
		</ul>
	</div>
);

export default StrategyPanel;
