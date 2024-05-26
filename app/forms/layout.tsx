import CreateForm from "@/components/create-form";
import {Button} from "@/components/ui/button";
import TabHeader from "@/components/ui/typography/tab-header";
import {PlusIcon} from "lucide-react";
import Link from "next/link";
import React from "react";

function FormLayoutOut({ children }: { children: React.ReactNode }) {

  return (
    <section className="flex flex-col flex-1 w-full h-full self-stretch px-4 py-2">
      <div className="flex flex-row justify-between items-center">
        <TabHeader className="flex-1 flex justify-between items-center my-2">
          Forms
          <Button asChild>
            <Link href="?newForm=true">
              <PlusIcon size={24} className="mr-2" />
              Create new
            </Link>
          </Button>
        </TabHeader>
      </div>
      <div className="flex flex-1 w-full h-full">{children}</div>
      <CreateForm />
    </section>
  );
}

export default FormLayoutOut;

