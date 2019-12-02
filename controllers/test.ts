import { Request, Response, NextFunction } from 'express';
import RootController from './root.controller';
import * as core from "express-serve-static-core";


class TestController extends RootController {
    constructor() {
        super();

        this.router.get('/', this.handleTest.bind(this));
    }

    handleTest(req: Request, res: Response): void {
        res.send({
            message: "Hello world! Nodejs with TypeScript!!"
        })
    }

    static getInstance(): core.Router {
        return new TestController().router;
    }
}

export default TestController.getInstance();