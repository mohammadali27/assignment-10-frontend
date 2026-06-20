"use client";
import CompanyCards from "@/components/CardCode";
import { useSession } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";
import React from "react";

const RequterPage = () => {
  const { data: session, isPending } = useSession();
  if (isPending) {
    return (
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <Spinner color="current" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <Spinner color="accent" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <Spinner color="success" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <Spinner color="warning" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <Spinner color="danger" />
        </div>
      </div>
    );
  }
  const user = session?.user;
  return (
    <>
      <div className="inline-block text-2xl font-bold p-2  text-blue-800 bg-amber-600 rounded-2xl ">
        Well Come back Mr.{user?.name}
      </div>
      <div className="">
        <CompanyCards />
      </div>
    </>
  );
};

export default RequterPage;
