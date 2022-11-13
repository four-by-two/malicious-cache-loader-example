<?php 
header('Access-Control-Allow-Origin: *');

//users 'db'
$users = array();
$users['users'][0]['username'] = "testuser1";
$users['users'][0]['password'] = "testpass1";
$users['users'][1]['username'] = "testuser2";
$users['users'][1]['password'] = "testpass2";
$idx=-1;
$returUser = array();

//if GET request
switch($_SERVER['REQUEST_METHOD'])
{
  case 'GET':
    //ceck if user sends username&password
    if (isset($_GET["username"]) && isset($_GET["password"])) {
      $ruser = $_GET["username"];
      $rpass = $_GET["password"];

      //loop through the users array
      foreach ($users as &$value) {
        foreach($value as $key => $val){
          if ($ruser == $val['username'] && $rpass == $val['password']){
            $idx = $key;
            $returUser['user'][0]['username']=$val['username']; //or $ruser, is the same
          }
        }
      }
    }
    if($idx > -1){
      //return the user obj to the client
      echo json_encode($returUser['user'][0]);
    }else {
      //return Unauthorized error
      echo http_response_code(401);
    }
    break;
  default:
    //return Unauthorized error
    echo http_response_code(401);
}
?>

