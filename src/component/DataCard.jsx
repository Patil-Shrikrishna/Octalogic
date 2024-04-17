import PropTypes from "prop-types";
import profile from "../assets/profile.png";
const DataCard = (props) => {
  return (
    <div className="bg-white rounded-md w-fit py-4 px-6">
      {/* top */}
      <div className="flex gap-4 justify-center items-center">
        <div className="flex justify-center items-center bg-[#B2EECF] rounded-full w-10 h-10 p-2">
          <img src={profile} className="h-4" />
        </div>
        <div>
          <p className="text-xl font-bold">{props.number}</p>
          <p className="text-sm">{props.desc}</p>
        </div>
      </div>
      {/* bottom */}
      <div className="flex justify-end">
        <p>View</p>
      </div>
    </div>
  );
};

DataCard.propTypes = {
  number: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default DataCard;
