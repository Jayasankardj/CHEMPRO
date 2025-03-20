<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = ""; // Use your database password
$dbname = "chempro"; // Replace with your database name

// Set response header to JSON
header("Content-Type: application/json");

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
    if (!isset($input['email']) || empty($input['email'])) {
        echo json_encode(["status" => "error", "message" => "Email is required."]);
        exit;
    }

    $email = $input['email'];

    // Check if email exists in the database
    $stmt = $conn->prepare("SELECT id, name FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        // Generate OTP
        $otp = rand(100000, 999999); // 6-digit OTP

        // Update OTP in the database
        $stmt->bind_result($id, $name);
        $stmt->fetch();
        $updateStmt = $conn->prepare("UPDATE users SET otp = ? WHERE email = ?");
        $updateStmt->bind_param("is", $otp, $email);
        $updateStmt->execute();
        $updateStmt->close();

        // Send OTP to the user's email
        $subject = "Password Reset OTP";
        $message = "Hello $name,\n\nYour OTP for password reset is: $otp.\n\nPlease do not share this with anyone.";
        $headers = "From: no-reply@yourdomain.com\r\nContent-Type: text/plain; charset=UTF-8";

        if (mail($email, $subject, $message, $headers)) {
            echo json_encode(["status" => "success", "message" => "OTP sent to your email."]);
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to send OTP."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Email not found."]);
    }

    $stmt->close();
}

// Close connection
$conn->close();
?>
