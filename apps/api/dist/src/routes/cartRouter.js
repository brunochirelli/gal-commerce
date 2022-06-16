"use strict";
exports.__esModule = true;
exports.cartRouter = void 0;
var express_1 = require("express");
var productController_1 = require("../controllers/productController");
var router = (0, express_1.Router)();
exports.cartRouter = router;
var base = "cart";
router.route("/".concat(base, "/:cartId")).get(productController_1.productController.getProductsByDepartment);
//# sourceMappingURL=cartRouter.js.map