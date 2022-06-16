import Link from "next/link";
import React from "react";
import { useUserData } from "../features/user/hooks/useUserData";

const ProfilePage = () => {
  const { data: userData } = useUserData(1);

  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Profile Page</h1>

      {userData && (
        <h2>
          Welcome {userData.firstName} {userData.lastName}
        </h2>
      )}
    </div>
  );
};

export default ProfilePage;
