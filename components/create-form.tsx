"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetHeader,
  SheetClose,
  SheetFooter,
  SheetContent,
  Sheet,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function CreateForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const showCreateForm = searchParams.get("newForm");
  console.log(showCreateForm);

  const onClose = () => {
    router.replace("/forms");
  }

  return (
    <Sheet
      open={!!showCreateForm}
      onOpenChange={(open: boolean) => (!open ? onClose() : undefined)}
    >
      <SheetContent className="w-[400px] mx-auto m-2 border-1 border-default-100 rounded-lg">
        <SheetHeader>
          <SheetTitle>Create form</SheetTitle>
          <SheetDescription>
            Fill in the form details to create a new form.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value="Pedro Duarte" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" rows={3} />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" onClick={() => router.replace("/forms")}>
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default CreateForm;
