<?php 

include 'db.php';
$id=$_POST['id'];
$query = "DELETE from tasks WHERE id='$id'";
$result = mysqli_query($conn, $query);

if ($result) {

echo 1;
} else {
    echo 0;
}

?>