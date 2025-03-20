<?php
include 'config.php';
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $inputJSON = file_get_contents("php://input");
    $input = json_decode($inputJSON, true);

    if (!isset($input['email'], $input['date_of_birth'], $input['gender'], $input['current_study'])) {
        echo json_encode(["status" => "error", "message" => "All fields are required."]);
        exit;
    }

    $email = $input['email'];
    $date_of_birth = $input['date_of_birth'];
    $gender = $input['gender'];
    $current_study = $input['current_study'];

    // Update user details
    $stmt = $conn->prepare("UPDATE users SET date_of_birth = ?, gender = ?, current_study = ? WHERE email = ?");
    $stmt->bind_param("ssss", $date_of_birth, $gender, $current_study, $email);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Profile updated successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to update profile."]);
    }

    $stmt->close();
    $conn->close();
}
?>
