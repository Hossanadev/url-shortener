import { FC } from "react";
import { ModalProps } from "../../utilities/types";
import { AlertTriangle, X } from "react-feather";

const Modal: FC<ModalProps> = (props) => {
  const { modalMessage, closeModal, actionBtn, modalOpen, actionText } = props;
  return (
    <section
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black/50 ${
        modalOpen ? "scale-100" : "scale-0"
      } transform transition-transform duration-500`}
    >
      <div className="bg-white min-w-[95%] md:min-w-[70%] lg:min-w-[50%] rounded-sm border border-[#14344C] bg-opacity-100">
        <div className="flex justify-end">
          <span
            onClick={() => closeModal()}
            className="bg-red-500 rounded-bl hover:bg-red-600 duration-500 transition-colors cursor-pointer px-2 py-1 shadow block"
          >
            <X size={16} color="#ffffff" />
          </span>
        </div>
        <span className="flex justify-center">
          <AlertTriangle color="#FFFF00" fill="#000000" size={40} />
        </span>
        <p className="p-4 text-center text-sm text-gray-500">{modalMessage}</p>
        <div className="flex justify-center items-center my-4">
          <span
            onClick={() => actionBtn()}
            className="hover:bg-red-500 bg-[#14344C] transition-colors duration-200 text-white text-sm px-6 py-1 rounded-sm cursor-pointer"
          >
            {actionText}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Modal;
