import { combineReducers } from "redux";
import counterReducer from "./testState/testState.reducer";
import getDataServiceReducer from "./getDataServic/getDataService.reducer";
import { addDataServiceReducer } from "./addDataService/addDataService.reducer";
import { deleteDataServiceReducer } from "./deleteDataService/deleteDataService.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  dataService: getDataServiceReducer,
  addDataService: addDataServiceReducer,
  deleteDataService: deleteDataServiceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

//combineReducers มีหน้าที่ในการรวมหลายๆ reducers ย่อยเข้าด้วยกันเป็น single root reducer เพื่อจัดการ state ที่มีโครงสร้างซับซ้อน
