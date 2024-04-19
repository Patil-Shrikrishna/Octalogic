import { useDispatch } from "react-redux";
import { loginSuccess } from "./actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ButtonComponent from "./ButtonComponent";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

function Login() {
  const dispatch = useDispatch();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(loginSuccess(data.email));
  };

  const handleCancel = () => {
    form.reset();
  };

  return (
    <div className="flex gap-1 w-1/2 justify-center items-center rounded-md p-4 bg-white ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <h1 className="text-3xl">Login</h1>
          <FormField
            className=""
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            className=""
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
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
              name="Login"
              className="bg-[#FEC0CA] text-black text-xl py-6 px-8"
              type="submit"
            />
          </div>
        </form>
      </Form>
    </div>
  );
}

export default Login;
