import { MatchReader } from "./MatchReader"
import { Summary } from "./Summary"

// Create an instance of MatchReader and pass in something to satisfy the 'DataReader' interface
const matchReader = MatchReader.fromCsv("football.csv")
matchReader.load() // now we can access matchReader.matches

// const dateOfFirstMatch = reader.data[0][0] //grabbing the first match and the first date
// // enum - enumeration: an object that stores closely related values of either numbers or strings
// // This also makes MatchResult a Type

// const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport())
const summary = Summary.winsAnalysisWithHtmlReport("Man United")

summary.buildAndPrintReport(matchReader.matches)
