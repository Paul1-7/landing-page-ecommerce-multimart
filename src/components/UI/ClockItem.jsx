import PropTypes from 'prop-types';
import '~/styles/clockItem.css';

const ClockItem = ({ label, time, withColon = true }) => {
  return (
    <div className="clock__data d-flex align-items-center gap-3">
      <div className="text-center">
        <h1 className="text-white  mb-2 time-clock">{time}</h1>
        <h5 className="text-white label-clock">{label}</h5>
      </div>
      {withColon && <span className="text-white ">:</span>}
    </div>
  );
};

ClockItem.propTypes = {
  label: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  withColon: PropTypes.bool
};

export default ClockItem;
