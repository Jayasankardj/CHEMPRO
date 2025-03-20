<?php
include 'config.php'; // Ensure database connection is included

header('Content-Type: application/json');
$data = json_decode(file_get_contents("php://input"));

if (isset($data->email)) {
    $email = $data->email;
    $stmt = $conn->prepare("SELECT name, email, profile_image FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $profile = $result->fetch_assoc();
        echo json_encode(["status" => "success", "profile" => $profile]);
    } else {
        echo json_encode(["status" => "error", "message" => "User not found"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request"]);
}

$conn->close();
?>
