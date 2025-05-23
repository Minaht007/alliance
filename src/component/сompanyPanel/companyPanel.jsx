import styles from "./companyPanel.module.css";
import box from "../../assets/icons/company/box.svg";
import chest from "../../assets/icons/company/chest.svg";
import delivery from "../../assets/icons/company/delivery.svg";
import people from "../../assets/icons/company/people.svg";
import question from "../../assets/icons/company/question.svg";

const CompanyPanel = ({ onShowStrategy }) => (
	<div className={styles.panel}>
		<h2>Компанія</h2>
		<ul className={styles.stats}>
			<li>
				<div className={styles.itemContainer}>
					<img src={people} /> <p className={styles.itemText}>Члени альянсу</p>
				</div>
				<span>265 000</span>
			</li>
			<li>
				<div className={styles.itemContainer}>
					<img src={chest} /> <p className={styles.itemText}>Ресурси</p>
				</div>
				<span>308 500 грн/день</span>
			</li>
			<li>
				<div className={styles.itemContainer}>
					<img src={delivery} /> <p className={styles.itemText}>Допомога в день</p>
				</div>
				<span>10 158</span>
			</li>
			<li>
				<div className={styles.itemContainer}>
					<img src={box} /> <p className={styles.itemText}>Всього допомоги</p>
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
