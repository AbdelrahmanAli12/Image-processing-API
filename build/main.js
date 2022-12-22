"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./routes/api"));
const app = (0, express_1.default)();
const port = 3030;
app.listen(port, () => {
    console.log(`server listening on ${port}`);
});
app.get('/', (req, res) => {
    res.json('The server is connected');
});
app.use('/api', api_1.default);
exports.default = app;
