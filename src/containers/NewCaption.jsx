import React, { useState } from 'react';
import CaptionForm from '../components/NewCaption/CaptionForm';

const NewCaption = () => {
  const [submittedVideos, setSubmittedVideos] = useState([]);

  const addNewVideo = (video) => {
    // Add the new video to state or send to backend/mock API
    setSubmittedVideos((prev) => [...prev, video]);
    console.log('New caption request:', video);
  };

  return (
    <>
      <CaptionForm addNewVideo={addNewVideo} />
    </>
  );
};

export default NewCaption;
