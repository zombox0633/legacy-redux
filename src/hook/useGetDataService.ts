import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { fetchDataService } from "../redux/getdataService/getDataService.action";

import { AppDispatch } from "../redux/store";

function useGetDataService() {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.dataService);

  // const [dataService, setDataService] = useState<DataServiceType[] | null>(
  //   null
  // );
  // const [fetchData, setFetchData] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchDataService());
  }, [dispatch]);

  return {
    data,
  };
}

export default useGetDataService;
