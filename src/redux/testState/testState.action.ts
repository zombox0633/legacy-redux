import { CounterAction } from "./testState.type";

export const increment = (amount: number): CounterAction => {
  return {
    // บอกการกระทำตามที่กำหนดใน reducer เพื่อใช้งานตามที่กำหนด
    type: "INCREMENT",

    // ข้อมูลที่ต้องการส่งไปยัง reducer เพื่อใช้ในการอัปเดต state
    payload: amount,
  };
};

export const decrement = (amount: number): CounterAction => {
  return {
    type: "DECREMENT",
    payload: amount,
  };
};
