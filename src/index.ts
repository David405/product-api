import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import helmet from 'helmet';

import * as productCRUD from './routers/product.router';

dotenv.config();

if(!process.env.PORT) {
    console.log('Error getting ports');
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
console.log(PORT);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
//app.use(productRoutes)
app.get('/products', productCRUD.getProductList);
app.post('/products',productCRUD.createProduct);
app.post('/updateproduct',productCRUD.updateProduct);
app.post('/deleteproduct',productCRUD.deleteProduct);

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to Typescript Todo!');
})