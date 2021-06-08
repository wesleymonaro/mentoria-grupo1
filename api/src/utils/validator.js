const { validationResult } = require('express-validator');

const validator = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() });
    }
}

module.exports = validator;