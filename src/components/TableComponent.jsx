import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import optionIcon from "../assets/options.png";
import disabledOptionIcon from "../assets/disabledOptions.png";
import PropTypes from "prop-types";
import DropDown from "./DropDown";
import { Input } from "./ui/input";
import searchIcon from "../assets/search.png";
function TableComponent({ tableHeaders, data, rows, category }) {
  const [showAllRecords, setShowAllRecords] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const filteredCourses = data.filter((course) =>
    course?.name?.toLowerCase().includes(searchItem?.toLowerCase())
  );

  const visibleData = searchItem
    ? filteredCourses
    : showAllRecords
    ? data
    : data.slice(0, rows);

  const toggleShowAllRecords = () => {
    setShowAllRecords((prev) => !prev);
  };

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <div className="">
      <div className="flex justify-between mb-4">
        <p className="text-[#83858B] text-xl uppercase font-semibold">
          {category === "student" && "Best students"}
          {category === "enrollment" && "latest enrollments"}
          {category === "course" && "Course List"}
        </p>
        {category === "course" ? (
          <div className="w-80 flex bg-white border border-gray-400 rounded-md p-1 items-center justify-center">
            <label htmlFor="searchbox">
              <img src={searchIcon} className="w-6" />
            </label>
            <Input
              type="text"
              name="searchbox"
              placeholder="Search"
              className="focus:outline-none border-none"
              onChange={(e) => handleChange(e)}
              style={{ outline: "none !important" }}
            />
          </div>
        ) : !showAllRecords && (category === "enrollment" || "student") ? (
          <button
            onClick={toggleShowAllRecords}
            className="text-[#901E75] text-lg font-semibold"
          >
            View all {category}s
          </button>
        ) : (
          <button
            onClick={toggleShowAllRecords}
            className="text-[#901E75] text-lg font-semibold"
          >
            Less
          </button>
        )}
      </div>
      <Table className="bg-white">
        <TableHeader>
          <TableRow>
            {tableHeaders.map((item) => (
              <TableHead key={item} className="w-[100px] text-black font-bold">
                {item}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {visibleData.map((item, index) => (
            <TableRow key={index} className="">
              {Object.entries(item).map(([key, value]) => (
                <TableCell key={key} className="font-medium">
                  {Array.isArray(value) ||
                  value === "Active" ||
                  value === "Closed" ||
                  value === "Archieved" ? (
                    Array.isArray(value) ? (
                      <>
                        {item.status === "Closed" && (
                          <DropDown options={value} src={disabledOptionIcon} />
                        )}
                        {item.status === "Active" && (
                          <DropDown options={value} src={optionIcon} />
                        )}
                        {item.status === "Archieved" && (
                          <DropDown options={value} src={optionIcon} />
                        )}
                      </>
                    ) : (
                      <>
                        {value === "Active" && (
                          <p className="w-fit rounded-md px-2 py-1 bg-[#CFF9DF]">
                            Active
                          </p>
                        )}
                        {value === "Closed" && (
                          <p className="w-fit rounded-md px-2 py-1 bg-[#FEC0CA]">
                            Closed
                          </p>
                        )}
                        {value === "Archieved" && (
                          <p className="w-fit rounded-md px-2 py-1 bg-[#E5E7EB]">
                            Archieved
                          </p>
                        )}
                      </>
                    )
                  ) : (
                    value
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

TableComponent.propTypes = {
  tableHeaders: PropTypes.array,
  data: PropTypes.array,
  rows: PropTypes.number,
  category: PropTypes.string,
};

export default TableComponent;
