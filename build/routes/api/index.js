"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("sharp"));
const api = express_1.default.Router();
api.get('/test', (req, res) => {
    res.json('The api route is connected');
});
api.get('/images', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filename = req.query.filename;
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    if (filename == null || width == null || height == null) {
        res.status(400).json({ message: 'inputs required' });
    }
    else if (width <= 0 || height <= 0) {
        res
            .status(400)
            .json({ message: 'width and height must be greater than 0' });
    }
    else if (isNaN(width) || isNaN(height)) {
        res.status(400).json({ message: 'width and height must be a number' });
    }
    else {
        try {
            yield (0, sharp_1.default)(`assets/full/${filename}.jpg`)
                .resize(width, height, {
                fit: 'contain',
            })
                .toFile(`assets/thumb/${filename}_thumb.jpg`);
        }
        catch (error) {
            res.status(404).json('Photo not found');
        }
        res.sendFile(`thumb/${filename}_thumb.jpg`, { root: './assets' });
    }
}));
exports.default = api;
