import img_mk2 from './images/2ns point marker.png';

const MapMarkerDetails = ({ text }) => {
  return (
    <div style={{ color: 'orangered' }} className="rs_marker">
      <img
        style={{ height: '50px', width: '50px' }}
        className="rs_marker"
        src="/places/2ns point marker.png"
        alt=""
      />
      {text}
    </div>
  );
};
export default MapMarkerDetails;
