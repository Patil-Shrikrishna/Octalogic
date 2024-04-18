import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";

function ButtonComponent({ className, icon, name, type, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Button
      className={className}
      type={type}
      onClick={onClick ? handleClick : undefined}
    >
      {icon && <img src={icon} className="mr-6 h-4 w-4" />} {name}
    </Button>
  );
}
ButtonComponent.defaultProps = {
  type: "button",
};
ButtonComponent.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func,
};
export default ButtonComponent;
