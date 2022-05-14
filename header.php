<?php
header('Content-Type: text/html; charset=utf-8');
//헤더파일 맨 위에 붙여 놓기
// 글자깨지는것 방지

// 데이터베이스 권한인증 - 접속(connection)
// 서버 이름        - $severname
// 사용자(user)이름 - $username
// 비밀번호         - $password
// 데이터베이스 이름 - $dbname

$severname = 'localhost';
$username = 'qkrbwls';
$password = 'skandbwls*12';
$dbname = 'qkrbwls';

// 접속(connection) - $conn $conn = mysqli_connect(); 데이터베이스 접속함수
$conn = mysqli_connect($servername, $username, $password, $dbname);
mysqli_set_charset($conn, 'utf8');

if( !$conn ){ //접속 정보가 틀리면
    echo '데이터베이스 접속 실패! 아래의 데이터베이스 접속정보를 확인하세요!';
    echo '서버이름:'.$servername.' 사용자:'.$username.' 비밀번호:'. $password.' 데이터베이스이름:'.$dbname;  
    die('데이터베이스 접속 실패! 데이터베이스 접속정보를 확인하세요!');
}

/* else {
    echo '데이터베이스 접속 성공! 접속정보는 서버이름 : '.$servername.' 사용자:'.$username.' 비밀번호:'. $password.' 데이터베이스이름:'.$dbname .'<br>'; 
}
*/
?>