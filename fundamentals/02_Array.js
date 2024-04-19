// how to create an array   ?

// all the value inside this array are string but not char. there is no character concept in javascript
// const array2 = ['a',"b","c",'d'];

// all the values are number
// const array2 = [1,2,3,4,7];

// for(let j = 0 ; j < array2.length ; j++){
//     console.log(`${array2[j]}`)
// }



// all the values are mix in this array of array
                const array3 = [
                    [1,2,3,4],
                    ['a','b','c'],
                    ["a",1,"b",2]
                ]
// fetching via for loop
                // for(let i=0 ; i < array3.length ; i++){
                //     for(let j=0 ; j < array3[i].length ; j++){
                //         console.log(`This is ${i} index of root array3 and this is ${j} index array of array`)
                //     }
                // }
                
                
// fetching via for-in loop
                for(let key in array3){
                    console.log(`this is index ${key} and this is object ${array3[key]}`)
                    for( let value in array3[key]){
                        console.log(`This is ${value} index of child array and this is ${array3[key][value]} value at that index`)
                    }
                }


