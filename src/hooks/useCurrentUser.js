import { useEffect, useState } from "react";
import { UserDatabase } from "../data/UserDatabase";

export const useCurrentUser = (authToken) => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const userData = UserDatabase.find((user) => user.email === authToken);
    setCurrentUser(userData);
  }, [authToken]);

  return currentUser;
};
