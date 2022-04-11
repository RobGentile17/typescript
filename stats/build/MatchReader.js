"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
const CsvFileReader_1 = require("./CsvFileReader");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    static fromCsv(filename) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(filename));
    }
    load() {
        this.reader.read(); // this will tell the csv file reader to go get the csv file, parse the info, and produce the 2 dimensional array of strings
        this.matches = this.reader.data.map((row) => {
            // by adding MatchData it now knows what type each row will be in the array
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                // This is a type assertion, it overrides typescripts behavior.
                // we are overridding it by saying row[5] is part of MatchResult
                row[6],
            ];
        });
    }
}
exports.MatchReader = MatchReader;
