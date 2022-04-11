import { CsvFileReader } from "./CsvFileReader"
import { dateStringToDate } from "./utils"
import { MatchResult } from "./MatchResult"

type MatchData = [Date, string, string, number, number, MatchResult, string]
//This is a tuple that gives the data a structure

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      // This is a type assertion, it overrides typescripts behavior.
      // we are overridding it by saying row[5] is part of MatchResult
      row[6],
    ]
  }
}
