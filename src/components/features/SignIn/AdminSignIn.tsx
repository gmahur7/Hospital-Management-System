"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Typography } from "@/components/ui/typography";
import { Eye, EyeClosed, UserLock } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const loginSchema = z.object({
  username: z.string().min(4, "Username must have atleast 4 characters"),
  password: z.string().min(8, "Username must have atleast * characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const DoctorSignIn = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <section className="py-4">
      <div className="flex flex-col items-center justify-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src="" />
          <AvatarFallback>
            <UserLock />
          </AvatarFallback>
        </Avatar>

        <div className="flex w-full items-center gap-4">
          <hr className="flex-grow border-gray-300 font-bold" />
          <Typography
            variant="h5"
            align="center"
            className="font-semibold whitespace-nowrap"
          >
            Admin Login
          </Typography>
          <hr className="flex-grow border-gray-300 font-bold" />
        </div>

        <form
          className="flex w-full flex-col gap-4 px-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full">
            <Input
              {...register("username")}
              placeholder="Username"
              className="w-full"
            />
            {errors.username && (
              <Typography variant="muted" className="mt-1 text-red-500">
                {errors.username.message}
              </Typography>
            )}
          </div>
          <div className="relative w-full">
            <Input
              {...register("password")}
              type={isShowPassword ? "text" : "password"}
              placeholder="********"
              className="w-full"
            />
            <Button
              type="button"
              onClick={() => setIsShowPassword(!isShowPassword)}
              className={`absolute right-2 bg-transparent hover:bg-transparent ${errors.password ? "top-[30%]" : "top-1/2"} text-muted-foreground hover:text-foreground -translate-y-1/2 transition-colors`}
              aria-label={isShowPassword ? "Hide password" : "Show password"}
            >
              {isShowPassword ? (
                <Eye strokeWidth={1.75} className="h-5 w-5" />
              ) : (
                <EyeClosed strokeWidth={1.75} className="h-5 w-5" />
              )}
            </Button>
            {errors.password && (
              <Typography variant="muted" className="mt-1 text-red-500">
                {errors.password.message}
              </Typography>
            )}
          </div>
          <div className="w-full">
            <Button type="submit" className="w-full">
              <Typography
                className="text-white dark:text-black"
                weight="semibold"
              >
                Sign In
              </Typography>
            </Button>
          </div>
        </form>

        <div className="mt-8 flex w-full items-center gap-4">
          <hr className="grow border-gray-300 font-bold" />
          <Typography
            variant="h5"
            align="center"
            className="font-semibold whitespace-nowrap"
          >
            Continue With
          </Typography>
          <hr className="grow border-gray-300 font-bold" />
        </div>

        <div className="flex w-full justify-center gap-4">
          <Button className="bg-border w-full border md:w-[48%]">
            <Avatar>
              <AvatarImage src="assets/images/login/google.png" />
              <AvatarFallback>G</AvatarFallback>
            </Avatar>
            <Typography weight="semibold">Google</Typography>
          </Button>
          <Button className="bg-border w-full border md:w-[48%]">
            <Avatar>
              <AvatarImage src="assets/images/login/github.png" />
              <AvatarFallback>G</AvatarFallback>
            </Avatar>
            <Typography weight="semibold">Github</Typography>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorSignIn;
