<?php

include 'db_connection.php';

header('Access-Control-Allow-Origin: * ');
header("Access-Control-Allow-Headers: * ");

$request_body = file_get_contents('php://inputs');
$data = json_decode($request_body);

$updatedPatient = $data->Patient;
$updatedDoctor = $data->Doctor;
$updatedRoom = $data->Room;
$updatedTime = $data->AppointmentTime;
$updatedDate = $data->AppointmentDate;


$sql = "UPDATE appointment SET Patient='$updatedPatient', Doctor='$updatedDoctor', Room='$updatedRoom', AppointmentTime='$updatedTime', AppointmentDate='$updatedDate' WHERE id = '$doctorId'";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("Patient information Updated.");
}

?>