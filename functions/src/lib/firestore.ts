import { getFirestore } from 'firebase-admin/firestore';

export const getDb = (collectionName: string) =>
  getFirestore().collection(collectionName);
