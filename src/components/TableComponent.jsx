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
import PropTypes from "prop-types";

function TableComponent({ tableHeaders, data, rows, category }) {
  const [showAllRecords, setShowAllRecords] = useState(false);

  const visibleData = showAllRecords ? data : data.slice(0, rows);

  const toggleShowAllRecords = () => {
    setShowAllRecords((prev) => !prev);
  };

  return (
    <div>
      <div className="flex justify-between">
        <p className="text-[#83858B] text-xl uppercase font-semibold">
          {category === "student" && "Best students"}
          {category === "enrollment" && "latest enrollments"}
          {category === "course" && "Course List"}
        </p>
        {!showAllRecords && (
          <button
            onClick={toggleShowAllRecords}
            className="text-[#901E75] text-xl font-semibold"
          >
            View all {category}s
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
                      <img src={optionIcon} className="h-4" />
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
