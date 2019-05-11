//function
const amountAfterTaxes = (amount, fedTax=2.51, stateTax=0.5, localTax=0.13 ) =>{
    return amount + fedTax + stateTax +  localTax
}


//tests
const amount=25.12
const fedTax=10;
const stateTax=2
const localTax=0.5
//
amountAfterTaxes(amount) //25.12

//console.log(amountAfterTaxes(amount, fedTax)) //27.63
//console.log(amountAfterTaxes(amount, fedTax, stateTax)) //28.13
//console.log(amountAfterTaxes(amount, fedTax, stateTax, localTax)) //28.26
