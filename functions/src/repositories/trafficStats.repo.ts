import { CollectionReference } from 'firebase-admin/firestore';

export interface TrafficStatInput {
  date: string;
  visits: number;
}

export interface TrafficStat extends TrafficStatInput {
  id: string;
}

export interface TrafficStatRepo {
  getAll: () => Promise<TrafficStat[]>;
  add: (data: TrafficStatInput) => Promise<string>;
  update: (id: string, data: TrafficStatInput) => Promise<void>;
  remove: (id: string) => Promise<void>;
}

export const createFirestoreTrafficStatRepo = (
  collection: CollectionReference
): TrafficStatRepo => ({
  getAll: async () => {
    console.log('Fetching all traffic stats...');
    const snapshot = await collection.orderBy('date').get();
    console.log('docs count:', snapshot.docs.length);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as TrafficStatInput),
    }));
  },

  add: async (data) => {
    const ref = await collection.add(data);
    return ref.id;
  },

  update: async (id, data) => {
    await collection.doc(id).update({ ...data });
  },

  remove: async (id) => {
    await collection.doc(id).delete();
  },
});
