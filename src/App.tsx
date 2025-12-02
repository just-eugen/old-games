import './components/button';
import { Button } from './components/button';

const handleClick = () => {
  alert('test');
};

function App() {
  return (
    <div>
      <Button text="test" onClick={handleClick} />
    </div>
  );
}

export default App;
