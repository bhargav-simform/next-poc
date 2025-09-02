import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import LoginForm from "./form";
import { ServerLoadingVariants } from "../../components/ServerLoadingFallback";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  console.log({ session });

  if (session) {
    redirect("/");
  }

  return (
    <Suspense fallback={<ServerLoadingVariants.FullPage message="Loading login..." />}>
      <LoginForm />
    </Suspense>
  );
}
