<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = ""; // Use your database password
$dbname = "chempro"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve data from the POST request
    $name = isset($_POST['name']) ? $_POST['name'] : null;
    $symbol = isset($_POST['symbol']) ? $_POST['symbol'] : null;
    $atomic_number = isset($_POST['atomic_number']) ? (int)$_POST['atomic_number'] : null;
    $mass = isset($_POST['mass']) ? (float)$_POST['mass'] : null;
    $electronic_configuration = isset($_POST['electronic_configuration']) ? $_POST['electronic_configuration'] : null;
    $electrons = isset($_POST['electrons']) ? (int)$_POST['electrons'] : null;
    $protons = isset($_POST['protons']) ? (int)$_POST['protons'] : null;
    $neutrons = isset($_POST['neutrons']) ? (int)$_POST['neutrons'] : null;
    $melting_point = isset($_POST['melting_point']) ? (float)$_POST['melting_point'] : null;
    $boiling_point = isset($_POST['boiling_point']) ? (float)$_POST['boiling_point'] : null;
    $valence = isset($_POST['valence']) ? (int)$_POST['valence'] : null;
    $ionization_energy = isset($_POST['ionization_energy']) ? (float)$_POST['ionization_energy'] : null;
    $electronegativity = isset($_POST['electronegativity']) ? (float)$_POST['electronegativity'] : null;
    $thermal_conductivity = isset($_POST['thermal_conductivity']) ? (float)$_POST['thermal_conductivity'] : null;
    $phase_of_matter = isset($_POST['phase_of_matter']) ? $_POST['phase_of_matter'] : null;
    $speed_of_index = isset($_POST['speed_of_index']) ? (float)$_POST['speed_of_index'] : null;

    // Validate mandatory fields
    if (empty($name) || empty($symbol) || empty($atomic_number)) {
        echo json_encode(["status" => "error", "message" => "Name, symbol, and atomic number are required."]);
        exit;
    }

    // Insert data into the database
    $stmt = $conn->prepare("INSERT INTO elements (name, symbol, atomic_number, mass, electronic_configuration, electrons, protons, neutrons, melting_point, boiling_point, valence, ionization_energy, electronegativity, thermal_conductivity, phase_of_matter, speed_of_index) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param(
        "ssidsiiiiddddssd",
        $name,
        $symbol,
        $atomic_number,
        $mass,
        $electronic_configuration,
        $electrons,
        $protons,
        $neutrons,
        $melting_point,
        $boiling_point,
        $valence,
        $ionization_energy,
        $electronegativity,
        $thermal_conductivity,
        $phase_of_matter,
        $speed_of_index
    );

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Element added successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error: " . $stmt->error]);
    }

    // Close statement
    $stmt->close();
}

// Close connection
$conn->close();
?>
