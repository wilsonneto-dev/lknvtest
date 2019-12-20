import React, { useEffect, useState } from 'react';
import MoviesList from '../../shared/components/MoviesList';
import api from '../../services/api';
import './style.scss';

export default props => {
  // hooks
  const [sections, setSections] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  // data
  const getData = async () => {
    const response = await api.get('/api/sections');

    // mapping api fields
    const data = response.data.ListSectionResult.Sections.map(item => ({
      id: item.Id,
      name: item.Name,
      url: item.URL,
    }));

    setSections(data);
  };

  return (
    <>
      {sections.map(section => (
        <MoviesList key={section.id} {...section} />
      ))}
    </>
  );
};
