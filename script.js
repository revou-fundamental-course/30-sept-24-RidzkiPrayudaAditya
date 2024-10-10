function convertToFahrenheit() {
    const celsius = document.getElementById('celcius').value;
    const celsiusError = document.getElementById('celciusError');
    const explanation = document.getElementById('conversionExplanation');

    // Reset error message
    celsiusError.textContent = '';
    explanation.textContent = '';

    if (!isValidNumber(celsius)) {
        celsiusError.textContent = 'Masukkan angka yang valid untuk Celcius.';
    } else {
        const fahrenheit = (parseFloat(celsius) * 9 / 5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
        explanation.textContent = `${celsius}°C dikonversi menjadi Fahrenheit dengan rumus: (${celsius} × 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    }
}

function convertToCelsius() {
    const fahrenheit = document.getElementById('fahrenheit').value;
    const fahrenheitError = document.getElementById('fahrenheitError');
    const explanation = document.getElementById('conversionExplanation');

    // Reset error message
    fahrenheitError.textContent = '';
    explanation.textContent = '';

    if (!isValidNumber(fahrenheit)) {
        fahrenheitError.textContent = 'Masukkan angka yang valid untuk Fahrenheit.';
    } else {
        const celsius = (parseFloat(fahrenheit) - 32) * 5 / 9;
        document.getElementById('celcius').value = celsius.toFixed(2);
        explanation.textContent = `${fahrenheit}°F dikonversi menjadi Celcius dengan rumus: (${fahrenheit} - 32) × 5/9 = ${celsius.toFixed(2)}°C`;
    }
}

function isValidNumber(value) {
    // Memastikan input hanya berupa angka dan tidak kosong
    return !isNaN(value) && value.trim() !== '';
}

function resetFields() {
    // Reset semua field input dan pesan error
    document.getElementById('celcius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celciusError').textContent = '';
    document.getElementById('fahrenheitError').textContent = '';
    document.getElementById('conversionExplanation').textContent = 'Masukkan nilai suhu untuk melihat cara konversi.';
}
