import { ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import theme from "./customTheme";
import Header from "./components/Header";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";
import Sixth from "./components/Sixth";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Navbar />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <Sixth />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
