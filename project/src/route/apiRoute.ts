import ProductController from "@/controller/Product.controller";
import {Router} from "express";
const apiRoute = Router();

apiRoute.get('/product',ProductController.findAll)
apiRoute.get('/product/id?:idProduct',ProductController.findOne)
apiRoute.get('/product/filterOne',ProductController.findOne)
apiRoute.get('/product/filter',ProductController.findMany)
apiRoute.put('/product/:id',ProductController.update)
apiRoute.delete('/product/:id',ProductController.delete)
apiRoute.post('/product',ProductController.create)

export default apiRoute;
