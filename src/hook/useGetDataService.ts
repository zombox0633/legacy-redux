import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { fetchDataService } from "../redux/getDataServic/getDataService.action";

import { AppDispatch } from "../redux/store";

function useGetDataService() {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.dataService);
  const [fetchData, setFetchData] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchDataService());
  }, [dispatch,fetchData]);

  return {
    data,
    setFetchData
  };
}

export default useGetDataService;
