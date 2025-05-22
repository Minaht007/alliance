import bgImage from "../../assets/background/bg3.png";
import styles from "./weapons.module.css";
import ModalWind from "../modalWindow/modalWindowWeapon";
import { useState } from "react";
import blurTank from "../../assets/tank/tankBlure.png";
import tank from "../../assets/tank/weaponTank.png";
import lockImg from "../../assets/icons/modalWinIcons/lock.png";
import weaponSlide from "../../../public/json/weaponSlyder.json";
import arrowLeft from "../../assets/icons/modalWinIcons/arowLeft.png";
import arrowRight from "../../assets/icons/modalWinIcons/arowRight.png";
import { useSwipeable } from "react-swipeable";

const Weapons = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showClearImage, setShowClearImage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [slidesPerPage, setSlidesPerPage] = useState(1);
	const totalSlides = weaponSlide.length;

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
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <ModalWind
        title={"Танк"}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <div {...handlers}>
          <div className={styles.sliderWrapper}>
            {weaponSlide
              .slice(currentIndex, currentIndex + 1)
              .map((slide) => (
                <div key={slide.title} className={styles.slideContent}>
                  <div className={styles.imgContainer}>
                    {/* стрілка в ліва */}
                    <button onClick={prevSlide} className={styles.arrowButton}>
                      <img
                        src={arrowLeft}
                        alt="arrowLeft"
                        width={20}
                        height={20}
                      />
                    </button>
                    <img
                      src={showClearImage ? tank : blurTank}
                      alt="tank"
                      className={styles.imgStyle}
                    />
                    {/* стрідка в право */}
                    <button onClick={nextSlide} className={styles.arrowButton}>
                      <img
                        src={arrowRight}
                        alt="arrowRight"
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>

                  <p className={styles.pScript}>
                    Опис озброєння опис озброєння
                  </p>
                  <p className={styles.pScript}>
                    Опис озброєння опис озброєння
                  </p>
                  <p className={styles.pScript}>
                    Опис озброєння опис озброєння
                  </p>
                  {!showClearImage ? (
                    <button
                      className={styles.button}
                      onClick={() => setShowClearImage(true)}
                    >
                      Відкрити
                    </button>
                  ) : (
                    <button
                      className={styles.buttonActive}
                      onClick={() => setShowClearImage(false)}
                    >
                      Відкрито{" "}
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
            {[...Array(Math.ceil(totalSlides / 1)).keys()].map(
              (index) => (
                <div
                  key={index}
                  className={`${styles.dot} ${
                    currentIndex / 1 === index
                      ? styles.activeDot
                      : ""
                  }`}
                  onClick={() => setCurrentIndex(index * 1)}
                />
              )
            )}
          </div>
        </div>
      </ModalWind>
    </div>
  );
};

export default Weapons;
