// -- Anagrams:

const list = ['baab','abbba','bbaa','abca'];

const anagrams = (word, wordsList) => {
let a= word.split('').sort().join('');
return wordsList.filter((el)=> el.split('').sort().join('')===a)
}
anagrams ('abba',list);




// -- SummOfTwoArrays:

    // Для двух массивов:

const arrayPlusArray = (array1,array2) => {
  let res = array1.concat(array2)
  return res.reduce ((previousValue,currentItem)=>previousValue+currentItem,0)
}
    // Для множества массивов:

const arrayPlusArray = (...array) => {
  let res = array.flat()
  return res.reduce ((previousValue,currentItem)=>previousValue+currentItem)
}




// -- extendArray:

Array.prototype.square= function (){return this.map((e)=>e**2)
  }
  Array.prototype.sum= function (array){return this.reduce ((prev,cur)=>prev+cur,0)
  }
  Array.prototype.even= function (){return this.filter((el)=>el%2===0)
  }
  Array.prototype.odd= function (){return this.filter((el)=>el%2===1)
  }

//   или
  
class Method extends Array {
    square(){return this.map((e)=>e**2)
    }
    sum(){return this.reduce ((prev,cur)=>prev+cur,0)
    }
    even(){return this.filter((el)=>el%2===0)
    }
    odd(){return this.filter((el)=>el%2===1)
    }
    }
