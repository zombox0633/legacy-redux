### Redux

ถูกใช้ในการสร้าง Single Page Applications (SPAs) ที่มี state ที่ซับซ้อน, เช่น แอปพลิเคชั่นที่มีการแบ่งปัน state ระหว่างหลาย components หรือต้องมีการจัดการ state ที่เป็น asynchronous.

## install
ลง npm install redux react-redux
และลง npm install redux-thunk

1.สร้าง reducer และ action ของสิ่งที่ต้องการจะเก็บหรือใช้งานกับ Redux
ตาม testState.reducer กับ testState.action

2. สร้าง rootReducer สำหรับการจัดการ State แบบ Modular และกำหรับ rootType ให้ใช้งานกับ useSelector ใช้ในส่วนการใช้งาน

3. สร้าง store

4. สร้าง Provider ใน main.tsx สำหรับใช้งาน redux

5. การใช้งาน testState ตาม usetestState

## สรุปถ้าใช้งานเก็บค่าหรือใช้งานแบบง่ายๆไม่จำเป็นที่ใช้งาน redux-thunk



## Redux Thunk
เป็น middleware Redux ในการจัดการกับ side effects(*) ในแอปพลิเคชั่น เช่น การดึงข้อมูลจาก API หรือการทำงานแบบ asynchronous. ใน Redux, actions ปกติจะเป็น objects ที่มี type และอาจมี payload(*)

# side effects
ผลกระทบที่เกิดขึ้นภายนอกการทำงานปกติของฟังก์ชันหรือการคำนวณที่ไม่เกี่ยวข้องโดยตรงกับการคืนค่าของฟังก์ชันนั้นๆ ในการเขียนโปรแกรมแบบ functional, ฟังก์ชันที่ "pure" คือฟังก์ชันที่ไม่มี side effects ซึ่งหมายความว่าฟังก์ชันนั้นไม่มีผลกระทบหรือการเปลี่ยนแปลงใดๆ ต่อสภาพแวดล้อมภายนอก

# payload
หมายถึงข้อมูลที่ถูกส่งผ่านภายใน action ไปยัง store หรือ reducer. มันเป็นส่วนหนึ่งของ object action และมักใช้ในการส่งข้อมูลที่ต้องการปรับเปลี่ยนสถานะของแอปพลิเคชั่น