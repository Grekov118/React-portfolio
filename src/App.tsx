import {
  About,
  Clients,
  Contact,
  Footer,
  GetIn,
  Header,
  Home,
  Portfolio,
  Services,
  Skills,
  ScrollToTop,
  ThemeToggle,
} from "./components/index";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <GetIn />
      <Clients />
      <Contact />
      <Footer />
      <ScrollToTop />
      <ThemeToggle />
    </>
  );
}

export default App;
