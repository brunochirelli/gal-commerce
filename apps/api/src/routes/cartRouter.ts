import { Router } from "express";
import { productController } from "../controllers/productController";

const router = Router();

router.route(`/:cartId`).get(productController.getProductsByDepartment);

export { router as cartRouter };
