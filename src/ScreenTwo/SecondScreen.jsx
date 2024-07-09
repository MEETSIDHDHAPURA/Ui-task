import React, { useEffect, useState } from "react";
import TextField from "../CommonComponents/TextField";
import Text from "../CommonComponents/Text";
import Pagination from "../CommonComponents/Pagination";
import Dropdown from "../CommonComponents/DropDown";
import Switch from "../CommonComponents/Switch";
import Loading from "../CommonComponents/Loading";

const SecondScreen = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [isSwitchActive, setIsSwitchActive] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    const getData = async () => {
      try {
        const url = "https://dev.carzup.in/api/pricelist/test-mock";
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error While fetching data");
        }
        const data = await response.json();
        setTableData(data.data);
        setFilteredData(data.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const filterData = () => {
      let filtered = tableData.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );

      if (selectedOptions.length > 0) {
        filtered = filtered.filter((item) =>
          selectedOptions.includes(item.location)
        );
      }
      if (isSwitchActive) {
        filtered = filtered.filter((item) => item.active);
      }

      setFilteredData(filtered);
      setCurrentPage(1);
    };

    filterData();
  }, [searchText, selectedOptions, tableData, isSwitchActive]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSwitchActive = (index) => {
    const newData = [...filteredData];
    newData[index].active = !newData[index].active;
    setFilteredData(newData);
  };

  const handletoggleSwitchActive = () => {
    setIsSwitchActive(!isSwitchActive);
  };

  const id = (index) => {
    return index + 1 + (currentPage - 1) * itemsPerPage;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="h-[100vh]">
      <div>
        <Text
          label={"Table"}
          fontSize={"text-2xl"}
          padding={"p-2"}
          color={"text-black dark:text-gray-300"}
          fontWeight={"font-semibold"}
        />
        <hr className="bg-[#5982f180]" />
      </div>
      <div>
        <div className="p-2 my-3 flex gap-4 items-center">
          <TextField
            border={"border-[#5982f180]"}
            placeholder={"Search"}
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value), console.log(e.target.value);
            }}
          />
          <Dropdown
            dark={
              "dark:border-none hover:dark:bg-zinc-800 dark:bg-zinc-800 dark:text-gray-400"
            }
            label={"Select Location"}
            gridcols={"grid-cols-6"}
            colspen={"col-span-6"}
            dataset={tableData}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          <Switch
            isActive={isSwitchActive}
            onToggle={() => handletoggleSwitchActive()}
          />
        </div>
        <div className="p-2 my-5 min-h-[450px] dark:text-gray-300">
          <div className="grid grid-cols-11">
            <div className="p-2 dark:border-none dark:bg-zinc-800 bg-[#96C9F480] font-bold flex justify-center items-center rounded-tl-lg border border-[#5982f180]">
              <h1>id</h1>
            </div>
            <div className="p-2 dark:border-none dark:bg-zinc-800 bg-[#96C9F480] col-span-2 font-bold flex justify-center items-center border-r border-y border-[#5982f180]">
              <h1>Name</h1>
            </div>
            <div className="p-2 dark:border-none dark:bg-zinc-800 bg-[#96C9F480] col-span-2 font-bold flex justify-center items-center border-r border-y border-[#5982f180]">
              <h1>Phone</h1>
            </div>
            <div className="p-2 dark:border-none dark:bg-zinc-800 bg-[#96C9F480] col-span-3 font-bold flex justify-center items-center border-r border-y border-[#5982f180]">
              <h1>Email</h1>
            </div>
            <div className="p-2 dark:border-none dark:bg-zinc-800 bg-[#96C9F480] col-span-2 font-bold flex justify-center items-center border-r border-y border-[#5982f180]">
              <h1>Location</h1>
            </div>
            <div className="p-2 dark:border-none dark:bg-zinc-800 bg-[#96C9F480] font-bold flex justify-center items-center rounded-tr-lg border-y border-r border-[#5982f180]">
              <h1>Active</h1>
            </div>
          </div>
          {currentItems && currentItems.length > 0 ? (
            currentItems.map((item, index) => (
              <div key={index} className="grid grid-cols-11">
                <div className="dark:border-none dark:p-3 text-sm p-2 flex justify-center items-center border-b border-x border-[#5982f180]">
                  <h1>{id(index)}</h1>
                </div>
                <div className="dark:border-none dark:p-3 text-sm p-2 flex justify-center col-span-2 items-center border-r border-b border-[#5982f180]">
                  <h1>{item.name}</h1>
                </div>
                <div className="dark:border-none dark:p-3 text-sm p-2 flex justify-center col-span-2 items-center border-r border-b border-[#5982f180]">
                  <h1>{item.phone}</h1>
                </div>
                <div className="dark:border-none dark:p-3 text-sm p-2 flex justify-center col-span-3 items-center border-r border-b border-[#5982f180]">
                  <h1>{item.email}</h1>
                </div>
                <div className="dark:border-none dark:p-3 text-sm p-2 flex justify-center col-span-2 items-center border-r border-b border-[#5982f180]">
                  <h1>{item.location}</h1>
                </div>
                <div className="dark:border-none dark:p-3 text-sm p-2 flex justify-center items-center  border-b border-r border-[#5982f180]">
                  <Switch
                    isActive={item.active}
                    onToggle={() => handleSwitchActive(index)}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center min-h-96">
              <Loading filteredData={filteredData} />
            </div>
          )}
        </div>
        <div className="dark:my-5">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondScreen;
