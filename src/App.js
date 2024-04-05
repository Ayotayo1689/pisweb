
import './App.css';
import { createTheme, ThemeProvider } from '@mui/system';
import Route from './Routes'
import Poppins from '../src/Components/fonts/Poppins-Regular.ttf'

// const theme = createTheme({
//   palette:{
//     primary:{
//       main:'#011429'
//     },
//     secondary:{
//       main:'#f74b68'
//     }
//   }
// })

function App() {
  return (
  //  <ThemeProvider theme={theme}>
    <Route/>
  //  </ThemeProvider>
  );
}

export default App;
