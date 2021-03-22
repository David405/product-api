import express from 'express';
import * as router from '../routers/product.router';

const app = express();

export const productRoutes = () => {
    app.get('/products', router.getProductList);
    app.post('/products', router.createProduct);
    app.put('/updateproduct', router.updateProduct);
    app.delete('/deleteproduct', router.deleteProduct);
}