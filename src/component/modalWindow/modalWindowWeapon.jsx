import styles from "../weapons/weapons.module.css";

const ModalWind = ({ children, title }) => {
	return (
		<div className={styles.modalContainer}>
			<div>
				<div>
					<h1 className={styles.title}>{title}</h1>
					{children}
				</div>
			</div>
		</div>
	);
};

export default ModalWind;
