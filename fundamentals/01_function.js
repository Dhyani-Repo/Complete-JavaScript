// how to create a function

// way - 1 (function as a Statement)

// hoisting at the top of the scope
// hoidting basically means the function can accessed before initialization
            console.log(Function1("Jatin"))
            console.log(Function1(20))

            function Function1( para1){
                let types = typeof para1;
                if(types==String){
                    return "Its a String : "+para1
                }else{
                    return "Its a Number : "+para1
                }
            }



// way -2 function as a expression

//  no top of the scope or execution context wheather it is being declared with let/var/const

            // var function2 = function(para2){
            //     console.log(para2)
            //     console.log("Working")
            // }

            // function2(20)        


// way -2 variation 1
// immediately invoked function

// this code won't work
            // (function add(num1, num2) {
            //     let sum = num1 + num2;
            //     console.log(sum); // 17
            // }(8, 10))

// neigther this one
            // (function() {
            //     console.log("Hello, IIFE!");
            // }());

//this will work
// but we can not access just while diclatetion. It is called IIFE
            let working = function(num1,num2){
                console.log(num1+num2)
            }(8,9);




// way - 3 Arrow Function
            let x = () => {
                console.log("Workign")
            };

            x();

