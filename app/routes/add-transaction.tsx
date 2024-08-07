import { json, redirect, type ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useNavigate } from "@remix-run/react";
import { db } from "~/utils/db.server";
import { motion } from "framer-motion";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const amount = formData.get("amount");
  const description = formData.get("description");
  const category = formData.get("category");
  const date = formData.get("date");

  if (
    typeof amount !== "string" ||
    typeof description !== "string" ||
    typeof category !== "string" ||
    typeof date !== "string"
  ) {
    return json({ error: "invalid form data" }, { status: 400 });
  }

  try {
    await db.transaction.create({
      data: {
        amount: parseFloat(amount),
        description,
        category,
        date: new Date(date),
      },
    });
    return redirect("/");
  } catch (error) {
    return json({ error: "Failed to create transaction" }, { status: 500 });
  }
};

export default function AddTransaction() {
  const actionData = useActionData<typeof action>();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">add new transaction</h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto"
      >
        <Form method="post" className="space-y-4">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              amount
            </label>
            <input
              type="number"
              step="0.01"
              name="amount"
              id="amount"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="flex justify-between">
            <motion.button
              type="submit"
              className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              add transaction
            </motion.button>
            <motion.button
              type="button"
              onClick={() => navigate("/")}
              className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              cancel
            </motion.button>
          </div>
        </Form>
        {actionData?.error && (
          <p className="text-red-500 mt-2">{actionData.error}</p>
        )}
      </motion.div>
    </div>
  );
}
