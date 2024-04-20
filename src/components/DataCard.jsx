import PropTypes from "prop-types";
import profile from "../assets/profile.png";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AvatarIcon from "./AvatarIcon";

function DataCard({ stat, desc }) {
  return (
    <Card className="w-full whitespace-nowrap">
      <CardHeader className="m-0 p-0 px-4 py-3">
        <div className="flex">
          <AvatarIcon src={profile} alt="Profile" />
          <div className="flex flex-col ml-4">
            <CardTitle>{stat}</CardTitle>
            <CardDescription>{desc}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardHeader className="m-0 p-0 px-4 pb-3">
        <p
          className="flex justify-end cursor-pointer"
          onClick={() => console.log("view clicked")}
        >
          View
        </p>
      </CardHeader>
    </Card>
  );
}
DataCard.propTypes = {
  stat: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default DataCard;
