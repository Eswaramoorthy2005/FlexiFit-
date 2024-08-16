import React, { useState } from 'react';
import './BMICalculator.css';

const BMICalculator = () => {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [heightFeet, setHeightFeet] = useState('');
    const [heightInches, setHeightInches] = useState('');
    const [heightCm, setHeightCm] = useState('');
    const [weightLbs, setWeightLbs] = useState('');
    const [weightKg, setWeightKg] = useState('');
    const [bmi, setBmi] = useState(null);
    const [bmiStatus, setBmiStatus] = useState('');
    const [unit, setUnit] = useState('imperial');

    const calculateBMI = () => {
        let height, weight, bmiValue;

        if (unit === 'imperial') {
            height = (parseInt(heightFeet) * 12) + parseInt(heightInches);
            weight = parseInt(weightLbs);
            bmiValue = (weight / (height * height)) * 703;
        } else {
            height = parseInt(heightCm) / 100; // convert cm to meters
            weight = parseInt(weightKg);
            bmiValue = weight / (height * height);
        }

        setBmi(bmiValue.toFixed(1));

        if (bmiValue < 18.5) {
            setBmiStatus('Underweight');
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
            setBmiStatus('Normal');
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
            setBmiStatus('Overweight');
        } else {
            setBmiStatus('Obesity');
        }
    };

    const clearFields = () => {
        setAge('');
        setGender('male');
        setHeightFeet('');
        setHeightInches('');
        setHeightCm('');
        setWeightLbs('');
        setWeightKg('');
        setBmi(null);
        setBmiStatus('');
    };

    return (
        <div className="bmi-body">
        <div className="bmi-calculator">
            <h2>BMI Calculator</h2>
            <div className="unit-toggle">
                <button className={unit === 'metric' ? 'active' : ''} onClick={() => setUnit('metric')}>Metric Units</button>
                <button className={unit === 'imperial' ? 'active' : ''} onClick={() => setUnit('imperial')}>US Units</button>
            </div>
            <div className="input-group">
                <label>
                    Age:
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        min="2"
                        max="120"
                    />
                </label>
            </div>
            <div className="input-group">
                <label>
                    Gender:
                    <input
                        type="radio"
                        value="male"
                        checked={gender === 'male'}
                        onChange={() => setGender('male')}
                    /> Male
                    <input
                        type="radio"
                        value="female"
                        checked={gender === 'female'}
                        onChange={() => setGender('female')}
                    /> Female
                </label>
            </div>
            {unit === 'imperial' ? (
                <div className="input-group">
                    <label>
                        Height:
                        <input
                            type="number"
                            value={heightFeet}
                            onChange={(e) => setHeightFeet(e.target.value)}
                            placeholder="feet"
                        /> feet
                        <input
                            type="number"
                            value={heightInches}
                            onChange={(e) => setHeightInches(e.target.value)}
                            placeholder="inches"
                        />
                    </label>
                </div>
            ) : (
                <div className="input-group">
                    <label>
                        Height:
                        <input
                            type="number"
                            value={heightCm}
                            onChange={(e) => setHeightCm(e.target.value)}
                            placeholder="cm"
                        /> 
                    </label>
                </div>
            )}
            {unit === 'imperial' ? (
                <div className="input-group">
                    <label>
                        Weight:
                        <input
                            type="number"
                            value={weightLbs}
                            onChange={(e) => setWeightLbs(e.target.value)}
                            placeholder="pounds"
                        /> 
                    </label>
                </div>
            ) : (
                <div className="input-group">
                    <label>
                        Weight:
                        <input
                            type="number"
                            value={weightKg}
                            onChange={(e) => setWeightKg(e.target.value)}
                            placeholder="kg"
                        /> 
                    </label>
                </div>
            )}
            <div className="button-group">
                <button onClick={calculateBMI}>Calculate</button>
                <button onClick={clearFields}>Clear</button>
            </div>
            {bmi && (
                <div className="result">
                    <h3>Result</h3>
                    <p>BMI = {bmi} kg/m² ({bmiStatus})</p>
                    <div>
                        <p>Healthy BMI range: 18.5 kg/m² - 25 kg/m²</p>
                        <p>Healthy weight for the height: {unit === 'imperial' ? '128.9 lbs - 174.2 lbs' : '58.5 kg - 79.4 kg'}</p>
                        <p>BMI Prime: {(bmi / 25).toFixed(2)}</p>
                        <p>Ponderal Index: {(bmi / (Math.pow(unit === 'imperial' ? (parseInt(heightFeet) * 12 + parseInt(heightInches)) * 0.0254 : parseInt(heightCm) / 100, 3))).toFixed(2)}</p>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
};

export default BMICalculator;
