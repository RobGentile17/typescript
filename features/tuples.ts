const drinks = {
  color: "brown",
  carbonated: true,
  sugar: 40
}
type Drink = [ string, boolean, number ]
// drink is now an alias and can be used below.
// now drink can be used in any example to display a Tuble with a specific structure

const pepsi: Drink = [ "brown", true, 40 ]
// this annotation ensures there is always a specific order that is needed

// This is an example of why Tuples aren't useful for the most part
const carSpecs: [ number, number ] = [ 400, 3354 ]
// There is no real indicator of what 400 and 3354 really are

// THIS is prefered 
const carStats = {
  horsepower: 400,
  weight: 3354
}