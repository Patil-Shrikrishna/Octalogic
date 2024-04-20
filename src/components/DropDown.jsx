import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import PropTypes from "prop-types";

function DropDown({ options, src }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <img src={src} className="w-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit flex flex-col rounded-md bg-white p-2 border border-gray-300">
        {options.map((item) => (
          <DropdownMenuCheckboxItem
            className="p-2 cursor-pointer hover:bg-gray-200"
            key={item}
          >
            {item}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
DropDown.propTypes = {
  options: PropTypes.array,
  src: PropTypes.string,
};
export default DropDown;
