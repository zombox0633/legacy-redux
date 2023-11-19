import { CounterActionType } from "./testState.type";

// state เริ่มต้นของ reducer
const initialState = {
  count: 0,
};

//                       รับ state ที่ต้องการ     ถ้าเป็น typescript ต้องกำหนด type ด้วย
const counterReducer = (state = initialState, action: CounterActionType) => {
  //กำหนดการกระทำการของ state
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state
  }
};

export default counterReducer;
