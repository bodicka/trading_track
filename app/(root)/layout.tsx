import Header from "@/components/Header";
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const sesion = await auth.api.getSession({ headers: await headers() });
  if (!sesion?.user) redirect("/sign-in");

  const user = {
    id: sesion.user.id,
    name: sesion.user.name,
    email: sesion.user.email,
  }

  return (
    <main className="min-h-screen text-gray-400">
      <Header user={user} />
      <div className="container py-10">{children}</div>
    </main>
  );
};

export default Layout;
