import { useState, useEffect } from "react";
import { fetchDataUrl } from "../dataList";

const useFetchData = () => {
  let [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(fetchDataUrl);
    const json = await response.json();
    const daata =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setData(daata);
    //   console.log(restList)
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return data;
};
export default useFetchData;
