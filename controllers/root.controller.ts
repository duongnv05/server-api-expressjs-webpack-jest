import * as express from 'express';
import * as core from "express-serve-static-core";

let router = express.Router();

class RootController {
    protected router: core.Router;

    constructor() {
        this.router = router;
    }
}

export default RootController;