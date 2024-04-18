import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";

function ButtonComponent({ className, icon, name }) {
  return (
    <Button className={className}>
      {icon && <img src={icon} className="mr-6 h-4 w-4" />} {name}
    </Button>
  );
}
ButtonComponent.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
};
export default ButtonComponent;
