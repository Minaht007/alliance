import { useProfile } from "../../utils/useProfile";
import styles from "./donateMenu.module.css";
import closeIcon from "../../assets/icons/userPanel/close.png";
import graf from "../../assets/icons/donate/graf.png";
import share from "../../assets/icons/donate/share.png";

const DonateMenu = () => {
	const { setModalView } = useProfile();

	return (
		<div className={styles.inner}>
			<button className={styles.close} onClick={() => setModalView("profile")}>
				<img src={closeIcon} alt="Закрити" />
			</button>

			<button className={styles.btn}>
				Підвищити донат
				<img src={graf} alt="донат" />
			</button>
			<button className={styles.btn} onClick={() => setModalView("invite")}>
				Привести друга
				<img src={share} alt="запросити" />
			</button>
		</div>
	);
};
export default DonateMenu;
