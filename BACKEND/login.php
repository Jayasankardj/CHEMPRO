<?php

include 'config.php';

// Set response header to JSON
header("Content-Type: application/json");


// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve JSON input
    $inputJSON = file_get_contents("php://input");
    $input = json_decode($inputJSON, true);

    // Validate input
    if (!isset($input['name'], $input['password']) || empty($input['name']) || empty($input['password'])) {
        echo json_encode(["status" => "error", "message" => "Both fields are required."]);
        exit;
    }

    $name = $input['name'];
    $password = $input['password'];

    // Query to check user credentials
    $stmt = $conn->prepare("SELECT password FROM users WHERE name = ?");
    $stmt->bind_param("s", $name);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($storedPassword);
        $stmt->fetch();

        if ($password === $storedPassword) {
            echo json_encode(["status" => "success", "message" => "Login successful."]);
        } else {
            echo json_encode(["status" => "error", "message" => "Incorrect password."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "User not found."]);
    }

    $stmt->close();
}

// Close connection
$conn->close();
?>
