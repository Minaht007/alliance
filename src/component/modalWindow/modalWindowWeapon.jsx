import styles from "../weapons/weapons.module.css"

const ModalWind = ({ onClose, children, title, }) => {
  return (
    <div className={styles.modalContainer}>
      <div>
        <div className="flex flex-col justify-center items-center" >
          
          <h1 className={styles.title} >{title}</h1>
          {children}
          
        </div>
      </div>
    </div>
  );
};

export default ModalWind;
