import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import weaponsIcon from "../../assets/icons/footer/weapon.svg";
import homeIcon from "../../assets/icons/footer/home.svg";
import newsIcon from "../../assets/icons/footer/news.svg";

const Footer = () => {
	const links = [
		{ to: "/weapons", label: "Зброя", icon: weaponsIcon },
		{ to: "/", label: "Головна", icon: homeIcon },
		{ to: "/news", label: "Новини", icon: newsIcon },
	];

	return (
		<footer className={styles.footer}>
			{links.map((link) => (
				<NavLink
					key={link.to}
					to={link.to}
					className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
				>
					<img src={link.icon} alt={link.label} className={styles.icon} />
					<span className={styles.label}>{link.label}</span>
				</NavLink>
			))}
		</footer>
	);
};

export default Footer;
