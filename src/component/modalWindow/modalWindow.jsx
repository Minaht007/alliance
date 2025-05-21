

const ModalWind = ({ onClose, children, title, style }) => {
  return (
    <div>
      <div>
        <div >
          <button onClick={onClose}></button>
          <h1>{title}</h1>
          {children}
          
        </div>
      </div>
    </div>
  );
};

export default ModalWind;
