import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PropTypes from "prop-types";

function TableComponent({ tableHeaders, data }) {
  console.log("type of data.courses :", typeof data.courses);
  console.log("data", data.courses);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {tableHeaders.map((item) => (
            <TableHead key={item} className="w-[100px]">
              {item}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="">
        {data.map((item, index) => (
          <TableRow key={index} className="">
            {Object.entries(item).map(([key, value]) => (
              <TableCell key={key} className="font-medium">
                {value}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
TableComponent.propTypes = {
  tableHeaders: PropTypes.array,
  data: PropTypes.array,
};

export default TableComponent;
