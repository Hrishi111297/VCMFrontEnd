// // UserContext.js
// import React, { createContext, useState, useContext } from "react";

// // Create a Context for User
// const UserContext = createContext();

// export const useUser = () => {
//   return useContext(UserContext);
// };

// export const UserProvider = ({ children }) => {
//   const [role, setRole] = useState("student"); // Default role is student, it can be "admin", "teacher", etc.

  
//   const setUserRole = (newRole) => setRole(newRole);

//   return (
//     <UserContext.Provider value={{ role, setUserRole }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
