import { tablesDB } from "../lib/appwrite";
import { ID } from "appwrite";

export const createRows = async (tableId, data) => {
  const response = await tablesDB.createRow({
    databaseId: import.meta.env.VITE_DB_ID,
    tableId: tableId,
    rowId: ID.unique(),
    data: data,
  });
  return response;
};

export const getRows = async (tableId) => {
  const response = await tablesDB.listRows({
    databaseId: import.meta.env.VITE_DB_ID,
    tableId: tableId,
  });

  return response;
};