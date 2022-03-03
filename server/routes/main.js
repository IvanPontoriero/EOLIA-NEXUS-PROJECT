const { Router } = require('express')
const App = require('../../client/src/App')
const router = Router();

router.get('/', (req, res) => {
    res.render(App);
});

module.exports = router;