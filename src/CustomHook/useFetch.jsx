import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const useFetch = (url) => {
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isSwitchActive, setIsSwitchActive] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // debouncedSearchText is use to cancel the other api calles
  const debouncedSearchText = useDebounce(searchText, 300);

  // getData is a function to fetch the data from server
  const getData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error while fetching data");
      }
      const data = await response.json();
      setTableData(data.data);
      setFilteredData(data.data);
    } catch (error) {
      console.error("Error While fetching data", error);
    }
  };

  // thi useEffect use for filter the data  and pagination
  useEffect(() => {
    const filterData = () => {
      let filtered = tableData.filter((item) =>
        item.name.toLowerCase().includes(debouncedSearchText.toLowerCase())
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
  }, [debouncedSearchText, selectedOptions, tableData, isSwitchActive]);

  // this useEffect is use to initialize data and it's depend on search dropdown and Switch
  useEffect(() => {
    getData();
  }, [debouncedSearchText, selectedOptions, isSwitchActive]);

  return {
    setCurrentPage,
    filteredData,
    searchText,
    setSearchText,
    isSwitchActive,
    setIsSwitchActive,
    selectedOptions,
    setSelectedOptions,
    currentPage,
    tableData,
    setFilteredData,
  };
};

export default useFetch;
