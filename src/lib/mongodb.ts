import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// MONGODB_URI가 없으면 null (클릭 수 기능만 비활성화되고 페이지는 정상 동작)
export function getClient(): Promise<MongoClient> | null {
  if (!uri) return null;
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(uri).connect();
  }
  return global._mongoClientPromise;
}

export async function getClicksCollection() {
  const client = await getClient();
  if (!client) return null;
  return client
    .db(process.env.MONGODB_DB || "linknamu")
    .collection<{ _id: string; count: number }>("clicks");
}

export async function getClickCounts(): Promise<Record<string, number>> {
  try {
    const col = await getClicksCollection();
    if (!col) return {};
    const docs = await col.find().toArray();
    return Object.fromEntries(docs.map((d) => [d._id, d.count]));
  } catch (e) {
    console.error("클릭 수 조회 실패", e);
    return {};
  }
}
