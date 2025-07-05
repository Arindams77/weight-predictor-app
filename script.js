function predictWeight() {
    let name = document.getElementById('name').value.trim();
    let age = parseInt(document.getElementById('age').value);
    let height = parseInt(document.getElementById('height').value);
    let gender = document.getElementById('gender').value;
    let result = document.getElementById('result');

    if (!name || isNaN(age) || isNaN(height) || !gender) {
        result.innerHTML = "⚠️ Please fill out all fields correctly.";
        return;
    }

    // Logic following C structure
    let predictedWeight;
    if (gender === "male") {
        predictedWeight = height - 100 + (age / 10.0);
    } else {
        predictedWeight = height - 105 + (age / 10.0);
    }

    predictedWeight = predictedWeight.toFixed(1);

    result.innerHTML = `✅ ${name}, your predicted weight is <strong>${predictedWeight} kg</strong>.`;
}