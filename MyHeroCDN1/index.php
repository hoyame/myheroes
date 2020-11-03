<?php

$data = array('status' => false);

header('Acccess-Control-Allow-Origin: *');
header('Content=type:application/json');

echo json_encode($data);