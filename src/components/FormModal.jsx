import { useState } from "react";
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
import ButtonComponent from "./ButtonComponent";
import { addCourse } from "@/redux/actions/courseActions";
import { useDispatch } from "react-redux";

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
  dayOfWeek: z.string(),
});

function FormModal({ closeModal }) {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const instrumentOptions = [
    "Guitar",
    "Drum set",
    "Singing",
    "Flute",
    "Piano",
    "Violin",
    "Saxophone",
    "Trumpet",
  ];
  const daysOfWeekOptions = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

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
  const onSubmit = async (data) => {
    console.log("Form data:", data);
    const addCourseItem = {
      name: data.courseName,
      description: data.description,
      instructor: data.instructor,
      instrument: data.instrument,
      dayOfWeek: data.dayOfWeek,
      numberOfStudents: 10,
      price: data.price,
      status: "Open",
      actions: ["Edit course", "Close course", "Archieve course"],
    };

    const existingCourses = JSON.parse(localStorage.getItem("courses")) || [];

    const updatedCourses = [...existingCourses, addCourseItem];
    console.log("updatedCourses", updatedCourses);

    localStorage.setItem("courses", JSON.stringify(updatedCourses));
    const existingCourses1 = JSON.parse(localStorage.getItem("courses")) || [];
    console.log("existingCourses1", existingCourses1);

    dispatch(addCourse(addCourseItem));

    setFormSubmitted(true);
    setTimeout(() => {
      form.reset();
      closeModal();
      setFormSubmitted(false);
    }, 1000);
  };

  const handleCancel = () => {
    form.reset();
    closeModal();
  };

  return (
    <div className="flex gap-1 w-1/2 justify-center items-center rounded-md p-4 bg-white ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <h1 className="text-3xl">Add Course</h1>
          <FormField
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
          <FormField
            control={form.control}
            name="instrument"
            render={({ field }) => (
              <FormItem className="w-full text-gray-500 px-2 border border-gray-200 py-2 rounded-md">
                <FormControl>
                  <select
                    {...field}
                    className="flex justify-between w-full bg-transparent text-gray-500 leading-tight focus:outline-none"
                  >
                    <option value="">Instrument</option>
                    {instrumentOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dayOfWeek"
            render={({ field }) => (
              <FormItem className="w-full text-gray-500 px-2 border border-gray-200 py-2 rounded-md">
                <FormControl>
                  <select {...field} className="w-full">
                    <option value="">Day of the week</option>
                    {daysOfWeekOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
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
          <div className="flex justify-end">
            <ButtonComponent
              name="Cancel"
              className="bg-white text-black text-xl py-6 px-8"
              onClick={handleCancel}
            />
            <ButtonComponent
              name="Add Course"
              className="bg-[#FEC0CA] text-black text-xl py-6 px-8"
              type="submit"
              disabled={formSubmitted}
            />
          </div>
        </form>
      </Form>
    </div>
  );
}

FormModal.propTypes = {
  closeModal: PropTypes.func,
};

export default FormModal;
