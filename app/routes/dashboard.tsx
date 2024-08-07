import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useSubmit, Form, useActionData } from "@remix-run/react";
import { db } from "~/utils/db.server";
import SpendingChart from '~/components/SpendingChart';
import AIInsightsWidget from '~/components/AIInsightsWidget';
import Navigation from '~/components/Navigation';
import AIGreeting from '~/components/AIGreeting';
import { motion } from 'framer-motion';
import { requireUserId } from "~/utils/session.server";

// Define the list of categories
const categories = [
  "food/groceries",
  "travel",
  "dates",
  "babies/dogs/catz",
  "apartment/bills",
  "car"
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const userId = await requireUserId(request);
  
  const transactions = await db.transaction.findMany({
    where: { userId },
    orderBy: { date: 'desc' },
  });
  return json({ transactions });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const userId = await requireUserId(request);
  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "delete") {
    const id = formData.get("id");
    if (typeof id !== "string") {
      return json({ error: "Invalid ID" }, { status: 400 });
    }
    await db.transaction.delete({ where: { id } });
    return json({ success: true });
  }

  if (intent === "create") {
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
      return json({ error: "Invalid form data" }, { status: 400 });
    }

    if (description.length > 10) {
      return json({ error: "Description must be 10 characters or less" }, { status: 400 });
    }

    if (!categories.includes(category)) {
      return json({ error: "Invalid category" }, { status: 400 });
    }

    await db.transaction.create({
      data: {
        amount: parseFloat(amount),
        description,
        category,
        date: new Date(date),
        userId,
      },
    });
    return json({ success: true });
  }

  return json({ error: "Invalid intent" }, { status: 400 });
};

export default function Dashboard() {
  const { transactions } = useLoaderData<typeof loader>();
  const parsedTransactions = transactions.map(t => ({
    ...t,
    date: new Date(t.date),
    createdAt: new Date(t.createdAt),
    updatedAt: new Date(t.updatedAt)
  }));
  const actionData = useActionData<typeof action>();
  const error = actionData && 'error' in actionData ? actionData.error : null;
  const submit = useSubmit();

  const handleDelete = (id: string) => {
    if (confirm("r you sure you want to delete this transaction?")) {
      submit({ id, intent: "delete" }, { method: "post" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">your finance tracker</h1>
        
        <AIGreeting />
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">add new transaction</h2>
          <Form method="post" className="space-y-4">
            <input type="hidden" name="intent" value="create" />
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">amount</label>
              <input type="number" step="0.01" name="amount" id="amount" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">description (max 10 chars)</label>
              <input type="text" name="description" id="description" maxLength={10} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">category</label>
              <select name="category" id="category" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option value="">select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">date</label>
              <input type="date" name="date" id="date" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <button type="submit" className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              add transaction
            </button>
          </Form>
          {error && (
            <p className="text-red-500 mt-2">{error}</p>
          )}
        </div>

        <div className="mb-8">
          <SpendingChart transactions={parsedTransactions} />
        </div>
        
        {transactions.length >= 10 && transactions.length % 10 === 0 && (
          <motion.div className="mb-8">
            <AIInsightsWidget transactions={transactions.slice(-10)} />
          </motion.div>
        )}
        
        {transactions.length === 0 ? (
          <p className="text-center mt-4">no transactions yet. start adding some!</p>
        ) : (
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 text-left">date</th>
                  <th className="py-2 px-4 text-left">description</th>
                  <th className="py-2 px-4 text-left">category</th>
                  <th className="py-2 px-4 text-right">amount</th>
                  <th className="py-2 px-4 text-center">actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <motion.tr 
                    key={transaction.id} 
                    className="border-b"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <td className="py-2 px-4">{new Date(transaction.date).toLocaleDateString()}</td>
                    <td className="py-2 px-4">{transaction.description}</td>
                    <td className="py-2 px-4">{transaction.category}</td>
                    <td className="py-2 px-4 text-right">${transaction.amount.toFixed(2)}</td>
                    <td className="py-2 px-4 text-center">
                      <button
                        onClick={() => handleDelete(transaction.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
