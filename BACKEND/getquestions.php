<?php
header("Content-Type: application/json");
$conn = new mysqli("localhost", "root", "", "chempro");

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed"]));
}

$sql = "SELECT id, text, choice, correct_answer FROM questions ORDER BY RAND() LIMIT 10";
$result = $conn->query($sql);

$questions = [];
while ($row = $result->fetch_assoc()) {
    $questions[] = $row;
}

echo json_encode($questions);
$conn->close();
?>
