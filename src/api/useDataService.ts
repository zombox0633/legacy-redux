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
import { FirebaseReturn } from "./serviceApi.type";
import { CheckErrorMessage } from "../service/Service";

export const getDataService =
  async (): FirebaseReturn<GetDataServiceReturnType> => {
    try {
      const dataServiceCol = collection(db, "lodolist");
      const snapShot = await getDocs(dataServiceCol);
      const data = snapShot.docs.map((doc) => ({
        ...(doc.data() as unknown as DataServiceType),
        id: doc.id,
      }));

      return [data, null];
    } catch (error) {
      const errorMessage = CheckErrorMessage(error);
      return [null, errorMessage];
    }
  };

export const addDataService = async (
  messageText: string
): FirebaseReturn<boolean> => {
  try {
    const dataServiceCol = collection(db, "lodolist");
    await addDoc(dataServiceCol, {
      message: messageText,
      timestamp: Timestamp.now(),
    });

    return [true, null];
  } catch (error) {
    console.error(error);
    const errorMessage = CheckErrorMessage(error);
    return [null, errorMessage];
  }
};

export const updateDataService = async (
  id: string,
  messageText: string
): FirebaseReturn<boolean> => {
  try {
    const dataServiceDoc = doc(db, "lodolist", id);
    await updateDoc(dataServiceDoc, {
      message: messageText,
      timestamp: Timestamp.now(),
    });

    return [true, null];
  } catch (error) {
    console.error(error);
    const errorMessage = CheckErrorMessage(error);
    return [null, errorMessage];
  }
};

export const deleteDataService = async (
  id: string
): FirebaseReturn<boolean> => {
  try {
    const dataServiceDoc = doc(db, "lodolist", id);
    await deleteDoc(dataServiceDoc);

    return [true, null];
  } catch (error) {
    console.error(error);
    const errorMessage = CheckErrorMessage(error);
    return [null, errorMessage];
  }
};
