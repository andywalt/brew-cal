function finalCoffee(){
	document.getElementById("coffeeLiquidFinal").innerHTML=document.getElementById("coffedLiquidMake").value;
};
function calcbrew(amount){
	amount=parseFloat(amount);
	var brewCalc = 5 * amount;
	document.getElementById("coffeeBeanUse").innerHTML=brewCalc;
};