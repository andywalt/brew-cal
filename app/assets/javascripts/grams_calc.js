function finalCoffee(){
	document.getElementById("coffeeLiquidFinal").innerHTML=document.getElementById("coffeLiquidMake").value;
};
function calcbrew(amount){
	amount=parseFloat(amount);
	var brewCalc = 15.555555556/amount;
	document.getElementById("coffeeBeanUse").innerHTML=brewCalc;
};