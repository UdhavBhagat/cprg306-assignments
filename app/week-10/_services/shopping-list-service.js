import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    const items = [];
    const docRef = collection(db, "users", userId, "items");
    const docSnap = await  getDocs(docRef);
        docSnap.forEach(doc => 
            items.push(doc)
        )
    return items;
}

export async function addItem(userId, item) {
    const docRef = collection(db, "users", userId, "items");
    const docSnap = await addDoc(docRef, item);

    return docSnap.id;
    
}