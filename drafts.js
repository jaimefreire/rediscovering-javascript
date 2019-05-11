const fun = function(amount, var2=20,  fun= (x,y) => x*y+amount, var1=10){
    return fun(var1, var2) + amount;
}

const l = [1,2,4];
l.map(l=> l*2)
//
console.log(l)
console.log(fun(1))
//
console.log(fun(1, 2 ,(x,y) => x**y))

const computeTax = (amount, stateTax=15,localTax = stateTax * 0.10)=>{
    return "stateTax: " + stateTax + " localTax: " + localTax
}

const testObj={a="1", b="2"}

const nastyTest = (x, y, ...moreValues) => {
return x + y + " Length: " + moreValues.length
}

computeTax(100)

computeTax(100,10,2)

computeTax(100,10)

nastyTest(1)

nastyTest(1,19)

nastyTest(1,"2")

nastyTest(1,2,[])
