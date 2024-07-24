/* eslint-disable no-unused-vars */
import { useState } from 'react';

function Card() {
  const [name, setName] = useState();

  return (
    <div>
      <button
        onClick={() => {
          setName({});
        }}
      >
        내말이 틀릴 수도 있잖아?
      </button>
    </div>
  );
}

export default Card;

/**
 * hooks
 *
 * 리액트에서 변수의 상태를 관리하기 위한 함수들의 집합체다.
 * useState의 첫인자는?
 *
 * 상태를 만들게.
 * 상태 === 리액트 안에서 쓰는 변수
 * React 변수관리 <<
 *
 *
 * Class형 컴포넌트 (useEffect)
 */
