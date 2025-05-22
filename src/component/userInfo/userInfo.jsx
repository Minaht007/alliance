import styles from "./userInfo.module.css";
import energyIcon from "../../assets/icons/userPanel/energy.png";
import coinIcon from "../../assets/icons/userPanel/coin.png";
import boostIcon from "../../assets/icons/userPanel/boost.png";
import exitIcon from "../../assets/icons/userPanel/exit.png";
import logoIcon from "../../assets/icons/header/logo.png";

import closeIcon from "../../assets/icons/userPanel/close.png";
import { useProfile } from "../../utils/useProfile";

const ProfilePanel=()=> {
	const { isOpen, leaveAllianse, setModalView, closeProfile } = useProfile();

	if (!isOpen) return null;

	return (
		<div className={styles.inner}>
			<button className={styles.close} onClick={closeProfile}>
				<img src={closeIcon} alt="Закрити" />
			</button>
			<div className={styles.header}>
				<img src={logoIcon} alt="Петро" className={styles.symbol} />
				<p className={styles.name}>Петро</p>
			</div>

			<div className={styles.item}>
				<div className={styles.info}>
					<div className={styles.info}>
						<img src={energyIcon} alt="Потужність" />
						<p className={styles.label}>Потужність</p>
					</div>

					<button className={styles.btn}>Підвищити</button>
				</div>
				<p className={styles.value}>10 000</p>
			</div>

			<div className={styles.item}>
				<div className={styles.info}>
					<div className={styles.info}>
						<img src={coinIcon} alt="Ваш донат" />
						<p className={styles.label}>Ваш донат</p>
					</div>

					<button className={styles.btn} onClick={() => setModalView("donate")}>
						Збільшити
					</button>
				</div>
				<p className={styles.value}>10 грн/день</p>
			</div>

			<div className={styles.item}>
				<div className={styles.info}>
					<div className={styles.info}>
						<img src={boostIcon} alt="Ваш внесок" />
						<p className={styles.label}>Ваш внесок</p>
					</div>

					<button className={styles.btn}>Покращити</button>
				</div>
				<p className={styles.value}>
					100 одиниць <br /> допомоги/день
				</p>
			</div>

			<button className={styles.leave} onClick={leaveAllianse}>
				<p className={styles.leaveText}>Покинути альянс</p>{" "}
				<img src={exitIcon} className={styles.leaveIcon} alt="Закрити" />
			</button>
		</div>
	);
}

export default ProfilePanel;
