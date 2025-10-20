import { createContext, useState, useEffect } from "react";
import { account } from "../lib/appwrite";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getLoggedInUser = async () => {
      const currentUser = await account.get();
      console.log(currentUser);
      setUser(currentUser);
    };

    getLoggedInUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
