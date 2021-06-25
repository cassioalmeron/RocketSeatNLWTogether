import { useCallback } from 'react';
import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  const handleCopyRoomCodeToClipboard = useCallback(() => {
    navigator.clipboard.writeText(props.code);
  }, [props.code]);

  return (
    <button className="room-code" onClick={handleCopyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  );
}
