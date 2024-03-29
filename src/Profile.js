import React from 'react';

const data = {
  velopert: {
    name: 'aaa',
    description: 'bbbbb',
  },
  gildong: {
    name: '홍길동',
    description: '고전 소설 홍길동전의 주인공',
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  console.log(match);
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자 입니다.</div>;
  }
  return (
    <div>
      <hr />
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
