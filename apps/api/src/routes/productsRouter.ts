import { Router } from "express";
import { productController } from "../controllers/productController";

const router = Router();

router.route(`/`).get(productController.getAllProducts);
router.route(`/:departmentId`).get(productController.getProductsByDepartment);

export { router as productsRouter };
