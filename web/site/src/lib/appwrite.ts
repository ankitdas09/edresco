import { Client, Account, Databases } from "appwrite";

export const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export { ID } from "appwrite";

const databases = new Databases(client);
const databaseId = import.meta.env.VITE_APPWRITE_DB_ID;
const collectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
export { databases, databaseId, collectionId };
