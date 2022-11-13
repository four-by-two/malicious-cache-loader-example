<?php 
header('Access-Control-Allow-Origin: *');

//games db
$casinoGames['casinoGames'][0]['gameId'] = 1;
$casinoGames['casinoGames'][0]['gameName'] = "Finn and the Swirly Spin";
$casinoGames['casinoGames'][0]['image'] = "http://www.deutz-hellas.gr/dummy-database/images/finn.jpg";
$casinoGames['casinoGames'][0]['description'] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl metus, condimentum in arcu eget, auctor posuere augue. Donec quis nisl eget dui placerat ultricies. Nam at arcu at lectus volutpat scelerisque. Sed commodo accumsan nulla, eu hendrerit nibh luctus eget. Aliquam erat volutpat. Cras eget aliquet ex, condimentum placerat mi. Duis gravida porta vestibulum.";
$casinoGames['casinoGames'][0]['favorite'] = 5;

$casinoGames['casinoGames'][1]['gameId'] = 2;
$casinoGames['casinoGames'][1]['gameName'] = "Piggy Riches";
$casinoGames['casinoGames'][1]['image'] = "http://www.deutz-hellas.gr/dummy-database/images/piggy.jpg";
$casinoGames['casinoGames'][1]['description'] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl metus, condimentum in arcu eget, auctor posuere augue. Donec quis nisl eget dui placerat ultricies. Nam at arcu at lectus volutpat scelerisque. Sed commodo accumsan nulla, eu hendrerit nibh luctus eget. Aliquam erat volutpat. Cras eget aliquet ex, condimentum placerat mi. Duis gravida porta vestibulum.";
$casinoGames['casinoGames'][1]['favorite'] = 162;

$casinoGames['casinoGames'][2]['gameId'] = 3;
$casinoGames['casinoGames'][2]['gameName'] = "Gold King";
$casinoGames['casinoGames'][2]['image'] = "http://www.deutz-hellas.gr/dummy-database/images/king.jpg";
$casinoGames['casinoGames'][2]['description'] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl metus, condimentum in arcu eget, auctor posuere augue. Donec quis nisl eget dui placerat ultricies. Nam at arcu at lectus volutpat scelerisque. Sed commodo accumsan nulla, eu hendrerit nibh luctus eget. Aliquam erat volutpat. Cras eget aliquet ex, condimentum placerat mi. Duis gravida porta vestibulum.";
$casinoGames['casinoGames'][2]['favorite'] = 48;

$casinoGames['casinoGames'][3]['gameId'] = 4;
$casinoGames['casinoGames'][3]['gameName'] = "Immortal Romance";
$casinoGames['casinoGames'][3]['image'] = "http://www.deutz-hellas.gr/dummy-database/images/immortal.jpg";
$casinoGames['casinoGames'][3]['description'] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl metus, condimentum in arcu eget, auctor posuere augue. Donec quis nisl eget dui placerat ultricies. Nam at arcu at lectus volutpat scelerisque. Sed commodo accumsan nulla, eu hendrerit nibh luctus eget. Aliquam erat volutpat. Cras eget aliquet ex, condimentum placerat mi. Duis gravida porta vestibulum.";
$casinoGames['casinoGames'][3]['favorite'] = 0;

$casinoGames['casinoGames'][4]['gameId'] = 5;
$casinoGames['casinoGames'][4]['gameName'] = "Playboy Gold";
$casinoGames['casinoGames'][4]['image'] = "http://www.deutz-hellas.gr/dummy-database/images/playboy.jpg";
$casinoGames['casinoGames'][4]['description'] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl metus, condimentum in arcu eget, auctor posuere augue. Donec quis nisl eget dui placerat ultricies. Nam at arcu at lectus volutpat scelerisque. Sed commodo accumsan nulla, eu hendrerit nibh luctus eget. Aliquam erat volutpat. Cras eget aliquet ex, condimentum placerat mi. Duis gravida porta vestibulum.";
$casinoGames['casinoGames'][4]['favorite'] = 7;
$idx=-1;

switch($_SERVER['REQUEST_METHOD'])
{
  case 'GET':
  //check if client sends 'gameId
  if (isset($_GET["gameId"])) {
    $rgameId = $_GET["gameId"];

    //loop through the games array
    foreach ($casinoGames as &$value) {
      foreach($value as $key => $val){
        if ($rgameId == $val['gameId']){
          $idx = $key;
        }
      }
    }
    if($idx > -1){
      //return the game obj to the client
      echo json_encode($casinoGames['casinoGames'][$idx]);
    }else {
      //return empty object
      $empty = new stdClass();
      echo json_encode($empty);
    }
  } else {
    //return empty object
    $empty = new stdClass();
    echo json_encode($empty);
  }
  break;
  default:
    //return Unauthorized error
    echo http_response_code(401);
}

?>

