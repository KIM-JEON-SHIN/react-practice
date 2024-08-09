/* eslint-disable react/prop-types */
import Card from './components/Card';
import Layout from './components/Layout';
import './components/layout.css';
import Navigation from './components/Navigation';

export const URL = 'https://retoolapi.dev/ptA9oC/people';

function App() {
  return <Layout navigation={<Navigation />} contents={<Card />} />;
}

export default App;
/*
props === { 
  navigation : <Navigation />,
  contents : <Card />
}

*/

/**
 * 1. data-fetching
 * 2. promise 처리하는 방법. 2가지 정도
 *  promise 는 객체 종류중에 하나. object
 * 3. 투두리스트 만들기 (로컬 스토리지)
 * 4. 백엔드랑 플젝하면서 알아야 할 것.
 *
 * XMLHttpRequest
 * fetch() 
 * https://nomad-movies.nomafdcoders.workers.dev/movies
 * 
 * https://inhyeok.co.kr/movies
 * 
 * 
 * fetch(https://google.com/search).get()
 * 
 * .then()
 * async await

 */

/**
 * prop 중에 children
 * 자식 컴포넌트
 *   */
