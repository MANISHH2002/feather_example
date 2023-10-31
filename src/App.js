
import './App.css';
import { Camera } from 'react-feather';
import { Dribbble } from 'react-feather';
import { Clock } from 'react-feather';
import { Anchor } from 'react-feather';




function App() {
  return (
    <div>
          <ul>
              <li>this is a camera <Camera/></li>
              <li>this is a ball <Dribbble/> </li>
              <li>this is a clock <Clock/> </li>
              <li>this is anchor <Anchor/></li>
          </ul>
    </div>
  );
}

export default App;
