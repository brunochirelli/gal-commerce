import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const productController = {
  getAllProducts: async (req: Request, res: Response) => {
    try {
      const products = await prisma.product.findMany();

      return res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  getProductsByDepartment: async (req: Request, res: Response) => {
    try {
      const { departmentId } = req.params;
      const products = await prisma.product.findMany({
        where: { departmentId: Number(departmentId) },
      });

      return res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};
