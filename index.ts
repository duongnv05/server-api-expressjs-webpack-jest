import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import * as createError from 'http-errors';

import controllers from './controllers';

let app = express.default();

const {
    PORT = 4500
} = process.env;

app.use(controllers);

app.use((req: Request, res: Response, next: NextFunction) => {
    next(createError.default(createError));
});

if(require.main === module) {
    app.listen(PORT, () => {
        console.log('server started at http://localhost:' + PORT);
    })
}

export default app;