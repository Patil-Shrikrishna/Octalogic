import PropTypes from "prop-types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DropDown = ({ name, menu }) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] text-[#83858B]">
        <SelectValue placeholder={name} />
      </SelectTrigger>
      <SelectContent className="text-[#83858B]">
        <SelectGroup>
          {menu.map((item, index) => (
            <SelectItem
              key={item + index}
              value={item}
              className="text-[#83858B]"
            >
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
DropDown.propTypes = {
  name: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
};
export default DropDown;
