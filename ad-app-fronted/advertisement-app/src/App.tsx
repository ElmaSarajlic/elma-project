import './App.css';
import AdCard from './components/AdCard';
import { Ad } from './utils/types'; // Make sure to import the Ad type or adjust the import path


const ad: Ad = {
  id:"1",
  title: 'reklama1',
  description: 'reklamni proizvod itd',
  category: 'selling',
 }
 

function App() {
 
  return (
    <>
      <AdCard ad = {ad}/>
    </>
  );
}

export default App;
