"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueId = void 0;
var idCounter = 0;
function uniqueId(prefix) {
    return "".concat(prefix).concat(idCounter++);
}
exports.uniqueId = uniqueId;
