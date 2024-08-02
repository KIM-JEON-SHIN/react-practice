/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios';

import React from 'react';

const URL = 'https://nomad-movies.nomadcoders.workers.dev';

function Card() {
  const getMovies = async () => {
    const movies = await axios.get(`${URL}/movies`);
    const movieId = movies.data[0].id;
    const moviewDetail = await axios.get(`${URL}/movies/${movieId}`);
    console.log(moviewDetail.data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div>Card</div>;
}

export default Card;

// function Card() {
//   const [name, setName] = useState();
//   const [people, setPeople] = useState([]);

//   const getPeople = () => {
//     const response = axios.get(URL).then(res => {
//       console.log(res);
//       setPeople(res.data);
//       return res;
//     });
//   };
//   // const response = axios.get(URL).then(res => res);

//   useEffect(() => {
//     getPeople();
//   }, []);

//   // Promise를 실제 데이터로 바꾸는 방법.
//   // 2가지가 있는거야
//   // Promise에 있는 .then()와 같은 메서드로.
//   // async await

//   return (
//     <div>
//       {JSON.stringify(people)}
//       <button
//         onClick={() => {
//           setName({});
//         }}
//       >
//         내말이 틀릴 수도 있잖아?
//       </button>
//     </div>
//   );
// }

// export default Card;

/**
 * hooks
 *
 * 리액트에서 변수의 상태를 관리하기 위한 함수들의 집합체다.
 * useState의 첫인자는?
 *
 * 
 *   const res = await fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

 * 상태를 만들게.
 * 상태 === 리액트 안에서 쓰는 변수
 * React 변수관리 <<
 *
 *
 * Class형 컴포넌트 (useEffect)
 */

// axios

// Promise

//
