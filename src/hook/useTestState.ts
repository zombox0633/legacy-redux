import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/testState/testState.action";
import { RootState } from "../redux/rootReducer";

function useTestState() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  const handleIncrement = () => {
    dispatch(increment(1));
  };

  const handleDecrement = () => {
    dispatch(decrement(1));
  };

  return { count, handleIncrement, handleDecrement };
}

export default useTestState;

// useSelector ใช้เพื่อเข้าถึง state ภายใน Redux store เพื่อนำข้อมูลมาใช้งาน
// useDispatch ใช้สำหรับส่ง (dispatch) actions ไปยัง Redux store เพื่อทำการ เปลี่ยนแปลง state ใน Redux