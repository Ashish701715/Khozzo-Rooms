import { Metadata } from "next";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "./index";
import { NavLink } from "react-router";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-blur">
      <div className="grid grid-cols-1">
        <div className=" px-4 sm:px-6 md:max-w-md lg:max-w-[26rem] bg-white p-[30px] rounded-[30px]">
          {/* Content */}
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 text-center">
            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Login to your account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>

            {/* Form */}
            <div>
              <UserAuthForm />
            </div>

            {/* Terms */}
            <p className="px-4 text-xs text-muted-foreground sm:px-8 sm:text-sm">
              By clicking continue, you agree to our{" "}
              <NavLink
                to=""
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </NavLink>{" "}
              and{" "}
              <NavLink
                to=""
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
