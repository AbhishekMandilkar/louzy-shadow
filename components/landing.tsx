"use client";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@nextui-org/button";
import { MoonStars } from "@phosphor-icons/react";
import Link from "next/link";


export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen w-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
          <Link className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit font-mono text-xl">moon-light</p>
          </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <LoginLink>
              <Button color="primary" variant='light'>
                Log in <span aria-hidden="true">&rarr;</span>
              </Button>
            </LoginLink>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Some stupid marketing headline here
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
              merninisti licere mihi ista probare, quae sunt a te dicta? Refert
              tamen, quo modo.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <LoginLink>
                <Button color="primary" variant="shadow">Get started</Button>
              </LoginLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
