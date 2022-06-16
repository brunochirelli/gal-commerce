import "express-async-errors";
import { PrismaClient } from "@prisma/client";
import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import helmet from "helmet";

import limiter from "./middlewares/rateLimiter";
import requestSlower from "./middlewares/requestSlower";
import { appRouter } from "./routes";

const prisma = new PrismaClient();

const app = express();

const PORT = process.env.PORT || 4004;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(limiter);
app.use(requestSlower);

app.use("/api", appRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send(`Internal server error ${req.url}`);
  next();
});

app.listen(4004, () =>
  console.log(`\n✌ Listening on http://localhost:${PORT}\n`)
);
