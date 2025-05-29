import { useProfile } from "../../utils/useProfile";
import styles from "./donateMenu.module.css";
import closeIcon from "../../assets/icons/userPanel/close.png";
import graf from "../../assets/icons/donate/graf.png";
import share from "../../assets/icons/donate/share.png";

const DonateMenu = () => {
	const { setModalView, closeProfile } = useProfile();

	return (
		<div className={styles.inner}>
			<button className={styles.close} onClick={closeProfile}>
				<img src={closeIcon} alt="Закрити" />
			</button>

			<button className={styles.btn} onClick={() => setModalView("profile")}>
				Підвищити донат
				<img src={graf} className={styles.btnIconFirst} alt="донат" />
			</button>
			<button className={styles.btn} onClick={() => setModalView("invite")}>
				Привести друга
				<img src={share} alt="запросити" className={styles.btnIconSecond} />
			</button>
		</div>
	);
};
export default DonateMenu;
