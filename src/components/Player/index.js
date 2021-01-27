import React, { useState, useEffect } from 'react';

const Player = ({ url }) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return (
    <div>
      <button className="btn btn-primary" onClick={toggle}>
        {playing ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Player;
