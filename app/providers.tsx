"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { DndContext } from "@dnd-kit/core";
import DesignerContextProvider from "@/components/context/DesignerContext";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <>
      <DesignerContextProvider>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </DesignerContextProvider>
    </>
  );
}
