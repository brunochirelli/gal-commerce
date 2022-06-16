import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const cartController = {
  createCart: async (req: Request, res: Response) => {},
  getCartById: async (req: Request, res: Response) => {
    try {
      const { cartId } = req.params;
      const cart = await prisma.cart.findUnique({
        where: {
          id: Number(cartId),
        },
      });
      res.json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};
