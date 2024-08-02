const promiseTest = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('결과');
    }, 5000);
  });

  return promise;
};

const func = async () => {
  const movieList = await promiseTest();
  const moview = await axios.get('URL + moviewList[0].id ');
  const author = await moview.author;

  console.log('테스트');
  console.log(result);
};

//300줄이

// console.log(result);

// 1번째 문제 순차적인 실행에 어려움.
// 2번째 문제 - 콜백 지옥.
// -> async / await ES6 (2015)
// ECMA Script 2015 -> ES6 (화살표함수, async/await, template reteral)
// ECMA Script 2016 -> ES7

// 1. 페이지에 들어왔을 때, movieList
// 2. moviewList안에서 영화하나골라서 moive
// 3. author
