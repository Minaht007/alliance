import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import weaponsIcon from "../../assets/icons/footer/weapon.svg";
import homeIcon from "../../assets/icons/footer/home.svg";
import newsIcon from "../../assets/icons/footer/news.svg";
import orangeWeaponsIcon from "../../assets/icons/footer/orangeWeapon.svg";
import orangeHomeIcon from "../../assets/icons/footer/orangeHome.svg";
import orangeNewsIcon from "../../assets/icons/footer/orangeNews.svg";

const Footer = () => {
	const links = [
		{ to: "/weapons", label: "Зброя", icon: weaponsIcon, orangeIcon: orangeWeaponsIcon },
		{ to: "/", label: "Головна", icon: homeIcon, orangeIcon: orangeHomeIcon },
		{ to: "/news", label: "Новини", icon: newsIcon, orangeIcon: orangeNewsIcon },
	];

	return (
		<footer className={styles.footer}>
			{/* {links.map((link) => (
				<NavLink
					key={link.to}
					to={link.to}
					className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
				>
					<img
						src={(isActive)=>isActive ? link.orangeIcon : link.icon}
						alt={link.label}
						className={styles.icon}
					/>

					<span className={styles.label}>{link.label}</span>
				</NavLink>
			))} */}
			{links.map((link) => (
				<NavLink to={link.to} key={link.to} className={styles.link}>
					{({ isActive }) => (
						<>
							<img
								src={isActive ? link.orangeIcon : link.icon}
								alt={link.label}
								className={styles.icon}
							/>
							<span className={isActive ? styles.active : ''}>{link.label}</span>
						</>
					)}
				</NavLink>
			))}
		</footer>
	);
};

export default Footer;
