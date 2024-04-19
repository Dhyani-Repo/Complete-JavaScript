// for in loop typically used to iterate over an object via a key

const object1 = {Apple:4,Grapes:0,Popaya:Infinity}
for(let key in object1){
    console.log(`${key} having no of seeds are ${object1[key]} `)
}
