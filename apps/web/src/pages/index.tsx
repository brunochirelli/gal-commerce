import Link from "next/link";
import { useState } from "react";
import { Button } from "ui";
import { sum } from "utils";
import { useAppDispatch, useAppSelector } from "../features/hooks/redux";
import { setUser } from "../features/user/store/userSlice";

export default function Web() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  const [a, setA] = useState("");
  const [b, setB] = useState("");

  return (
    <div>
      <h1>Web</h1>

      <input type="number" onChange={(e) => setA(e.target.value)} />
      <input type="number" onChange={(e) => setB(e.target.value)} />

      <p>Hey, tricky question</p>
      <p>
        How much is {a} + {b}?
      </p>
      <p>Maybe {sum(Number(a), Number(b))}</p>

      <Link href={"/login"}>Login</Link>

      {user && (
        <>
          <h1>Current user</h1>
          <p>{user.firstName}</p>
          <p>{user.email}</p>
        </>
      )}

      <Button
        onClick={() =>
          dispatch(setUser({ firstName: "Bruno", lastName: "Chirelli" }))
        }
      >
        Add User
      </Button>
    </div>
  );
}
