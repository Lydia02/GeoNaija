"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequiredFields = void 0;
function validateRequiredFields(fields) {
    return function (req, res, next) {
        var missingFields = fields.filter(function (field) { return !(field in req.body); });
        if (missingFields.length > 0) {
            res.status(400).json({
                error: "Missing required fields: ".concat(missingFields.join(', ')),
            });
        }
        else {
            next();
        }
    };
}
exports.validateRequiredFields = validateRequiredFields;
