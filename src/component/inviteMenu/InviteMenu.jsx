import { useProfile } from "../../utils/useProfile";
import styles from "./inviteMenu.module.css";
import hero from "../../assets/img/inviteMenu/hero.png";
import share from "../../assets/icons/donate/share.png";
import orangeCloseIcon from "../../assets/icons/userPanel/orangeClose.png";

const InviteMenu = () => {
	const { setModalView } = useProfile();

	return (
		<div className={styles.inner}>
			<button className={styles.close} onClick={() => setModalView("profile")}>
				<img src={orangeCloseIcon} alt="Закрити" />
			</button>

			<img src={hero} alt="Герої" className={styles.heroImage} />
			<p className={styles.desc}>
				Я учасник альянсу допомоги!
				<br />
				За одну гривню я постачаю 20 одиниць допомоги в день на фронт.
				<br />
				Скоріше долучайся до нашої команди!
			</p>
			<button className={styles.inviteButton}>
				Привести друга <img src={share} alt="запросити" />
			</button>
		</div>
	);
};

export default InviteMenu;
