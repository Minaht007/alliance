import bgImage from "../../assets/background/bg3.png";
import styles from "./weapons.module.css";
import ModalWind from "../modalWindow/modalWindowWeapon";
import { useState } from "react";
import tank from "../../assets/tank/weaponTank.png";
import lockImg from "../../assets/icons/modalWinIcons/lock.png";
import weaponSlide from "../../../public/json/weaponSlyder.json";
import arrowLeft from "../../assets/icons/modalWinIcons/arowLeft.png";
import arrowRight from "../../assets/icons/modalWinIcons/arowRight.png";
import { useSwipeable } from "react-swipeable";
import wolf from "../../assets/img/weapons/wolf1.png";
import { useProfile } from "../../utils/useProfile";

const Weapons = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [showClearImage, setShowClearImage] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const totalSlides = weaponSlide.length;

	const { openProfile } = useProfile();

	const nextSlide = () => {
		if (currentIndex === totalSlides - 1) {
			return setCurrentIndex(0);
		}
		const nextIndex = (currentIndex + 1) % totalSlides;
		setCurrentIndex(nextIndex);
	};

	const prevSlide = () => {
		if (currentIndex === 0) {
			return setCurrentIndex(totalSlides - 1);
		}
		const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
		setCurrentIndex(prevIndex);
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => nextSlide(),
		onSwipedRight: () => prevSlide(),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});

	return (
		<div className={styles.wrapper} style={{ backgroundImage: `url(${bgImage})` }}>
			<img src={wolf} alt="wolf" className={styles.wolfImg} />
			<ModalWind title={"Танк"} isOpen={modalOpen} onClose={() => setModalOpen(false)}>
				<div {...handlers}>
					<div className={styles.sliderWrapper}>
						{weaponSlide.slice(currentIndex, currentIndex + 1).map((slide) => (
							<div key={slide.title} className={styles.slideContent}>
								<div className={styles.imgContainer}>
									{/* стрілка в ліва */}
									<button onClick={prevSlide} className={styles.arrowButtonLeft}>
										<img src={arrowLeft} alt="arrowLeft" className={styles.arrowImg} />
									</button>

									<img
										src={tank}
										alt="tank"
										className={
											showClearImage
												? `${styles.imgStyle}`
												: `${styles.imgStyleBlur} ${styles.imgStyle}`
										}
									/>
									{!showClearImage && <img src={lockImg} alt="lock" className={styles.lockImg} />}

									{/* стрідка в право */}
									<button onClick={nextSlide} className={styles.arrowButtonRight}>
										<img src={arrowRight} alt="arrowRight" className={styles.arrowImg} />
									</button>
								</div>

								<div className={styles.scriptConteiner}>
									<p className={styles.pScript}>Опис озброєння опис озброєння</p>
									<p className={styles.pScript}>Опис озброєння опис озброєння</p>
									<p className={styles.pScript}>Опис озброєння опис озброєння</p>
								</div>

								{!showClearImage ? (
									<button className={styles.button} onClick={openProfile}>
										Відкрити
									</button>
								) : (
									<button className={styles.buttonActive} onClick={() => setShowClearImage(false)}>
										Відкрито
										<img
											src={lockImg}
											width={11}
											height={14}
											style={{ marginLeft: 10 }}
											alt="lock"
										/>
									</button>
								)}
							</div>
						))}
					</div>

					<div className={styles.dotsContainer}>
						{[...Array(Math.ceil(totalSlides / 1)).keys()].map((index) => (
							<div
								key={index}
								className={`${styles.dot} ${currentIndex / 1 === index ? styles.activeDot : ""}`}
								onClick={() => setCurrentIndex(index * 1)}
							/>
						))}
					</div>
				</div>
			</ModalWind>
		</div>
	);
};

export default Weapons;
