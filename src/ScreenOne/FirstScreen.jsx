import { useState } from "react";
import Buttons from "../CommonComponents/Buttons";
import Text from "../CommonComponents/Text";
import TextField from "../CommonComponents/TextField";
import Dialog from "./Dialog";
import Accordion from "../CommonComponents/Accordion";
import Dropdown from "../CommonComponents/DropDown";

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

  const FirstAccordion = [
    {
      title: "About ICC Men's T20 World Cup",
      content:
        "The event has generally been held every two years. In May 2016, the ICC put forward the idea of having a tournament in 2018, with South Africa being the possible host,[2] but the ICC later dropped the idea of a 2018 edition as the top member nations busied with bilateral commitments in 2018.",
    },
  ];
  const SecondAccordion = [
    {
      title: "About Earth.",
      content:
        "Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being an ocean world, the only one in the Solar System sustaining liquid surface water. Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's crust. The remaining 29.2% of Earth's crust is land, most of which is located in the form of continental landmasses within Earth's land hemisphere. ",
    },
  ];
  const ThirdAccordion = [
    {
      title: "About Sun.",
      content:
        "The Sun is the star at the center of the Solar System. It is a massive, nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy from its surface mainly as visible light and infrared radiation with 10% at ultraviolet energies. ",
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
      location: "animal",
      value: "animal",
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

  return (
    <>
      <div className="flex flex-col px-3 gap-4">
        <div className="flex flex-col gap-4">
          <Text
            fontWeight="font-semibold"
            dark={"dark:text-white"}
            label={"1). First Field"}
          />
          <TextField
            width="w-[30%]"
            border={"border-[#5982f180]"}
            placeholder="First Field"
          />
          <Text
            padding={"p-2 px-[14px]"}
            rounded={"rounded-xl"}
            dark={"dark:text-black"}
            bgcolor={"bg-[#d3e3fd] hover:bg-[#a8c7fa] duration-200"}
            label="In cricket, the T20 World Cup concludes with India defeating South Africa in the final (player of the final Virat Kohli pictured).In Bolivia, troops led by Juan José Zúñiga storm the presidential palace in an attempted coup."
          />
        </div>
        <div className="flex flex-col gap-4">
          <Text
            fontWeight="font-semibold"
            dark={"dark:text-white"}
            label={"2). Second Field"}
          />
          <TextField
            width="w-[40%]"
            border={"border-[#c4eed0]"}
            placeholder="Second Field"
          />
          <Text
            padding={"p-2 px-[14px]"}
            rounded={"rounded-xl"}
            bgcolor={"bg-[#c4eed0] hover:bg-[#6dd58c99] duration-200"}
            label="In cricket, the T20 World Cup concludes with India defeating South Africa in the final (player of the final Virat Kohli pictured).In Bolivia, troops led by Juan José Zúñiga storm the presidential palace in an attempted coup."
          />
        </div>
        <div className="flex flex-col gap-4">
          <Text
            fontWeight="font-semibold"
            dark={"dark:text-white"}
            label={"3). Third Field"}
          />
          <TextField
            width="w-[50%]"
            border={"border-gray-500"}
            placeholder="Third Field"
          />
          <Text
            padding={"p-2 px-[14px]"}
            fontWeight={"font-bold"}
            rounded={"rounded-xl"}
            fontSize={"text-lg"}
            bgcolor={"bg-[#e3e3e3] hover:bg-[#c7c7c7] duration-200"}
            label="The Canadian National Railway (CN) is a Canadian Class I freight railway headquartered in Montreal, which serves Canada and the Midwestern and Southern United States. It is Canada's largest railway, in terms of both revenue and the physical size of its rail network,"
          />
        </div>
      </div>
      <hr className="mt-10" />
      <div className="my-3 px-4">
        <Text
          fontSize={"text-xl"}
          padding={"p-2"}
          dark={"dark:text-white"}
          fontWeight={"font-semibold"}
          label={"DropDown"}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Dropdown
          dataset={location}
          label={"Select Car"}
          gridcols={"grid-cols-8"}
          colspen={"col-span-4"}
          selectedOptions={selectedOptions}
          dark={
            "dark:border-none hover:dark:bg-zinc-800 dark:bg-zinc-800 dark:text-gray-400"
          }
          setSelectedOptions={setSelectedOptions}
          isMultiSelect={true}
        />
        <Dropdown
          dataset={animal}
          label={"Select Price"}
          colspen={"col-span-3"}
          gridcols={"grid-cols-9"}
          dark={
            "dark:border-none hover:dark:bg-zinc-800 dark:bg-zinc-800 dark:text-gray-400"
          }
          selectedOptions={selectedOptionstwo}
          setSelectedOptions={setSelectedOptionstwo}
        />
        <Dropdown
          dataset={location}
          label={"Select Price"}
          colspen={"col-span-3"}
          gridcols={"grid-cols-12"}
          selectedOptions={selectedOptionsthree}
          dark={
            "dark:border-none hover:dark:bg-zinc-800 dark:bg-zinc-800 dark:text-gray-400"
          }
          setSelectedOptions={setSelectedOptionsthree}
        />
      </div>
      <div className="my-3 px-4">
        <Text
          fontSize={"text-xl"}
          dark={"dark:text-white"}
          padding={"p-2"}
          fontWeight={"font-semibold"}
          label={"Accordion"}
        />
      </div>
      <div className="flex flex-col px-4 gap-4">
        <Accordion
          items={FirstAccordion}
          hover={"hover:bg-[#96C9F480] "}
          bgcolor={"bg-blue-50"}
        />
        <Accordion
          items={SecondAccordion}
          hover={"hover:bg-[#6dd58c95]"}
          bgcolor={"bg-[#c4eed0]"}
        />
        <Accordion
          items={ThirdAccordion}
          hover={"hover:bg-[#AD88C6]"}
          bgcolor={"bg-[#AD88C699] "}
          color={"text-white"}
        />
      </div>
      <div className="flex justify-end px-4 ">
        <div className="my-5">
          <Buttons
            rounded={"rounded-lg"}
            padding={"px-10"}
            bgcolor={"bg-blue-600"}
            color={"text-white"}
            label={"Dialogbox"}
            onClick={handleClickOpen}
          />
        </div>
        <Dialog open={open} onClose={handleClose} />
      </div>
    </>
  );
};

export default FirstScreen;
