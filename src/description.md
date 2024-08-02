# fetch

자바스크립트상에서 api를 호출할 수 있게 도와주는 도구(함수) : fetch

# 데이터 fetching 하는 방법? (메소드)

CRUD

Create / Read / Update / delete

GET() - (역할)Read
POST() - (역할)Create
UPDATE() - (역할)Update
DELELE() - (역할)delete

# REST API

리소스(자원, 데이터)를 주고 받을 때, 어떤 형태로 주고받을지 그런 방법에 대한 개념.

# axios

fetch 불편한 점.
헤더 설정 로그인 구현할 때 -> JWT (AccessToken, RefreshToken)
header 설정 공통화 편의

axios는 라이브러리라서 설치 먼저해야됨. npm i axios
그리고 임포트해서 쓰기.

# 동기 / 비동기

순차적으로.

1()
2()
3()
4()

console.log("1")
console.log("2")
console.log("3")
console.log("4")

비동기

1()
2() -- data fetching 1초정도
3()
4()

#
