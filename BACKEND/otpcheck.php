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

// Check if OTP and new password are provided
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $otp = isset($_POST['otp']) ? $_POST['otp'] : '';
    $new_password = isset($_POST['new_password']) ? $_POST['new_password'] : '';

    // Validate inputs
    if (empty($email) || empty($otp) || empty($new_password)) {
        echo json_encode(["status" => "error", "message" => "All fields are required."]);
        exit;
    }

    // Check if OTP matches with the one stored in the database
    $stmt = $conn->prepare("SELECT otp FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($stored_otp);
        $stmt->fetch();

        if ($otp == $stored_otp) {
            // OTP is valid, update password
            $hashed_password = password_hash($new_password, PASSWORD_BCRYPT); // Hash password
            $updateStmt = $conn->prepare("UPDATE users SET password = ?, otp = NULL WHERE email = ?");
            $updateStmt->bind_param("ss", $hashed_password, $email);
            
            if ($updateStmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Password updated successfully."]);
            } else {
                echo json_encode(["status" => "error", "message" => "Failed to update password."]);
            }

            $updateStmt->close();
        } else {
            echo json_encode(["status" => "error", "message" => "Invalid OTP."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Email not found."]);
    }

    $stmt->close();
}

// Close connection
$conn->close();
?>
