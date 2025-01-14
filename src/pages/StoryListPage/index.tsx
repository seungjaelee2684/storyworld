import React from 'react'
import { useParams } from 'react-router-dom';

const StoryListPage = () => {

  const { storysId } = useParams();

  return (
    <div>{storysId}</div>
  )
};

export default StoryListPage;