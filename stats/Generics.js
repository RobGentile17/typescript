"use strict";
class HoldAnything {
}
const holdNumber = new HoldAnything(); //<number> give a copy of anything that works with number: basically an argument
holdNumber.data = 123;
const holdString = new HoldAnything();
holdString.data = "any string";
