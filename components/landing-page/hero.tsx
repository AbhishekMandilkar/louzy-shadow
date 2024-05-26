'use client';
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import NavLink from "./nav-link";

const Hero = () => (
  <section>
    <div className="py-28 text-foreground duration-150">
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl text-foreground-800 font-extrabold mx-auto sm:text-6xl">
          Build and scale your next business idea faster
        </h1>
        <p className="max-w-xl mx-auto foreground-200">
          Blinder making it simple for you to build and grow your SaaS
          applications, or any business idea.
        </p>
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
          <LoginLink className="py-2.5 px-4 text-center rounded-lg duration-150 text-background bg-foreground-800 hover:bg-gray-600 active:bg-gray-900  ">
            Start building
          </LoginLink>
          <NavLink
            href="#cta"
            className="text-gray-700 border hover:bg-gray-50"
            scroll={false}
          >
            Learn more
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
