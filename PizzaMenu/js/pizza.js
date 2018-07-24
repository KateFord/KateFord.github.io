// The getReceipt function creates an instance of an object (a pizza order) using a constructor, retrieves values from HTML radio button and check box
// elements and populates the object propertis size,meatArray,veggieArray,chese, sauce and crust. An order number has been included, which increments each
// time an order is placed and resets at the end of each session. The property values are then used to determine the individual item prices and total order
// price. All of the data held in the instance of the object is returned to elements on the model window. Generic functions have been used for the radio
// button and check box data retrival to prevent code being repeated and to allow for reuse.  
function getReceipt() {
		
	// Constructor
	function pizzaOrder(orderNumber,size,meatArray,veggieArray,cheese,sauce,crust,sizePrice,meatPrice,
						veggiePrice,cheesePrice,saucePrice,crustPrice,totalPrice) {
			this.orderNumber = orderNumber;
			this.size = size;
			this.meatArray = [];
			this.veggieArray = [];
			this.cheese = cheese;
			this.sauce = sauce;
			this.crust = crust;
			this.sizePrice = sizePrice;
			this.meatPrice = meatPrice;
			this.veggiePrice = veggiePrice;
			this.cheesePrice = cheesePrice;
			this.saucePrice = saucePrice;
			this.crustPrice = crustPrice;
			this.totalPrice = totalPrice;
	}
		
	// Pass each radio button class name into the function and return the selected one
	function getSelectedRadioButtonValue(className) {
		var radios = document.getElementsByClassName(className);
			// loop over each radio button value
			for (i = 0; i < radios.length; i++) {
				if (radios[i].checked) {
					return radios[i].value;
				}
			}
		return null;
	}
		
	// Pass the checkbox class name into the function
	function getSelectedCheckBoxValues(className) {
		var checkboxes = document.getElementsByClassName(className);
		var checkboxesSelectedArray = [];
		// loop over check box value
		for (var i=0; i < checkboxes.length; i++) {
			// And place the checked, ones into an array
			if (checkboxes[i].checked) {
			checkboxesSelectedArray.push(checkboxes[i].value);
			}
		}
		
		// Return the array if it is not empty or null
		return checkboxesSelectedArray.length > 0 ? checkboxesSelectedArray : null;
	}
		

	// Incrementation function for the object's order number property. Have to change it to a number before adding 1.
	function incrementNumberValue(id){
		return  parseInt(document.getElementById(id).innerHTML) + 1;
	}	
		
	// Instantiate an instance of the object	
	var currentPizzaOrder = new pizzaOrder;
	
	// Add values to the object's properties
	currentPizzaOrder.orderNumber = incrementNumberValue("orderNumber");
	currentPizzaOrder.size = getSelectedRadioButtonValue("size");
	currentPizzaOrder.meatArray = getSelectedCheckBoxValues("meat");
	currentPizzaOrder.veggieArray = getSelectedCheckBoxValues("veggie");
	currentPizzaOrder.cheese = getSelectedRadioButtonValue("cheese");
	currentPizzaOrder.sauce = getSelectedRadioButtonValue("sauce");
	currentPizzaOrder.crust = getSelectedRadioButtonValue("crust");				
		
		
	// Add values to the price properties (Personal Pizza is $6.00, Medium Pizza is $10.00, Large Pizza is $14.00 and Extra Large Pizza is $16.00).
	if (currentPizzaOrder.size === "Personal Pizza") {
		currentPizzaOrder.sizePrice = 6;
	} else if (currentPizzaOrder.size === "Medium Pizza") {
		currentPizzaOrder.sizePrice = 10;
	} else if (currentPizzaOrder.size === "Large Pizza") {
		currentPizzaOrder.sizePrice = 14;
	} else if (currentPizzaOrder.size === "Extra Large Pizza") {
		currentPizzaOrder.sizePrice = 16;
	}
						
	// Each additional meat item is $1.00 (first one being complementary).
	if (currentPizzaOrder.meatArray != null) {
		currentPizzaOrder.meatPrice = currentPizzaOrder.meatArray.length - 1
	} else {
	   currentPizzaOrder.meatPrice = 0;
	}
	
	// Each additional Veggie item is $1.00 (first one being complementary).
	if (currentPizzaOrder.veggieArray != null) {
		currentPizzaOrder.veggiePrice = currentPizzaOrder.veggieArray.length - 1
	} else {
	   currentPizzaOrder.veggiePrice = 0;
	}
				
	//Extra Cheese is an additional $3.00 for any size pizza.
	if (currentPizzaOrder.cheese === "Extra cheese") {
		currentPizzaOrder.cheesePrice = 3;
	} else {
		currentPizzaOrder.cheesePrice = 0;
	}
							
	//No extra charge for sauce.
	currentPizzaOrder.saucePrice = 0;
				
	// Cheese Stuffed Crust is an additional $3.00. All other crusts are complementary.
	if (currentPizzaOrder.crust === "Cheese Stuffed Crust") {
		currentPizzaOrder.crustPrice = 3;
	} else {
		currentPizzaOrder.crustPrice = 0;
	} 
	
	//Total price
	currentPizzaOrder.totalPrice =  currentPizzaOrder.sizePrice	+ currentPizzaOrder.meatPrice + currentPizzaOrder.veggiePrice + currentPizzaOrder.cheesePrice + currentPizzaOrder.saucePrice + currentPizzaOrder.crustPrice;
				

	// Return  the pizza order values to the model window Receipt HTML elements 	
	document.getElementById("orderNumber").innerHTML = currentPizzaOrder.orderNumber;
	document.getElementById("orderSize").innerHTML = currentPizzaOrder.size;
	document.getElementById("orderMeat").innerHTML = currentPizzaOrder.meatArray || "No Meats";
	document.getElementById("orderVeggie").innerHTML = currentPizzaOrder.veggieArray || "No Veggies";
	document.getElementById("orderCheese").innerHTML = currentPizzaOrder.cheese;
	document.getElementById("orderSauce").innerHTML = currentPizzaOrder.sauce;
	document.getElementById("orderCrust").innerHTML = currentPizzaOrder.crust;
	document.getElementById("orderSizePrice").innerHTML = "$"+currentPizzaOrder.sizePrice+".00";
	document.getElementById("orderMeatPrice").innerHTML = "$"+currentPizzaOrder.meatPrice+".00";
	document.getElementById("orderVeggiePrice").innerHTML = "$"+currentPizzaOrder.veggiePrice+".00";
	document.getElementById("orderCheesePrice").innerHTML = "$"+currentPizzaOrder.cheesePrice+".00";
	document.getElementById("orderSaucePrice").innerHTML = "$"+currentPizzaOrder.saucePrice+".00";
	document.getElementById("orderCrustPrice").innerHTML = "$"+currentPizzaOrder.crustPrice+".00";
	document.getElementById("orderTotalPrice").innerHTML = "$"+currentPizzaOrder.totalPrice+".00";
			
}