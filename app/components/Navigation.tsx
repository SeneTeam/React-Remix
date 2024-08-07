import { Form, Link } from "@remix-run/react";

export default function Navigation() {
  return (
    <nav className="bg-gradient-to-r from-pastel-pink to-pastel-blue shadow-md mb-8">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-white">
          finance tracker
        </Link>
        <ul className="flex space-x-6 items-center">
          <li>
            <a 
              href="https://x.com/danizeres" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition duration-300"
            >
              appreciation 👍🏻
            </a>
          </li>
          <li>
            <Form action="/logout" method="post">
              <button type="submit" className="text-white hover:text-gray-600 transition duration-300 italic">
                logout
              </button>
            </Form>
          </li>
        </ul>
      </div>
    </nav>
  );
}
