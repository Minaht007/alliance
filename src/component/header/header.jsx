import styles from "./Header.module.css";
import logoIcon from "../../assets/icons/header/logo.png";
import EnergyIcon from "../../assets/icons/header/energy.png"
import { useProfile } from "../../utils/useProfile";

const Header = () => {
	const { openProfile, joinToAlliance, joinAllians } = useProfile();
	return (
		<div className={styles.header}>
			<div className={styles.left}>
				<img src={logoIcon} alt="logo" className={styles.icon} />
				<button className={styles.name} onClick={openProfile}>
					Петро
				</button>
			</div>
			{!joinToAlliance ? (
				<button className={styles.joinBtn} onClick={joinAllians}>
					Стати членом альянсу
				</button>
			) : (
				<div className={styles.energyContainer}>
					<p className={styles.name}>10000</p>
					<img src={EnergyIcon} alt="energy" className={styles.energyIcon} />
				</div>
			)}
		</div>
	);
};

export default Header;
