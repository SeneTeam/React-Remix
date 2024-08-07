import { json, redirect, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import WelcomeWidget from '~/components/WelcomeWidget';
import { getUserId } from "~/utils/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);
  if (userId) {
    return redirect("/dashboard");
  }
  return json({ isLoggedIn: false });
};

export default function Index() {
  const { isLoggedIn } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold text-center mb-8">finance tracker</h1>
      {!isLoggedIn && <WelcomeWidget />}
      <div className="flex-grow"></div>
      <footer className="text-center text-sm text-gray-600 mt-8 pb-4">
        created with ❤️ by{" "}
        <a 
          href="https://x.com/danizeres" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          @danizeres
        </a>
      </footer>
    </div>
  );
}