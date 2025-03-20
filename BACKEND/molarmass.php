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
    if (!isset($input['formula']) || empty($input['formula'])) {
        echo json_encode(["status" => "error", "message" => "Molecular formula is required."]);
        exit;
    }

    $formula = $input['formula'];

    // Recursive function to parse the molecular formula
    function parseFormula($formula, $multiplier = 1, $conn) {
        preg_match_all('/(\(([^)]+)\)|\[([^\]]+)\]|([A-Z][a-z]*))(\d*)/', $formula, $matches, PREG_SET_ORDER);

        $total_mass = 0;
        $details = [];

        foreach ($matches as $match) {
            if (!empty($match[2]) || !empty($match[3])) { // Group in parentheses or brackets
                $group = !empty($match[2]) ? $match[2] : $match[3];
                $group_multiplier = !empty($match[5]) ? (int)$match[5] : 1;
                list($group_mass, $group_details) = parseFormula($group, $group_multiplier * $multiplier, $conn);
                $total_mass += $group_mass;
                $details = array_merge($details, $group_details);
            } elseif (!empty($match[4])) { // Individual element
                $element = $match[4];
                $quantity = !empty($match[5]) ? (int)$match[5] : 1;
                $quantity *= $multiplier;

                // Fetch atomic weight from the database
                $stmt = $conn->prepare("SELECT atomic_weight FROM atomic_weights WHERE symbol = ?");
                $stmt->bind_param("s", $element);
                $stmt->execute();
                $result = $stmt->get_result();

                if ($row = $result->fetch_assoc()) {
                    $atomic_weight = $row['atomic_weight'];
                    $mass_contribution = $atomic_weight * $quantity;
                    $total_mass += $mass_contribution;

                    // Append calculation details
                    $details[] = "$quantity × $atomic_weight (atomic weight of $element) = $mass_contribution";
                } else {
                    echo json_encode(["status" => "error", "message" => "Element $element not found in database."]);
                    exit;
                }

                $stmt->close();
            }
        }

        return [$total_mass, $details];
    }

    // Parse the molecular formula
    list($total_mass, $calculation_details) = parseFormula($formula, 1, $conn);

    // Construct the response
    $response = [
        "status" => "success",
        "molecular_mass" => $total_mass,
        "calculation_steps" => $calculation_details
    ];

    // Send the response as JSON
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
}

// Close connection
$conn->close();
?>
