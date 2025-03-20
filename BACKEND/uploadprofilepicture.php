<?php
include 'config.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['profile_image']) && isset($_POST['email'])) {
        $email = $_POST['email'];
        $image_name = time() . "_" . basename($_FILES["image"]["name"]);
        $target_dir = "uploads/"; // Ensure this folder exists
        $target_file = $target_dir . $image_name;

        if (move_uploaded_file($_FILES["profile_image"]["tmp_name"], $target_file)) {
            $stmt = $conn->prepare("UPDATE users SET profile_image = ? WHERE email = ?");
            $stmt->bind_param("ss", $target_file, $email);
            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Image uploaded successfully", "profile_image" => $target_file]);
            } else {
                echo json_encode(["status" => "error", "message" => "Failed to update database"]);
            }
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to upload image"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid request"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Only POST requests allowed"]);
}

$conn->close();
?>
