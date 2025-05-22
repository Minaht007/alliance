import bgImage from "../../assets/background/bg3.png";
import styles from "./weapons.module.css";
import ModalWind from "../modalWindow/modalWindowWeapon";
import { useState } from "react";
import blurTank from "../../assets/tank/tankBlure.png";
import tank from "../../assets/tank/weaponTank.png";
import lockImg from "../../assets/icons/modalWinIcons/lock.png";
import weaponSlide from "../../../public/json/weaponSlyder.json";
import arrowLeft from "../../assets/icons/modalWinIcons/arowLeft.png"
import arrowRight from "../../assets/icons/modalWinIcons/arowRight.png"
import { useSwipeable } from "react-swipeable"

const Weapons = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showClearImage, setShowClearImage] = useState(false); 



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
     <ModalWind title={"Танк"} isOpen={modalOpen} onClose={() => setModalOpen(false)}>
  <div {...handlers}>
    <div className={styles.sliderWrapper}>
      

      {weaponSlide.slice(currentIndex, currentIndex + slidesPerPage).map((slide) => (
        <div key={slide.title} className={styles.slideContent}>
          <div className={styles.imgContainer}>
              {/* стрілка в ліва */}
          <button onClick={prevSlide} className={styles.arrowButton}>
        <img src={arrowLeft} alt="arrowLeft" width={20} height={20} />
      </button>
          <img
            src={showClearImage ? tank : blurTank}
            alt="tank"
            className={styles.imgStyle}
          />
          {/* стрідка в право */}
          <button onClick={nextSlide} className={styles.arrowButton}>
        <img src={arrowRight} alt="arrowRight" width={20} height={20} />
      </button>
          </div>
        
          <p className={styles.pScript}>Опис озброєння опис озброєння</p>
          <p className={styles.pScript}>Опис озброєння опис озброєння</p>
          <p className={styles.pScript}>Опис озброєння опис озброєння</p>
          {!showClearImage ? (
            <button className={styles.button} onClick={() => setShowClearImage(true)}>
              Відкрити
            </button>
          ) : (
            <button className={styles.buttonActive} onClick={() => setShowClearImage(false)}>
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
      {[...Array(Math.ceil(totalSlides / slidesPerPage)).keys()].map((index) => (
        <div
          key={index}
          className={`${styles.dot} ${
            currentIndex / slidesPerPage === index ? styles.activeDot : ""
          }`}
          onClick={() => setCurrentIndex(index * slidesPerPage)}
        />
      ))}
    </div>
  </div>
</ModalWind>

    </div>
  );

		<div className={styles.wrapper} style={{ backgroundImage: `url(${bgImage})` }}>
			<ModalWind
				title={"Танк"}
				isOpen={modalOpen}
				onClose={() => setModalOpen(false)}
				style={"marginTop: '500px'"}
			>
				<div style={{ marginTop: "20px" }}>
					<img
						src={showClearImage ? tank : blurTank}
						alt="tank"
						style={{ width: "255px", height: "144px" }}
					/>

					{!showClearImage ? (
						<button className={styles.button} onClick={() => setShowClearImage(!showClearImage)}>
							Відкрити
						</button>
					) : (
						<button className={styles.button} onClick={() => setShowClearImage(!showClearImage)}>
							Відкрито
						</button>
					)}
				</div>
			</ModalWind>
		</div>
	);

};

export default Weapons;

// return (

// );

// <div>
//         <img
//           src={showClearImage ? tank : blurTank}
//           alt="tank"
//           className={styles.imgStyle}
//         />

//         <p className={styles.pScript}>Опис озброєння опис озброєння</p>
//         <p className={styles.pScript}>Опис озброєння опис озброєння</p>
//         <p className={styles.pScript}>Опис озброєння опис озброєння</p>

// {!showClearImage ? (
//   <button
//     className={styles.button}
//     onClick={() => setShowClearImage(!showClearImage)}
//   >
//     Відкрити
//   </button>
// ) : (
//   <button
//     className={styles.buttonActive}
//     onClick={() => setShowClearImage(!showClearImage)}
//   >
//     Відкрито  <img src={lockImg} width={11} height={14} style={{marginLeft: 10}} />
//   </button>
// )}
//       </div>
