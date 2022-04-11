import { dateStringToDate } from "./utils"
import { MatchResult } from "./MatchResult"
import { MatchData } from "./MatchData"
import { CsvFileReader } from "./CsvFileReader"

interface DataReader {
  read(): void
  data: string[][]
}

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename))
  }

  matches: MatchData[] = []

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read() // this will tell the csv file reader to go get the csv file, parse the info, and produce the 2 dimensional array of strings
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      // by adding MatchData it now knows what type each row will be in the array
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
    })
  }
}
