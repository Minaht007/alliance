import styles from "./Header.module.css";
import logoIcon from "../../assets/icons/header/logo.png";

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.left}>
				<img src={logoIcon} alt="logo" className={styles.icon} />
				<span className={styles.name}>Петро</span>
			</div>
			<button className={styles.joinBtn}>Стати членом альянсу</button>
		</div>
	);
};

export default Header;
