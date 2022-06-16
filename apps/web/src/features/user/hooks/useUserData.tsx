import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { userService } from "../services/userService";
import { setUser } from "../store/userSlice";

export const useUserData = (id: number) => {
  const dispatch = useDispatch();
  const fetchUserData = async () => await userService.getUserData(id);

  const query = useQuery(["user"], fetchUserData, {
    staleTime: Infinity,
    keepPreviousData: true,
  });

  useEffect(() => {
    if (query.data) {
      dispatch(setUser(query.data));
    }
  }, [dispatch, query.data]);

  return query;
};
