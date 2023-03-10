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
const fs_1 = __importDefault(require("fs"));
const supertest_1 = __importDefault(require("supertest"));
const main_1 = __importDefault(require("../main"));
const sharp_1 = __importDefault(require("../routes/utility/sharp"));
const request = (0, supertest_1.default)(main_1.default);
describe('Test endpoint responses', () => {
    it('gets the api endpoint and status code to be 200', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images?filename=lion&width=500&height=500');
        expect(response.status).toBe(200);
    }));
});
describe('Test endpoint is connnected', () => {
    it('gets the server is connected', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/');
        expect(response.status).toBe(200);
    }));
});
describe('testing the sharp method', () => {
    it('should return the resized image', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, sharp_1.default)('lion', 200, 200);
        fs_1.default.existsSync(`assets/thumb/lion-200-200_thumb.jpg`);
    }));
});
