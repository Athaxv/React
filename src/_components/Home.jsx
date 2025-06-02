import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-50 p-10 font-sans text-gray-800">
      <h1 className="text-5xl font-extrabold mb-6 text-center text-indigo-700 drop-shadow-lg animate-fadeIn">
        Welcome to My React Project Hub
      </h1>

      <p className="max-w-3xl mx-auto mb-10 text-center text-lg leading-relaxed animate-fadeIn delay-200">
        This is the central dashboard where you can explore different project components and functionalities.
      </p>

      {/* <h2 className="text-3xl font-semibold mb-4 text-indigo-600 animate-fadeIn delay-300">Available Pages:</h2> */}

      <ul className="max-w-xl mx-auto space-y-4 animate-fadeIn delay-400">
        {[
          { path: "/todo", label: "Todo List", desc: "Manage and track your tasks efficiently." },
          { path: "/card", label: "User Card", desc: "Displays user profile and post info in a neat card UI." },
          { path: "/form", label: "Form", desc: "A reusable form component for user input." },
          { path: "/theme", label: "Theme Toggle", desc: "Switch between light and dark mode themes." }
        ].map(({ path, label, desc }) => (
          <li
            key={path}
            className="bg-white rounded-xl shadow-md p-5 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <Link
              to={path}
              className="text-indigo-700 font-semibold text-xl  underline-offset-4 hover:text-indigo-900"
            >
              {label}
            </Link>
            <p className="text-gray-600 mt-1">{desc}</p>
          </li>
        ))}
      </ul>

      {/* <h2 className="text-3xl font-semibold mt-14 mb-4 text-indigo-600 animate-fadeIn delay-500">Project Summary:</h2>

      <ul className="max-w-3xl mx-auto list-disc list-inside space-y-3 text-gray-700 animate-fadeIn delay-600">
        <li><strong>Routing with react-router-dom:</strong> Navigate between multiple pages without reloading.</li>
        <li><strong>Component-based architecture:</strong> Modular components like cards, forms, and lists.</li>
        <li><strong>State management:</strong> Using hooks like <code>useState</code> to handle dynamic UI updates.</li>
        <li><strong>UI interaction:</strong> Copy to clipboard, theme toggling, and interactive forms.</li>
        <li><strong>Responsive and accessible design:</strong> Semantic HTML and CSS utility classes.</li> */}
      {/* </ul> */}
    </div>
  );
};

export default Home;
