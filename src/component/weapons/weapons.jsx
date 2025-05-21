import bgImage from "../../assets/background/bg3.png";
import styles from "./weapons.module.css";
import ModalWind from "../modalWindow/modalWindow";
import { useState } from "react";

const Weapons = () => {

	const [modalOpen, setModalOpen] = useState(false)
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
  
		<ModalWind 
		  title="Танк"
		  isOpen={modalOpen}
		  onClose={() => setModalOpen(false)}		
		  >
		  
		  {!showClearImage ? (
			<button className={styles.button} onClick={handleUnlockTank}>
			  Відкрити
			</button>
		  ) : null}  
		  
		  <div style={{ marginTop: '20px' }}>
			{showClearImage ? (
			  <img
				src="assets/tank/weaponTank.png" 
				alt="Clear tank"
				style={{ width: '255px', height: '144px' }}
			  />
			) : (
			  <img
				src="assets/tank/tankBlure.png" 
				alt="blurTank"
				style={{ width: '255px', height: '144px' }}
			  />
			)}
		  </div>
		</ModalWind>
	  </div>
	);
};

export default Weapons;
