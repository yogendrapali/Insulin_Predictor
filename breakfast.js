function calculate() {
    // Get the selected meal from the dropdown list
    var meal = document.getElementById("meal").value;
    
    // Get the quantity entered by the user
    var quantity = document.getElementById("quantity").value;
    
    // Define a dictionary of meal names and their corresponding calorie counts
    var calorieDict = {
        "idli-sambar": 30,
        "upma": 30,
        "dosa-chutney": 36,
        "poha": 26,
        "paratha": 35,
        "breadtoast": 24,
        "aloopuri": 50,
        "samosa": 20,
        "vada": 23,
        "uttapam": 22,
        "masaladosa": 56,
        "sandwich": 30,
        "besanchilla": 20,
        "ravaupma": 30,
        "dhokla": 20,
        "meduvada": 16,
        "puribhaji": 50,
        "ravadosa": 40,
        "sabudanavada": 20,
        "masalaomelette": 5,
        "ragi dosa" : 20 ,
        "cholebhature" : 50,
        "breadpakoda" : 15,
        "oatsupma" : 25,
        "methiparatha" : 30,
        "moongdaalcheela" : 20 ,
        "sabudanakhichdi" : 54 ,
        "aloogobiparatha" : 30 ,
        "eggbhurji" : 5 ,
        "jowarroti" : 20 ,
        "ravaidli" : 25 ,
        "stuffedparatha" : 30 ,
        "mixedveggiedosa" : 45 ,
        "matarkulcha" : 45 ,
        "maggie" : 15 ,
        "redsaucepasta" : 15 ,
        "whitesaucepasta" : 15 ,
        "noodles" : 15,
        "frenchfries" : 40 ,
    };
    
    // Define the insulin ratio for 1 unit of insulin per 15 grams of carbohydrates
    var insulinRatio = 15;
    
    // Calculate the total calorie count for the selected meal and quantity
    var totalCalories = calorieDict[meal] * quantity;
    
    // Calculate the total amount of carbohydrates in the selected meal and quantity
    var totalCarbs = totalCalories / 4; // 1 gram of carbs = 4 calories
    
    // Calculate the amount of insulin required to cover the total amount of carbohydrates
    //var insulinDose = totalCarbs / insulinRatio;
    
    // Round the insulin dose to 2 decimal places
    //insulinDose = insulinDose.toFixed(2);
    
    // Display the total calorie count and insulin dose to the user
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Total Calories: " + totalCalories + " Grams" ;//+ "<br>Insulin Dose: " + insulinDose + " units";
  }


    








































   
  