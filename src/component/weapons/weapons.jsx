import bgImage from "../../assets/background/bg3.png";
import styles from "./weapons.module.css";
import ModalWind from "../modalWindow/modalWindow";
import { useState } from "react";
import blurTank from "../../assets/tank/tankBlure.png";
import tank from "../../assets/tank/weaponTank.png";

const Weapons = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showClearImage, setShowClearImage] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleUnlockTank = () => {
    setShowClearImage(true);
  };

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <ModalWind title={"Танк"} isOpen={true} onClose={() => setModalOpen(false)} style={"marginTop: '500px'"}>
		
        <div style={{ marginTop: "20px" }}>
          <img
            src={showClearImage ? tank : blurTank}
            alt="tank"
            style={{ width: "255px", height: "144px" }}
          />

          {!showClearImage ? (
            <button
              className={styles.button}
              onClick={() => setShowClearImage(!showClearImage)}
            >
              Відкрити
            </button>
          ) : (
            <button
              className={styles.button}
              onClick={() => setShowClearImage(!showClearImage)}
            >
              Відкрито
            </button>
          )}
        </div>
      </ModalWind>
    </div>
  );
};

export default Weapons;
