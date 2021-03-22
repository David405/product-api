import * as ProductService from '../service/product.service';
import { Product } from '../interface/product.interface';

export const getProductList = async (req:any, res:any) => {
    const productList: Product[] = await ProductService.getAllProducts();
    console.log(`in get ${JSON.stringify(productList)}`)
    try {
        res.status(200).send({
            success: true,
            message: productList
        });
    } catch(e) {
        res.status(400).send({
            success: false,
            message: e.message
        })
    }
}

export const createProduct = async (req:any, res:any) => {
    const product: Product = req.body;
    await ProductService.createProducts(product);

    try {
        res.status(200).send({
            success: true,
            message: "successfully added",
            data: product
        })
    } catch(e) {
        res.status(400).send({
            success: false,
            message: e.message
        })
    }
}

export const updateProduct = async (req:any, res:any) => {
    const product: Product =req.body;
    await ProductService.updateProducts(product);
    try {
        res.status(200).send({
            success: true,
            message: "successfully added",
            data: product
        })
    } catch(e) {
        res.status(400).send({
            success: false,
            message: e.message
        })
    }
}

export const deleteProduct = async (req:any, res:any) => {
    const productID: number = req.body['id'];
    await ProductService.deleteProducts(productID);
    try {
        res.status(200).send({
            success: true,
            message: "successfully deleted",
            data: productID
        })
    } catch(e) {
        res.status(400).send({
            success: false,
            message: e.message
        })
    }
}