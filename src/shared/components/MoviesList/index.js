import React, { useState, useEffect } from 'react';
import MovieListItem from '../MovieListItem';
import api from '../../../services/api';

export default ({ name, id }) => {
  // states
  const [midias, setMidias] = useState([]);

  // events
  useEffect(() => {
    getData();
  }, []);

  // data
  const getData = async () => {
    const response = await api.get(
      `/api/sections/${id}/medias?ImageTypeIds=-1`
    );

    const data = response.data.map(item => ({
      id: item.Id,
      title: item.FullTitle,
      image: item.Images.find(x => x.TypeId === -1).Url,
      url: item.UniqueUrl,
    }));

    setMidias(data);
  };

  // component
  return (
    <>
      <h2>
        #{id} {name}
      </h2>
      <ul>
        {midias.map(item => (
          <MovieListItem key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
};
