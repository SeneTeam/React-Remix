import { json, type ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData, Link } from "@remix-run/react";
import { register, createUserSession } from "~/utils/session.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  if (typeof username !== "string" || typeof password !== "string") {
    return json({ error: "invalid form data" }, { status: 400 });
  }

  const existingUser = await register({ username, password });
  if (!existingUser) {
    return json({ error: "user already exists" }, { status: 400 });
  }

  return createUserSession(existingUser.id, "/dashboard");
};

export default function Signup() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-3xl font-bold text-center mb-8">sign up</h1>
      <Form method="post" className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          sign up
        </button>
      </Form>
      {actionData?.error && (
        <p className="text-red-500 mt-2">{actionData.error}</p>
      )}
      <p className="mt-4 text-center">
        already have an account?{" "}
        <Link to="/login" className="text-indigo-600 hover:text-indigo-500">
          log in
        </Link>
      </p>
    </div>
  );
}
