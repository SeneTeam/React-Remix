import { Form, useActionData, useNavigate } from "@remix-run/react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AddTransactionForm() {
  const actionData = useActionData() as { error?: string };
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card bg-base-100 shadow-xl"
    >
      <div className="card-body">
        <h2 className="card-title">add new transaction</h2>
        <Form method="post" onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label htmlFor="amount" className="label">
              <span className="label-text">amount</span>
            </label>
            <input
              type="number"
              step="0.01"
              name="amount"
              id="amount"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label htmlFor="description" className="label">
              <span className="label-text">description</span>
            </label>
            <input
              type="text"
              name="description"
              id="description"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label htmlFor="category" className="label">
              <span className="label-text">category</span>
            </label>
            <input
              type="text"
              name="category"
              id="category"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label htmlFor="date" className="label">
              <span className="label-text">date</span>
            </label>
            <input
              type="date"
              name="date"
              id="date"
              required
              className="input input-bordered"
            />
          </div>
          <div className="flex justify-between">
            <motion.button
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "adding..." : "add transaction"}
            </motion.button>
            <motion.button
              type="button"
              onClick={() => navigate("/")}
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              cancel
            </motion.button>
          </div>
        </Form>
        {actionData?.error && (
          <p className="text-error mt-2">{actionData.error}</p>
        )}
      </div>
    </motion.div>
  );
}
