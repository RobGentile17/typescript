import { Sorter } from "./sorter"
import { LinkedList } from "./LinkedList"
import { NumbersCollection } from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection"

const charactersCollection = new CharactersCollection("Xaayb")
charactersCollection.sort()
console.log(charactersCollection.data)

const numbersCollection = new NumbersCollection([-6, 20, 3000, -15])
numbersCollection.sort()
console.log(numbersCollection.data)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)

linkedList.sort()
linkedList.print()
