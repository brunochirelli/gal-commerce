import { User } from "types/userTypes";

export const userService = {
  getUserData: async (id: number): Promise<User> => {
    const response = await fetch(`http://localhost:4004/api/users/${id}`);
    return response.json();
  },
};
