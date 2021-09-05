import React, { useEffect, useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  useEffect(() => {
    console.log('랜더링이 완료되었습니다.');
    console.log({
      name,
      nickname,
    });
    return () => {
      console.log('cleanup');
    };
  }, []);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNikcname = (e) => {
    setNickname(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName}></input>
        <input value={nickname} onChange={onChangeNikcname}></input>
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <b>닉네임:</b> {nickname}
      </div>
    </div>
  );
};

export default Info;
