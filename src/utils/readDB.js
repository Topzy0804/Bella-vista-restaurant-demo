import { tablesDB, query } from "../lib/appwrite";
import { ID } from "appwrite";

export const readDB = async (query, tableId) => {
  const response = await tablesDB.listRows({
    databaseId: import.meta.env.VITE_DB_ID,
    tableId: tableId,
    queries: [query],
  });

  return response;
};

