"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = []; // we now have an array of tuples so the data is MatchData[]
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: "utf-8", // This flag returns a string from readFileSync so we can read the data
        })
            .split("\n")
            .map((row) => {
            return row.split(",");
        })
            .map(this.mapRow); // this now gives the mapRow method reusability
    }
}
exports.CsvFileReader = CsvFileReader;
