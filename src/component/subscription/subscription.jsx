import React, { useState } from "react";
import styles from "./subscription.module.css";
import isActive from "../../assets/icons/subscrip/checked.png";
import { useProfile } from "../../utils/useProfile";

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
	const { closeProfile } = useProfile();

	return (
		<div className={styles.divContainer} onClick={closeProfile}>
			<ul className={styles.ulContainer} onClick={(e) => e.stopPropagation()}>
				<h1 className={styles.title}>Варіант підписки</h1>
				{propose.map((item, index) => (
					<li
						key={item.title}
						className={selectedIndex === index ? `${styles.liActive} ${styles.li}` : styles.li}
						onClick={() => setSelectedIndex(index)}
						style={{ cursor: "pointer" }}
					>
						<img src={item.url} alt="coins" className={styles[`img${index}`]} />
						<span className={styles.span}>{item.title}</span>
						<div className={styles.checked}>
							{selectedIndex === index && (
								<img src={isActive} alt="isActive" width={25} height={25} />
							)}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Subscription;
