

const ModalWind = ({ onClose, children, button }) => {
  return (
    <div>
      <div>
        <div className=" relative py-20">
          <button onClick={onClose}></button>
          {children}
          <button button={button}></button>
        </div>
      </div>
    </div>
  );
};

export default ModalWind;
