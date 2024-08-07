import { Link } from "@remix-run/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold text-gray-800">
            finance tracker
          </Link>
          <Link 
            to="/add-transaction" 
            className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
          >
            add transaction
          </Link>
        </div>
      </nav>
      <main className="container mx-auto mt-4 px-4">
        {children}
      </main>
    </div>
  );
}
