"use strict";
exports.__esModule = true;
exports.productsRouter = void 0;
var express_1 = require("express");
var productController_1 = require("../controllers/productController");
var router = (0, express_1.Router)();
exports.productsRouter = router;
var base = "products";
router.route("/".concat(base, "/")).get(productController_1.productController.getAllProducts);
router
    .route("/".concat(base, "/:departmentId"))
    .get(productController_1.productController.getProductsByDepartment);
//# sourceMappingURL=productsRouter.js.map