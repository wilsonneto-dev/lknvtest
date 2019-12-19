import React, { useEffect, useState } from 'react';

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
      Id: item.Id,
      Name: item.Name,
      URL: item.URL,
    }));

    setSections(data);
  };

  return (
    <>
      {sections.map(section => (
        <div>
          <h2>{section.Name}</h2>
        </div>
      ))}
    </>
  );
};
