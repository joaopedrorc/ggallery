import React, { useState, useEffect } from 'react';

import { Styles } from './styles';
import { VolumeUp } from 'react-bootstrap-icons';

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
            <span>
              <VolumeUp size={35} className="icon" />
            </span>
          </button>
        </div>
      </div>
    </Styles>
  );
};

export default Player;
