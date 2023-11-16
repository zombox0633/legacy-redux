import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import db from "./firebase-config";
import { DataServiceType, GetDataServiceReturnType } from "./DataService.type";

export const getDataService =
  async (): Promise<GetDataServiceReturnType | null> => {
    try {
      const dataServiceCol = collection(db, "lodolist");
      const snapShot = await getDocs(dataServiceCol);
      const data = snapShot.docs.map((doc) => ({
        ...(doc.data() as unknown as DataServiceType),
        id: doc.id,
      }));

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

export const addDataService = async (messageText: string): Promise<boolean> => {
  try {
    const dataServiceCol = collection(db, "lodolist");
    await addDoc(dataServiceCol, {
      message: messageText,
      timestamp: Timestamp.now(),
    });

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const updateDataService = async (
  id: string,
  messageText: string
): Promise<boolean> => {
  try {
    const dataServiceDoc = doc(db, "lodolist", id);
    await updateDoc(dataServiceDoc, {
      message: messageText,
      timestamp: Timestamp.now(),
    });

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const deleteDataService = async (id: string): Promise<boolean> => {
  try {
    const dataServiceDoc = doc(db, "lodolist", id);
    await deleteDoc(dataServiceDoc);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
