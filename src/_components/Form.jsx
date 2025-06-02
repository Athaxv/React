import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-sm border border-gray-400 dark:border-gray-400 rounded-2xl p-6 shadow-md dark:shadow-none">
        <h2 className="text-4xl font-semibold text-center text-black dark:text-white mb-6">
          Form Submission
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label className="block text-sm font-medium text-black dark:text-white mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black dark:text-white mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black dark:text-white mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-2 text-sm font-medium py-2 rounded-lg border border-black dark:border-white text-black dark:hover:text-white hover:bg-black hover:text-white text-white dark:hover:text-black transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
