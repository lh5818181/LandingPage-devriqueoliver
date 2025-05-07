import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { HeroSection } from './components/hero/Hero';
import { ValuePropsSection } from './components/value/ValuePropsSection';
import { ProcessSection } from './components/process/ProcessSection';
import { ContactSection } from './components/contact/ContactSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeroSection />
      <ValuePropsSection />
      <ProcessSection />
      <ContactSection />
    </ThemeProvider>
  );
}

export default App;
