export type DataServiceType = {
  id: string;
  message: string;
  timestamp: string;
};

export type GetDataServiceReturnType = DataServiceType[];


// typeof ใช้เพื่อตรวจสอบ type พื้นฐานของตัวแปร
// instanceof ใช้ตรวจสอบว่า object นั้นเป็น instance ของ class หรือ constructor function
