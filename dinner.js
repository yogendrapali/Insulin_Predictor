function calculate() {
    // Get the selected meal from the dropdown list
    var meal = document.getElementById("meal").value;
    
    // Get the quantity entered by the user
    var quantity = document.getElementById("quantity").value;
    
    // Define a dictionary of meal names and their corresponding calorie counts
    var calorieDict = {
      "chanamasala": 35,
      "rajmachawal": 60,
      "aloogobi": 16,
      "chickentikkamasala": 14,
      "palakpaneer": 10,
      "bhindimasala": 10,
      "dalmakhani": 30,
      "bainganbharta": 14,
      "biryani": 50,
      "tandooriroti": 20,
      "vegetablepulao": 46,
      "chickenbiryani": 45,
      "daltadka": 30,
      "paneerbuttermasala": 14,
      "aloomatar": 20,
      "chickencurry": 10,
      "butterchicken": 60,
      "vegetablekorma": 35,
      "masoordal": 35,
      "methichicken": 30,
      "malaikofta" : 20 ,
      "butterchicken" : 40,
      "vegetablekorma" : 35,
      "masoordal" : 40,
      "jeerarice" : 45,
      "eggcurry" : 10 ,
      "aloobaingan" : 25 ,
      "bhindidopyaza" : 15 ,
      "dalpalak" : 20 ,
      "paneermakhani" : 15 ,
      "chickensaag" : 10 ,
      "tandoorichicken" : 25 ,
      "mutterpaneer" : 15 ,
      "chickenkorma" : 10 ,
      "chicken65" : 15 ,
      "bainganbharta" : 15 ,
      "tandooriroti" : 15 ,
      "bainganbharta" : 15,
      "chickenshawrma" : 40 ,
      "vegfriedrice" : 30 ,
      "hyderabadibiryani" : 60,
      "malaikofta" : 15 ,
      "tandoorinaan" : 25

    };
    
    // Define the insulin ratio for 1 unit of insulin per 15 grams of carbohydrates
    var insulinRatio = 15;
    
    // Calculate the total calorie count for the selected meal and quantity
    var totalCalories = calorieDict[meal] * quantity;
    
    // Calculate the total amount of carbohydrates in the selected meal and quantity
    var totalCarbs = totalCalories / 4; // 1 gram of carbs = 4 calories
    
    // Calculate the amount of insulin required to cover the total amount of carbohydrates
    var insulinDose = totalCarbs / insulinRatio;
    
    // Round the insulin dose to 2 decimal places
    //insulinDose = insulinDose.toFixed(2);
    
    // Display the total calorie count and insulin dose to the user
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Total Calories: " + totalCalories +" Grams";//+ "<br>Insulin Dose: " + insulinDose + " units";
  }









































   
  