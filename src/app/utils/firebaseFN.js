
import { collection,
    CollectionReference,
    deleteDoc,
    doc,getDocs,
     getFirestore,
     orderBy, query, setDoc, updateDoc } from "firebase/firestore"
import { db } from "../firebase.config"

// saving new Item
//onceagain Date.now() will be my unique id
   //setDoc helps you to save a new value even if there already a value updates it
   //doc to create new document
   // merge is optional // if you want to merge the new value with the old one or to add new field
export const saveItem = async (item) =>{
   
   await setDoc(doc(db,'uploadedProducts',`${Date.now()}`),item, {merge:true,})
}
export const updateItem = async (item) => {
   if (item.id) { // If item already has an ID, update existing document
       
       const docRef = doc(db, 'uploadedProducts', item.id);
       console.log(docRef)
     await updateDoc(docRef, item);
   }
  
 };

export const testUpdate = (updated) => {
   db.ref(`uploadedProducts/${updated.id}`).update(updated);
}
// fetching all items
export const getAllProducts = async () =>{
   const items = await getDocs(
       query(collection(db,'uploadedProducts'), orderBy('id','desc'))
   )
   return items.docs.map((doc) => doc.data())    
}
export const deleteItem = async (id) => { 
    await deleteDoc(doc(db, 'uploadedProducts', id));
 };
