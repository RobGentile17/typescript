import fs from "fs"

export class CsvFileReader {
  data: string[][] = [] // we now have an array of tuples so the data is MatchData[]

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8", // This flag returns a string from readFileSync so we can read the data
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",")
      })
  }
}
