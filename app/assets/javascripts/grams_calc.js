function calc()
{
	var coffee_liquid, brew;
	coffee_liquid = Number(document.grams_calc.coffee.value);
	brew = coffee_liquid / 15.555555556;

	document.grams_calc.coffee_result.value = brew;
};