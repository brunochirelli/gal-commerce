import { PrismaClient } from "@prisma/client";
import e, { Request, Response } from "express";
import { z, ZodError } from "zod";

import { UserLoginBody, UserRegisterBody } from "../types/userTypes";

const prisma = new PrismaClient();

const UserLogin = z
  .object({
    email: z.string().email(),
    password: z.string(),
  })
  .strict();

const UserRegister = z.object({
  email: z.string().email(),
  password: z.string(),
  firstName: z.string(),
  lastName: z.string(),
});

export const userController = {
  login: async (req: Request, res: Response) => {
    const body: UserLoginBody = req.body;

    try {
      UserLogin.parse(body);

      const user = await prisma.user.findFirst({
        where: {
          email: body.email,
          password: body.password,
        },
      });

      if (!user) {
        return res.status(401).json({
          error: "Invalid credentials",
        });
      }

      return res.json(user);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ error: error.flatten() });
      }

      res.status(500).json({ error: "Internal server error" });

      throw new Error(`
      Falha ao logar usuário 
      ${JSON.stringify(error)}
      `);
    }
  },
  register: async (req: Request, res: Response) => {
    const body: UserRegisterBody = req.body;

    try {
      UserRegister.parse(body);

      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
          firstName: body.firstName,
          lastName: body.lastName,
        },
      });

      return res.json(user);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ error: error.flatten() });
      }

      res.status(500).send(error);

      throw new Error(`
      Falha ao registrar usuário 
      ${JSON.stringify(error)}
      `);
    }
  },
  recoverPassword: async (req: Request, res: Response) => {
    try {
      return res.send(`recover password user ${req.body}`);
    } catch (error) {
      res.status(500).send(error);
      throw new Error(`
      Falha ao recuperar senha
      ${JSON.stringify(error)}
      `);
    }
  },
  getUserData: async (req: Request, res: Response) => {
    const bearerToken = req.headers["authorization"];
    const params = req.params;
    const query = req.query;

    try {
      const user = await prisma.user.findFirst({
        where: {
          id: 1,
        },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          cartId: true,
        },
      });

      if (!user) {
        return res.status(404).json({
          error: "User not found",
        });
      }

      return res.json(user);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ error: error.flatten() });
      }

      res.status(500).send(error);

      throw new Error(`
      Falha ao retornar os dados do usuário 
      ${JSON.stringify(error)}
      `);
    }
  },
};
