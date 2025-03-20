<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = ""; // Use your database password
$dbname = "chempro"; // Replace with your database name

// Set response header to JSON
header("Content-Type: application/json; charset=UTF-8");

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]));
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve JSON input
    $inputJSON = file_get_contents("php://input");
    $input = json_decode($inputJSON, true);

    // Validate input
    if (!isset($input['element'], $input['symbol'], $input['atomic_weight']) || 
        empty($input['element']) || empty($input['symbol']) || empty($input['atomic_weight'])) {
        echo json_encode(["status" => "error", "message" => "Element, symbol, and atomic weight are required."]);
        exit;
    }

    // Extract values
    $element = $input['element'];
    $symbol = $input['symbol'];
    $atomic_weight = (float) $input['atomic_weight'];

    // Insert data into the database
    $stmt = $conn->prepare("INSERT INTO atomic_weights (element, symbol, atomic_weight) VALUES (?, ?, ?)");
    $stmt->bind_param("ssd", $element, $symbol, $atomic_weight);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Atomic weight added successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error: " . $stmt->error]);
    }

    // Close statement
    $stmt->close();
}

// Close connection
$conn->close();
?>
