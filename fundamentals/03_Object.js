// How to create an object

            const object1 = {
                dev : "Dhyani",
                keshav : "Kumar",
                Shahid : "MD.",
                Aniket : "Kumar"
            }


// how to fetch values of the object

            for(let i = 0 ; i  < Object.keys(object1).length ; i++){
                console.log(`Helo, this is ${Object.keys(object1)[i]} ${Object.values(object1)[i]}`)
            }

            console.log("\n----------------------------\n")

            for(let i = 0 ; i  < Object.keys(object1).length ; i++){
                console.log(`Helo, this is  ${Object.keys(object1)} ${Object.values(object1)}`)
            }

            console.log(object1["keshav"])