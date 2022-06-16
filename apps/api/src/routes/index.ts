import express from "express";
import { cartRouter } from "./cartRouter";
import { productsRouter } from "./productsRouter";
import { userRouter } from "./userRouter";

const app = express();

app.use("/products", productsRouter);
app.use("/cart", cartRouter);
app.use("/users", userRouter);

export { app as appRouter };
