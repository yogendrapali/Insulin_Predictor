from flask import Flask, render_template, request
import pickle
import numpy as np

app = Flask(__name__)

# Load the trained model
model=pickle.load(open(r'C:\Users\dell\Documents\Insulin_Predictor\Type1final.pkl','rb'),encoding='utf-8')

# Define the route for the home page
@app.route('/')
def home():
    return render_template('predict.html')

# Define the route for the prediction
@app.route('/predict', methods=['POST'])
def predict():
    # Get the input values from the HTML form
    BP = float(request.form['BP'])
    BMI = float(request.form['BMI'])
    BGL = float(request.form['BGL'])
    HR = float(request.form['HR'])
    GEN = int(request.form['GEN'])
    MEAL = float(request.form['MEAL'])

    # Perform any necessary preprocessing on the input values
    # ...

    # Apply the prediction formula to get the predicted insulin requirements
    baseline_insulin =  10 # Set the baseline insulin value here
    target_glucose =  100 # Set the target glucose level here
    insulin_sensitivity = 0.5 # Set the insulin sensitivity factor here
    insulin_carb_ratio =  2 # Set the insulin-to-carbohydrate ratio here
    genetic_factor =  1 # Set the genetic factor here

    insulin_requirements = baseline_insulin + (BGL - target_glucose) * insulin_sensitivity + MEAL * insulin_carb_ratio + GEN * genetic_factor

    # Return the predicted insulin requirements to the HTML page
    return render_template('predict.html', prediction=insulin_requirements)

if __name__ == '__main__':
    app.run(debug=True)
