import PropTypes from "prop-types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function AvatarIcon({ src, alt }) {
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} className="bg-[#B2EECF] px-2 py-3" />
      <AvatarFallback>{alt}</AvatarFallback>
    </Avatar>
  );
}

AvatarIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default AvatarIcon;
