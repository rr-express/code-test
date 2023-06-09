import { Box } from '@mui/material';
import './App.css';
import WordSearch from './components/WordSearch';
function App() {
  return (
    <Box sx={{height: '100vh'}} className="App">
      <WordSearch/>
    </Box>
  );
}

export default App;
