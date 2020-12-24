import React from 'react';
import WeekendIcon from '@material-ui/icons/Weekend';
import { SeatObj } from '../SearchResult/SearchResult';
import './seat.css';

type Props = {
  type: string;
  setSelector?: any;
  selectedSeat?: SeatObj;
  seat?: SeatObj;
};

const Seat: React.FC<Props> = ({ type, setSelector, selectedSeat, seat }) => {
  return (
    <div
      className={`seat  ${
        selectedSeat &&
        selectedSeat?.seatNumber === seat?.seatNumber &&
        !type.includes('booked')
          ? 'selected'
          : type
      }`}
    >
      <WeekendIcon
        onClick={() => setSelector(seat)}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default Seat;
