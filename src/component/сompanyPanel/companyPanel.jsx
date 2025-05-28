import styles from "./companyPanel.module.css";
import box from "../../assets/icons/company/box.svg";
import chest from "../../assets/icons/company/chest.svg";
import delivery from "../../assets/icons/company/delivery.svg";
import people from "../../assets/icons/company/people.svg";
import question from "../../assets/icons/company/question.svg";

const CompanyPanel = ({ onShowStrategy }) => (
	<div className={styles.panel}>
		<h2 className={styles.title}>Компанія</h2>
		<ul className={styles.stats}>
			<li>
				<div className={styles.itemContainer}>
					<img src={people} /> <p className={styles.itemText}>Члени альянсу</p>
				</div>
				<span>265 000</span>
			</li>
			<li>
				<div className={styles.itemContainer}>
					<img src={chest} /> <p className={styles.itemText}>Ресурси альянсу</p>
				</div>
				<span>308 500 грн/день</span>
			</li>
			<li>
				<div className={styles.itemContainer}>
					<img src={delivery} className={styles.delivery} />
					<p className={styles.itemText}>Поставлено одиниць допомоги в день</p>
				</div>
				<span>10 158</span>
			</li>
			<li>
				<div className={styles.itemContainer}>
					<img src={box} /> <p className={styles.itemText}>Всього поставлено допомоги </p>
				</div>
				<span>100 245</span>
			</li>
		</ul>
		<button className={styles.button} onClick={onShowStrategy}>
			<img src={question} /> <p className={styles.buttonText}>Стратегія альянсу</p>
		</button>
	</div>
);

export default CompanyPanel;
