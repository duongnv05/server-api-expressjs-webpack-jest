import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';

let router = express.Router();

function loadModule(_nameController: String): Promise<any> {
    return import('./' + _nameController)
}

console.log("#Initial Controlelrs");
let files = fs.readdirSync('./controllers');
files.forEach(async (file) => {
    let nameController = path.parse(file).name;
    if(nameController != "index" && nameController != "root.controller") {
        let ins = await loadModule(nameController);
        router.use(ins.default);
    }
});

export default router;