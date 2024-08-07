import { Form, Link } from "@remix-run/react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/newsletter-signup', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.success) {
        alert('thanks for signing up!');
        setEmail('');
      } else {
        throw new Error(data.error || 'failed to sign up');
      }
    } catch (error) {
      console.error('error signing up for newsletter:', error);
      alert('failed to sign up for newsletter. please try again.');
    }
  };

  return (
    <footer className="bg-gradient-to-r from-pastel-blue to-pastel-pink mt-16 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div>
            <Link to="/change-password" className="text-white transition duration-300">
              change password
            </Link>
          </div>
          <div>
            <Form onSubmit={handleNewsletterSignup} className="flex items-center">
              <input
                type="email"
                placeholder="enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 border border-pastel-purple rounded-l-full focus:outline-none focus:ring-2 focus:ring-pastel-purple focus:border-pastel-purple"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-pastel-purple text-white rounded-r-full hover:bg-pastel-green transition duration-300 focus:outline-none focus:ring-2 focus:ring-pastel-purple focus:ring-offset-2"
                >
                subscribe
                </button>
            </Form>
          </div>
        </div>
      </div>
    </footer>
  );
}