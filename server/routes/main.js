const { Router } = require('express')
const path = require('path');
const router = Router();

router.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../../client/public/index.html'));
});

module.exports = router;