import { useState } from "react";
import GridLayout from "react-grid-layout";
import { CSVLink } from "react-csv";
import Buttons from "../CommonComponents/Buttons";
import Text from "../CommonComponents/Text";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
 
const DragandDrop = () => {
  const Data = [
    {
      name: "Wendell Winn",
      phone: "7021971221",
      email: "wwinn1@amazon.de",
      location: "Las Vegas",
      age: "20",
    },
    {
      name: "Joey Rochester",
      phone: "6082057052",
      email: "jrochester2@odnoklassniki.ru",
      location: "Fazhan",
      age: "25",
    },
    {
      name: "Katherina McClurg",
      phone: "4905470009",
      email: "kmcclurg5@cmu.edu",
      location: "Hidalgo",
      age: "65",
    },
    {
      name: "Eli Meekins",
      phone: "1626375602",
      email: "1626375602",
      location: "Cisownica",
      age: "78",
    },
    {
      name: "Laurent Benit",
      phone: "7333499339",
      email: "lbenitz@bandcamp.com",
      location: "Chak",
      age: "35",
    },
    {
      name: "Giselbert Jehan",
      phone: "7516313684",
      email: "gjehan7@illinois.edu",
      location: "Helsingborg",
      age: "39",
    },
    {
      name: "Laney Jarritt",
      phone: "9951515500",
      email: "ljarrittw@nydailynews.com",
      location: "Wucheng",
      age: "49",
    },
  ];

  const [items, setItems] = useState(Data);

  const layout = items.map((item, index) => ({
    i: item.email,
    x: 0,
    y: index,
    w: 1,
    h: 1,
    static: false,
  }));

  const onLayoutChange = (newLayout) => {
    const sortedItems = [...items].sort((a, b) => {
      const layoutA = newLayout.find((layoutItem) => layoutItem.i === a.email);
      const layoutB = newLayout.find((layoutItem) => layoutItem.i === b.email);
      return layoutA.y - layoutB.y;
    });
    setItems(sortedItems);
  };

  return (
    <div>
      <div className="flex w-full justify-between items-center mb-3">
        <Text
          label={"List"}
          fontSize={"text-2xl"}
          padding={"px-2"}
          color={"text-black dark:text-gray-300"}
          fontWeight={"font-semibold"}
        />
        <div>
          <CSVLink data={items}>
            <Buttons
              label={"Export Data"}
              rounded={"rounded-lg"}
              padding={"px-5 mx-3"}
              bgcolor={"bg-blue-600"}
              color={"text-white"}
            />
          </CSVLink>
        </div>
      </div>
      <GridLayout
        layout={layout}
        cols={1}
        rowHeight={50}
        width={890}
        isResizable={false}
        onLayoutChange={onLayoutChange}
        draggableHandle=".drag-handle"
      >
        {items.map((item, index) => (
          <div
            key={item.email}
            data-grid={{ x: 0, y: items.indexOf(item), w: 1, h: 1 }}
            className="flex items-center dark:bg-zinc-700 dark:text-gray-200 bg-[#efefef] p-4 rounded-lg"
          >
            <button className="drag-handle w-16">
              <i className="fa-solid fa-list-ul"></i>
            </button>
            <h2 className="w-16 ml-5">{index + 1}</h2>
            <h2 className="w-44">{item.name}</h2>
            <h2 className="w-40">{item.phone}</h2>
            <h2 className="w-60">{item.email}</h2>
            <h2 className="w-20">{item.location}</h2>
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default DragandDrop;
