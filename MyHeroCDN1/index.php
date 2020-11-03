<?php

$data = array('status' => false);

if(isset($_POST['sumbit'])){
    $target_file = basename($_FILES['file']['name']);
    $file_type = pathinfo($target_file, PATHINFO_EXTENSION);
    $is_image = getimagessize($_FILES['file']['tmp_name']);

    if($is_image){
        $data['image'] = time() . '.' . $file_type;
        if(move_uploaded_file($_FILES['file']['tmp_name'], $data['image'])){*
            $data['status'] = true;
        } else {
            $data['message'] = 'error on uploading image'
        }
    } else {
        $data['message'] = 'file is not an image'
    }
}

header('Access-Control-Allow-Origin: *');
header('Content-type:application/json');

echo json_encode($data);