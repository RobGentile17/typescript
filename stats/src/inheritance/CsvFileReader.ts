import fs from "fs"

export abstract class CsvFileReader<TypeOfData> {
  data: TypeOfData[] = [] // we now have an array of tuples so the data is MatchData[]

  constructor(public filename: string) {}
  abstract mapRow(row: string[]): TypeOfData // abstract on a method means that it will be implemented by a child class

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8", // This flag returns a string from readFileSync so we can read the data
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",")
      })
      .map(this.mapRow) // this now gives the mapRow method reusability
  }
}
