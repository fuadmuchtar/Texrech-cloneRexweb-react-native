import { MongoClient } from "mongodb"

const MONGODB_URI = process.env.MONGODB_URI as string
const client = new MongoClient(MONGODB_URI)

export const db = client.db("p3-gc2")