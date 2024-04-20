import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "@/redux/actions/authActions";
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
import ButtonComponent from "@/components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const auth = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    dispatch(loginSuccess(data.email));
    sessionStorage.setItem("isAuthenticated", "true");
  };

  useEffect(() => {
    console.log("Auth state changed:", auth.isAuthenticated);
    if (auth.isAuthenticated) {
      console.log("Redirecting to overview page");
      navigate("/overview");
    }
  }, [auth.isAuthenticated, navigate]);

  const handleCancel = () => {
    form.reset();
  };

  return (
    <div className="w-full h-svh flex justify-center items-center">
      <div className="flex w-fit rounded-md p-4 bg-white ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <h1 className="text-3xl text-center font-bold text-[#B2EECF] text-shadow tracking-widest">
              Music School
            </h1>
            <h1 className="text-3xl text-center">Login</h1>
            <FormField
              className=""
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email"
                      {...field}
                      className="focus:outline-none"
                      autoComplete="username"
                    />
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
                    <Input
                      type="password"
                      placeholder="Password"
                      {...field}
                      className="focus:outline-none"
                      autoComplete="current-password"
                    />
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
    </div>
  );
}

export default Login;
