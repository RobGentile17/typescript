"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("./utils");
//This is a tuple that gives the data a structure
class MatchReader extends CsvFileReader_1.CsvFileReader {
    mapRow(row) {
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
    }
}
exports.MatchReader = MatchReader;
