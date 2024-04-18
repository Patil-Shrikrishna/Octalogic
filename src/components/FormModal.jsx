import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PropTypes from "prop-types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import DropDown from "./DropDown";
import ButtonComponent from "./ButtonComponent";
import { Button } from "./ui/button";

const formSchema = z.object({
  courseName: z.string().min(2, {
    message: "Course name must be at least 2 characters.",
  }),
  description: z.string(),
  instructor: z.string(),
  price: z.string().refine((value) => !isNaN(parseFloat(value)), {
    message: "Price must be a number.",
  }),
  instrument: z.string(),
  dayOfWeek: z.number(),
});

function FormModal({ closeModal }) {
  const instrument = [
    "Guitar",
    "Drum set",
    "Singing",
    "Flute",
    "Piano",
    "Violin",
    "Saxophone",
    "Trumpet",
  ];
  const daysOfWeek = ["1", "2", "3", "4", "5", "6", "7"];
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      courseName: "",
      description: "",
      instructor: "",
      instrument: "",
      dayOfWeek: "",
      price: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <div className="flex gap-1 w-1/2 justify-center items-center rounded-md p-4 bg-white ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <h1 className="text-3xl">Add Course</h1>
          <FormField
            className=""
            control={form.control}
            name="courseName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Course name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            className=""
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            className=""
            control={form.control}
            name="instructor"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Instructor" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DropDown
            name="Instrument"
            menu={instrument}
            className="w-full text-[#83858B] "
          />
          <DropDown
            name="Days of the week"
            menu={daysOfWeek}
            className="w-full text-[#83858B] "
          />
          <FormField
            className=""
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="number" placeholder="Price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end ">
            <ButtonComponent
              name="Cancel"
              className="bg-white text-black text-xl py-6 px-8"
              onClick={handleCancel}
            />
            <ButtonComponent
              type="submit"
              name="Add Course"
              className="bg-[#FEC0CA] text-black text-xl py-6 px-8"
            />
          </div>
        </form>
      </Form>
    </div>
  );
}
FormModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
export default FormModal;
