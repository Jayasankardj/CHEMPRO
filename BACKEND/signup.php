<?php

include 'config.php';

// Set response header to JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve JSON input
    $inputJSON = file_get_contents("php://input");
    $input = json_decode($inputJSON, true);

    // Validate input
    if (!isset($input['name'], $input['email'], $input['password'], $input['confirm_password']) || 
        empty($input['name']) || empty($input['email']) || empty($input['password']) || empty($input['confirm_password'])) {
        echo json_encode(["status" => "error", "message" => "All fields are required."]);
        exit;
    }

    $name = trim($input['name']);
    $email = trim($input['email']);
    $password = trim($input['password']);
    $confirm_password = trim($input['confirm_password']);

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Invalid email format."]);
        exit;
    }

    // Check if password and confirm_password match
    if ($password !== $confirm_password) {
        echo json_encode(["status" => "error", "message" => "Passwords do not match."]);
        exit;
    }

    // Check if email already exists
    $email_check = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $email_check->bind_param("s", $email);
    $email_check->execute();
    $email_check->store_result();

    if ($email_check->num_rows > 0) {
        echo json_encode(["status" => "error", "message" => "Email already registered."]);
        $email_check->close();
        exit;
    }
    $email_check->close();

    // Insert user data into the database
    $stmt = $conn->prepare("INSERT INTO users (name, email, password, confirm_password) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $password, $confirm_password);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "User registered successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error: " . $stmt->error]);
    }

    // Close statement
    $stmt->close();
}

// Close connection
$conn->close();
?>
