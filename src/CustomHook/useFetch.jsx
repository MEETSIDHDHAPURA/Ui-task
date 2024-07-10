import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const useFetch = (url) => {
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isSwitchActive, setIsSwitchActive] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const debouncedSearchText = useDebounce(searchText, 300);

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
      console.error("Error fetching data", error);
    }
  };

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
