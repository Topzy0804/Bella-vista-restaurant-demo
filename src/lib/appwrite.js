import { Client, Account, ID, Databases } from "appwrite";

export const client = new Client()
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)

export const account = new Account(client);
export const id = ID;
export const databases = new Databases(client);


