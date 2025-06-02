import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Card from './_components/Card';
import Form from './_components/Form';
import ThemeToggle from './_components/ThemeToggle';
import TodoList from './_components/TodoList';
import Home from './_components/Home';

function App() {
  const cardData = {
    user: {
      name: "Rayn Fakir",
      title: "Software Developer",
      profileImage: "https://pfpmaker.com/content/img/profile-pictures/aesthetic/gallery/6.png",
      companyLogo: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/544/Google__G__Logo-512.png"
    },
    post: {
      message:
        "Thrilled to officially start my journey at Google as a Software Engineer! It's been a dream to work alongside some of the most brilliant minds in tech and contribute to products that impact billions globally. Grateful for the support, mentorship, and learning that led to this milestone. Here's to new beginnings and bigger challenges ahead! #Google #NewBeginnings #CareerMilestone #SoftwareEngineer #TechJourney",
      hashtags: [
        "#Google",
        "#NewBeginnings",
        "#CareerMilestone",
        "#SoftwareEngineer",
        "#TechJourney"
      ]
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/card" element={<div className='flex justify-center items-center'><Card cardData={cardData} /></div>} />
        <Route path="/form" element={<Form />} />
        <Route path="/theme" element={<ThemeToggle />} />
      </Routes>
      {/* <Home/> */}
    </BrowserRouter>
  );
}

export default App;
