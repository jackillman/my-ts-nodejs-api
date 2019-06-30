import express  from 'express';
const router = express.Router();

import ProductsRoute  from './products';
import ProductDetailRoute  from './product-detail';

const productsRoute = new ProductsRoute();
const productDetailRoute = new ProductDetailRoute();


// middleware that is specific to this router
router.use(function timeLog(req:any, res:any, next:any) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', productsRoute.getDataFromMongo);
router.post('/',productsRoute.createProduct)
router.get('/:id', productDetailRoute.getProductFromDB);
router.put('/:id', productDetailRoute.updateProduct);
router.delete('/:id', productDetailRoute.deleteProduct);
export default router;