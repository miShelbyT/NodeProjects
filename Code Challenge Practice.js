function allLongestStrings(array) {
  
 let shortest = array.reduce(function(a,b){
    return a.length <= b.length ? a : b
 })
 let i
 for(i=0; i < array.length; i+1){
     if (array[i].length === shortest){
        newArray.splice(array[i]) 
     }
 }
 return array
}

allLongestStrings(["a", "bb", "ccc"])
