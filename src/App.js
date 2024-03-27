import { useEffect, useState } from 'react';
import './App.css';
import Spinner from './components/Spinner';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Testimonial from './components/Testimonial';
import Services from './components/Services';
function App() {

  const [about, setAbout] = useState({});
  const [testimonial, setTestimonial] = useState([]);
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [services, setServices] = useState([]);
  const [social, setSocial] = useState([]);


  useEffect(() => {

    fetchData();

  }, [])
  const fetchData = async () => {

    try {
      setLoading(true);
      const response = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");

      const data = await response.json();
      // console.log(data);
      setAbout(data.user.about);
      setProjects(data.user.projects);
      setSkills(data.user.skills);

      setTestimonial(data.user.testimonials)
      setServices(data.user.services);
      setSocial(data.user.social_handles);

      // console.log(about)
    } catch (error) {
      console.log("Error while fetching data");
      console.log(error.message);
    }

    setLoading(false);

  }
  return (
    <div className="wrapper">

      {
        loading ? (
          <Spinner />

        ) : (
          <>
            <div className='lg:w-[1200px] mx-auto my-0 flex flex-col justify-center items-center'>
              <Navbar about={about} />
              <Hero about={about} social={social} />
            </div>
            <Project projects={projects} />
            <Skills about={about} skills={skills} />
            <Services services={services} />
            <Testimonial testimonial={testimonial} />
            <Contact />
          </>
        )
      }

    </div>
  );
}

export default App;
