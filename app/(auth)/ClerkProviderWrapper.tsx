// app/ClientLayout.tsx
"use client";

import { ClerkProvider } from "@clerk/nextjs";

export default function ClerkProviderWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClerkProvider afterSignOutUrl={"/"}>{children}</ClerkProvider>;
}
