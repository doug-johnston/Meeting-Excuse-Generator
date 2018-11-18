//variables for the programme
var generator, excuse, number, random, ran, comparison,push;
//generates a random number and compares it to the previous random number to prevent duplicates
ran = function(){
    random =  Math.floor(Math.random() * 11);
    if (random === number){
        ran();
    }else{
        random = random;
    }
}
//pushes the excuse to the html
push = function(){
    document.getElementById("excuse").innerHTML = excuse;
}
//takes the random number, assigns it to an excuse, pushes to the html on tht push of the button
generator = function(){
    ran();
    switch(random){
        case 0: 
            excuse = "A cat ate my socks"
            push();
            break;
        case 1: 
            excuse ="My car wouldnt start"
            push();
            break;
        case 2: 
            excuse ="I was arguing with someone who said you werent the best boss"  
            push();
            break;
        case 3: 
            excuse ="I was helping a choking infant"
            push();
            break;
        case 4: 
            excuse ="My mum was on Jeremy Kyle"
            push();
            break;
        case 5: 
            excuse ="I got stuck in a timewarp... just a step to the right"
            push();
            break;
        case 6: 
            excuse ="I was judging a dance off between my gran and 50 cent"
            push();
            break;  
        case 7: 
            excuse ="Every time I step outside I get blown into a pub"
            push();
            break;
        case 8: 
            excuse ="Time is a construct, I cant be late"
            push();
            break;
        case 9: 
            excuse ="I was beemed up by Scotty"
            push();
            break;
        case 10: 
            excuse ="Starbucks kept getting my name wrong"
            push();
            break;
        default: 
            excuse ="Your late"
            push();
    }
}
document.getElementById("button").addEventListener("click",function(){
generator();
console.log(random, excuse);
number = random;
})
