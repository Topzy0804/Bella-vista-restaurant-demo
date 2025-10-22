import { Client, Account, ID, TablesDB, Query } from "appwrite";

export const client = new Client();
export const tablesDB = new TablesDB(client);
export const query = Query;

client
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)



export const account = new Account(client);
export const id = ID;




