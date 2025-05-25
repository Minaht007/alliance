import React, { useState } from "react";
import styles from "./subscription.module.css";
import isActive from "../../assets/icons/subscrip/checked.png";

const propose = [
	{
		title: "1 гривня в день",
		url: "../../../src/assets/icons/subscrip/oneCoin.png",
	},
	{
		title: "10 гривень в день",
		url: "../../../src/assets/icons/subscrip/tenCoins.png",
	},
	{
		title: "100 гривень в день",
		url: "../../../src/assets/icons/subscrip/hundCoint.png",
	},
	{
		title: "Cвій варіант",
		url: "../../../src/assets/icons/subscrip/customCoins.png",
	},
];

const Subscription = () => {
	const [selectedIndex, setSelectedIndex] = useState(null);

	const handleSelect = (index) => {
		setSelectedIndex(index);
	};

	return (
		<div className={styles.divContainer}>
			<ul className={styles.ulContainer}>
				<h1 className={styles.title}>Варіант підписки</h1>
				{propose.map((item, index) => (
					<li
						key={item.title}
						className={styles.li}
						onClick={() => handleSelect(index)}
						style={{ cursor: "pointer" }}
					>
						<img src={item.url} alt="coins" className={styles.img} />{" "}
						<span className={styles.span}>{item.title}</span>{" "}
						<div className={styles.checked}>
							{selectedIndex === index && (
								<img src={isActive} alt="isActive" width={26} height={26} />
							)}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Subscription;
