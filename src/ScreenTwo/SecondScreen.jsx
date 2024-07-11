import TextField from "../CommonComponents/TextField";
import Text from "../CommonComponents/Text";
import Pagination from "../CommonComponents/Pagination";
import Dropdown from "../CommonComponents/DropDown";
import Switch from "../CommonComponents/Switch";
import Loading from "../CommonComponents/Loading";
import useFetch from "../CustomHook/useFetch";

const SecondScreen = () => {
  const {
    setCurrentPage,
    filteredData,
    searchText,
    setSearchText,
    isSwitchActive,
    setIsSwitchActive,
    selectedOptions,
    setSelectedOptions,
    currentPage,
    setFilteredData,
    tableData,
  } = useFetch("https://dev.carzup.in/api/pricelist/test-mock");

  const itemsPerPage = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
          className={"text-2xl p-2 text-black dark:text-primary font-semibold"}
        >
          Table
        </Text>
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
              "dark:border-none dark:hover:bg-zinc dark:bg-zinc dark:text-primary"
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
        <div className="p-2 my-5 min-h-[450px] dark:text-primary">
          <div className="grid grid-cols-11">
            <div className="p-2 dark:border-none dark:bg-zinc bg-dark_header font-bold flex justify-center items-center rounded-tl-lg border border-[#5982f180]">
              <h1>id</h1>
            </div>
            <div className="p-2 dark:border-none dark:bg-zinc bg-dark_header col-span-2 font-bold flex justify-center items-center border-r border-y border-[#5982f180]">
              <h1>Name</h1>
            </div>
            <div className="p-2 dark:border-none dark:bg-zinc bg-dark_header col-span-2 font-bold flex justify-center items-center border-r border-y border-[#5982f180]">
              <h1>Phone</h1>
            </div>
            <div className="p-2 dark:border-none dark:bg-zinc bg-dark_header col-span-3 font-bold flex justify-center items-center border-r border-y border-[#5982f180]">
              <h1>Email</h1>
            </div>
            <div className="p-2 dark:border-none dark:bg-zinc bg-dark_header col-span-2 font-bold flex justify-center items-center border-r border-y border-[#5982f180]">
              <h1>Location</h1>
            </div>
            <div className="p-2 dark:border-none dark:bg-zinc bg-dark_header font-bold flex justify-center items-center rounded-tr-lg border-y border-r border-[#5982f180]">
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
                  <Switch isActive={item.active} />
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
