

import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Faculty from './components/Faculty';
import StarPerformers from './components/StarPerformers';
import Courses from './components/Courses';
import AdmissionForm from './components/AdmissionForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Facilities from './components/Facilities';
import Founder from './components/Founder';
import Testimonials from './components/Testimonials';
import Results from './components/Results';

const App = () => {
  return (
    <>
        <Navbar />
    <HeroBanner />
    <Facilities/>
    <Founder/>
    <Faculty />
        <StarPerformers />
        <Courses />
        <Results/>
        <AdmissionForm />
        {/* <Testimonials/> */}
        <Contact />

        <Footer /> 
    
    </>
  );
};

export default App;
