<?php
include 'config.php';

// Set response header to JSON
header("Content-Type: application/json");

// Check if the request method is GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Retrieve filters from query parameters
    $atomic_number = isset($_GET['atomic_number']) ? $_GET['atomic_number'] : null;
    $name = isset($_GET['name']) ? $_GET['name'] : null;
    $symbol = isset($_GET['symbol']) ? $_GET['symbol'] : null;

    // Build the query based on filters
    $query = "SELECT * FROM elements WHERE 1=1";
    if (!empty($atomic_number)) {
        $query .= " AND atomic_number = ?";
    } elseif (!empty($name)) {
        $query .= " AND name = ?";
    } elseif (!empty($symbol)) {
        $query .= " AND symbol = ?";
    } else {
        echo json_encode(["status" => "error", "message" => "Please provide atomic_number, name, or symbol."]);
        exit;
    }

    // Prepare and execute the query
    $stmt = $conn->prepare($query);
    if (!empty($atomic_number)) {
        $stmt->bind_param("i", $atomic_number);
    } elseif (!empty($name)) {
        $stmt->bind_param("s", $name);
    } elseif (!empty($symbol)) {
        $stmt->bind_param("s", $symbol);
    }

    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $element = $result->fetch_assoc();
        echo json_encode(["status" => "success", "element" => $element]);
    } else {
        echo json_encode(["status" => "error", "message" => "Element not found."]);
    }

    $stmt->close();
}

// Close connection
$conn->close();
?>
