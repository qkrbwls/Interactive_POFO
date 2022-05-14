<?PHP
include_once('./header.php');
// ------------------------------------------------
//웹 입력폼에서 전송한 데이터
$name = $_POST['name'];  //data.name
$mail = $_POST['mail'];  //data.mail


//데이터를 변수를 통해서 데이터베이스의 테이블(member_mail)에 저장(INSERT)
$sql = "insert into member_mail (name, mail)  values ('$name', '$mail')";
mysqli_multi_query($conn, $sql);

// insert(저장)
// select(검색)
// update(수정)
// delete(삭제)

$sql = "select * from member_mail ";/* where name='이순신' 맨뒤에 이렇게 붙여주면 이순신만 검색됨 */
$result = mysqli_query($conn, $sql);

$arr = array(); //배열 선언


if( mysqli_num_rows($result) > 0 ){ //데이터가 들어 있다면
    while( $row = mysqli_fetch_array($result) ){
        array_push($arr, array(
            "이름" => $row['name'],
            "이메일" => $row['mail']
        ));
    }

}

$json = json_encode($arr, JSON_UNESCAPED_UNICODE);
        file_put_contents('./data/member_mail.json', $json);

        // echo $json;

// -------------------------------------------------

//푸터 가져오기
include_once('./footer.php');
?>