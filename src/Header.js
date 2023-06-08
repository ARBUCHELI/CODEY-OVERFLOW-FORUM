import React from 'react';

const Header = (props) => {
  return (
    <>
      <img src={props.profileImg} alt="profile"></img>
      <h1>{props.username}</h1>
    </>
  )
}

export default Header;
