import React from 'react';

export default ({ id, title, image }) => {
  return (
    <>
      {id} {title} <img width={227} src={image} />
    </>
  );
};
