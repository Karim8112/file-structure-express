import DeleteProduct from "../controllers/products/DELETE.js";
import express from "express";
import GetAllProducts from "../controllers/products/GET_ALL.js";
import GetProductById from "../controllers/products/GET.js";
import patchProduct from "../controllers/products/PATCH.js";
import PostProduct from "../controllers/products/POST.js";

const router = express.Router();
// -----------middlewares----------
// router.param('id', checkId)
// router.use() // you still can use specific middlewares for specific routes

// tours:id
router
  .route(`/tours/:id`)
  .delete(DeleteProduct)
  .get(GetProductById)
  .patch(patchProduct);
// tours
router.route(`/tours`).get(GetAllProducts).post(PostProduct);

export default router;
