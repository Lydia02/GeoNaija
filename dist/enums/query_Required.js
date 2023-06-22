"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidQueryError = void 0;
var InvalidQueryError;
(function (InvalidQueryError) {
    InvalidQueryError["REGION_ERROR"] = "region_name field is required";
    InvalidQueryError["STATE_ERROR"] = "state_name field is required";
    InvalidQueryError["LGA_ERROR"] = "lga_name field is required";
})(InvalidQueryError || (exports.InvalidQueryError = InvalidQueryError = {}));
