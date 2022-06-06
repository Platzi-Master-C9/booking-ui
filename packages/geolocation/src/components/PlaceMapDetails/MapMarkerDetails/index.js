import img_mk2 from './images/2ns point marker.png';

const MapMarkerDetails = ({ text }) => {
  return (
    <div style={{ color: 'orangered' }} className="rs_marker">
      <img
        style={{ height: '30px', width: '30px' }}
        className="rs_marker"
        src={img_mk2}
        alt=""
      />
      {text}
    </div>
  );
};
export default MapMarkerDetails;
