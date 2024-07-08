import React from "react";
import Text from "../CommonComponents/Text";
import Buttons from "../CommonComponents/Buttons";
import image from "../assets/icc.jpg";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Dialog = ({ open, onClose }) => {
  const popup = () => {
    toast("Data Saved SuccessFully");
    onClose()
  };

  return (
    <>
      <ToastContainer position="top-center" draggable autoClose={2000}/>
      <div
        className={`fixed inset-0 flex items-center justify-center ${
          open ? "block" : "hidden"
        }`}
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={onClose}
        ></div>
        <div className="bg-white dark:bg-zinc-800 dark:text-gray-300 min-h-56 max-w-[800px] p-4 rounded-lg z-10">
          <div className="mb-2 px-2 flex justify-between items-center">
            <Text label={"DialogBox"} fontSize={"text-lg"} />
            <div onClick={onClose}>
              <i className="fa-sharp fa-solid fa-xmark text-2xl cursor-pointer"></i>
            </div>
          </div>
          <hr />
          <div className="p-2 flex justify-center flex-col">
            <img alt="image" src={image} className="h-96 my-2 rounded-2xl"></img>
            <Text
              label={
                "The 2024 ICC Men's T20 World Cup was the ninth edition of the ICC Men's T20 World Cup. It was co-hosted by the West Indies and the United States from 1 to 29 June 2024; the tournament being hosted by the West Indies for the second time, while this was also the first major ICC tournament to feature matches played in the United States."
              }
            />
          </div>
          <hr />
          <div className="flex justify-end gap-3">
            <Buttons
              id="close"
              label={"Close"}
              bgcolor={"bg-blue-600 hover:bg-transparent border border-blue-600"}
              color={"text-white hover:text-blue-600 dark:hover:border-gray-400"}
              rounded={"rounded-lg"}
              padding={"px-6 py-2 mt-3"}
              onClick={onClose}
            />
            <Buttons
              bgcolor={"border-blue-600 border hover:bg-blue-600 border-gray-400"}
              label={"Save"}
              color={"text-blue-600 hover:text-white dark:hover:border-blue-600"}
              rounded={"rounded-lg"}
              padding={"px-5 py-2 mt-3"}
              onClick={popup}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialog;
