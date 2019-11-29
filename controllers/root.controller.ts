import * as express from 'express';
import * as core from "express-serve-static-core";

let router = express.Router();

class RootController {
    public router: core.Router;

    constructor() {
        this.router = router;
    }
}

export default RootController;