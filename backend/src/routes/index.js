const fs = require('fs');
const router = require('express').Router();

// mapping routes inside this routes folder
const routest = [];
fs.readdirSync(__dirname).forEach((file) => {
    if (file === 'index.js') return;
    const name = file.substr(0, file.indexOf('.'));
    routest.push({
        name,
        route : `/api/${name}`,
    });
});

// mapping routes to express router
routest.forEach((route) => {
    router.use(route.route, require(`./${route.name}`));
});


router.get('*', (req, res) => {
    const query = req.query;
    const path = req.path;
    res.status(404).json({
        status : 404,
        path,
        query,
        message: `404 - Not Found`,
    });
});

console.log("Available routes: ")
console.table(routest);



module.exports = router;