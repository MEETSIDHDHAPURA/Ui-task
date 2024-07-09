import { useState } from "react";
import Button from "../CommonComponents/Button";
import Text from "../CommonComponents/Text";
import TextField from "../CommonComponents/TextField";
import Dialog from "./Dialog";
import Dropdown from "../CommonComponents/DropDown";
import Accordion from "../CommonComponents/Accordion";
import image from "../assets/icc.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FirstScreen = () => {
  const [open, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptionstwo, setSelectedOptionstwo] = useState([]);
  const [selectedOptionsthree, setSelectedOptionsthree] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const popup = () => {
    toast("Data Saved SuccessFully");
    handleClose();
  };

  const accordiondata = [
    {
      title: "Section 1",
      content: <p>This is the content for section 1.</p>,
    },
    {
      title: "Section 2",
      content: <p>This is the content for section 2.</p>,
    },
    {
      title: "Section 3",
      content: <p>This is the content for section 3.</p>,
    },
  ];

  const location = [
    {
      location: "Ahmedabad",
      value: "Ahmedabad",
    },
    {
      location: "Surat",
      value: "Surat",
    },
    {
      location: "Rajkot",
      value: "Rajkot",
    },
    {
      location: "Amreli",
      value: "Amreli",
    },
  ];

  const animal = [
    {
      location: "Animal",
      value: "Animal",
    },
    {
      location: "Lion",
      value: "Lion",
    },
    {
      location: "Tiger",
      value: "Tiger",
    },
    {
      location: "Elephant",
      value: "Elephant",
    },
  ];

  return (
    <>
      <div className="flex flex-col px-3 gap-4">
        <div className="flex flex-col gap-4">
          <Text className={"font-semibold dark:text-white"}>
            1). First Field
          </Text>
          <TextField
            width="w-[30%]"
            border={"border-[#5982f180]"}
            placeholder="First Field"
          />
          <Text
            className={
              "p-2 px-[14px] rounded-xl dark:text-black bg-[#d3e3fd] hover:bg-[#a8c7fa] duration-200"
            }
          >
            In cricket, the T20 World Cup concludes with India defeating South
            Africa in the final (player of the final Virat Kohli pictured).In
            Bolivia, troops led by Juan José Zúñiga storm the presidential
            palace in an attempted coup.
          </Text>
        </div>
        <div className="flex flex-col gap-4">
          <Text className={"font-semibold dark:text-white"}>
            2). Second Field
          </Text>
          <TextField
            width="w-[40%]"
            border={"border-[#c4eed0]"}
            placeholder="Second Field"
          />
          <Text
            className={
              "p-2 px-[14px] rounded-xl bg-[#c4eed0] hover:bg-[#6dd58c99] duration-200"
            }
          >
            In cricket, the T20 World Cup concludes with India defeating South
            Africa in the final (player of the final Virat Kohli pictured).In
            Bolivia, troops led by Juan José Zúñiga storm the presidential
            palace in an attempted coup.
          </Text>
        </div>
        <div className="flex flex-col gap-4">
          <Text className={"font-semibold dark:text-white"}>
            3). Third Field
          </Text>
          <TextField
            width="w-[50%]"
            border={"border-gray-500"}
            placeholder="Third Field"
          />
          <Text
            className={
              "p-2 px-[14px] bg-[#e3e3e3] hover:bg-[#c7c7c7] duration-200 text-lg rounded-xl font-bold"
            }
          >
            The Canadian National Railway (CN) is a Canadian Class I freight
            railway headquartered in Montreal, which serves Canada and the
            Midwestern and Southern United States. It is Canada's largest
            railway, in terms of both revenue and the physical size of its rail
            network,
          </Text>
        </div>
      </div>
      <hr className="mt-10" />
      <div className="my-3 px-4">
        <Text className={"text-xl p-2 dark:text-white font-semibold"}>
          DropDown
        </Text>
      </div>
      <div className="flex flex-col gap-4">
        <Dropdown
          dataset={location}
          label={"Select Car"}
          gridcols={"grid-cols-8"}
          colspen={"col-span-4"}
          selectedOptions={selectedOptions}
          dark={"dark:border-none hover:bg-zinc dark:bg-zinc dark:text-primary"}
          setSelectedOptions={setSelectedOptions}
          isMultiSelect={true}
        />
        <Dropdown
          dataset={animal}
          label={"Select Animal"}
          colspen={"col-span-3"}
          gridcols={"grid-cols-9"}
          dark={"dark:border-none hover:bg-zinc dark:bg-zinc dark:text-primary"}
          selectedOptions={selectedOptionstwo}
          setSelectedOptions={setSelectedOptionstwo}
        />
        <Dropdown
          dataset={location}
          label={"Select Location"}
          colspen={"col-span-3"}
          gridcols={"grid-cols-12"}
          selectedOptions={selectedOptionsthree}
          dark={"dark:border-none hover:bg-zinc dark:bg-zinc dark:text-primary"}
          setSelectedOptions={setSelectedOptionsthree}
        />
      </div>
      <div className="my-3 px-4">
        <Text className={"p-2 text-xl dark:text-white font-semibold"}>
          Accordion
        </Text>
      </div>
      <div className="flex flex-col px-4 gap-4">
        <Accordion
          items={accordiondata}
          hover="hover:bg-gray-300"
          activeBgColor="bg-blue-50"
          inactiveBgColor="bg-gray-100 dark:bg-zinc"
          borderColor="border-gray-400"
          textColor="dark:text-white"
          arrowUpIcon="fas fa-arrow-up"
          arrowDownIcon="fas fa-arrow-down dark:text-white"
        />
      </div>
      <div className="flex justify-end px-4 ">
        <div className="my-5">
          <Button
            onClick={handleClickOpen}
            className={
              "bg-blue-600 hover:bg-transparent border border-blue-600 text-white hover:text-blue-600 dark:hover:border-gray-400 rounded-lg px-6 py-2 mt-3"
            }
          >
            Open Dialog
          </Button>
          <Button label={"Save"} />
        </div>
        <Dialog open={open} onClose={handleClose}>
          <div
            className={`fixed inset-0 flex items-center justify-center ${
              open ? "block" : "hidden"
            }`}
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={handleClose}
            ></div>
            <div className="bg-white dark:bg-zinc dark:text-primary min-h-56 max-w-[800px] p-4 rounded-lg z-10">
              <div className="mb-2 px-2 flex justify-between items-center">
                <Text className={"text-lg"}>DialogBox</Text>
                <div onClick={handleClose}>
                  <i className="fa-sharp fa-solid fa-xmark text-2xl cursor-pointer"></i>
                </div>
              </div>
              <hr />
              <div className="p-2 flex justify-center flex-col">
                <img
                  alt="image"
                  src={image}
                  className="h-96 my-2 rounded-2xl"
                ></img>
                <Text>
                  The 2024 ICC Men's T20 World Cup was the ninth edition of the
                  ICC Men's T20 World Cup. It was co-hosted by the West Indies
                  and the United States from 1 to 29 June 2024; the tournament
                  being hosted by the West Indies for the second time, while
                  this was also the first major ICC tournament to feature
                  matches played in the United States.
                </Text>
              </div>
              <hr />
              <div className="flex justify-end gap-3">
                <Button
                  onClick={handleClose}
                  className={
                    "bg-blue-600 hover:bg-transparent border border-blue-600 text-white hover:text-blue-600 dark:hover:border-gray-400 rounded-lg px-6 py-2 mt-3"
                  }
                >
                  Close
                </Button>
                <Button
                  onClick={popup}
                  className={
                    "px-5 py-2 mt-3 rounded-lg text-blue-600 hover:text-white dark:hover:border-blue-600 border-blue-600 border hover:bg-blue-600 dark:border-secondary"
                  }
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default FirstScreen;
