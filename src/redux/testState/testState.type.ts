export type CounterAction = {
  type: "INCREMENT" | "DECREMENT";
  payload: number;
};