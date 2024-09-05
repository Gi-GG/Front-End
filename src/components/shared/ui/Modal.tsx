import React from "react";

interface Props {
  children: React.ReactNode;
  isVisible: boolean;
  onClose: () => void;
}

const Modal = ({ children, isVisible, onClose }: Props) => {
  return (
    <div
      onClick={onClose}
      className={`w-screen h-screen bg-highlight bg-opacity-50 fixed top-0 left-0 z-40 flex items-end transition-all duration-300 ${
        isVisible ? "visible" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        className={`w-full h-3/4 lg:h-1/2 bg-base overflow-y-scroll duration-300 rounded-tl-2xl rounded-tr-2xl transform transition-transform ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
