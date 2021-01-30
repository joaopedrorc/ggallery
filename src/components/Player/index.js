import React, { useState, useEffect } from 'react';

import { Styles } from './styles';

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
    <Styles>
      <div className="button-container">
        <div className="button-wrapper">
          <button className="btn btn-color" onClick={toggle}>
            {playing ? 'Pause song' : 'Play song'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              className="icon"
              fill="currentColor"
              class="bi bi-play-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>
          </button>
        </div>
      </div>
    </Styles>
  );
};

export default Player;
