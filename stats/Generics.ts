class HoldAnything<TypeOfData> {
  // <> basically a way to add an argument
  data: TypeOfData
}

const holdNumber = new HoldAnything<number>() //<number> give a copy of anything that works with number: basically an argument
holdNumber.data = 123

const holdString = new HoldAnything<string>()
holdString.data = "any string"
