import './components/button';
import { Button } from './components/button';

function App() {
  const handleClick = () => {
    alert('test');
  };

  return (
    <div>
      <Button text="test" onClick={handleClick} />
    </div>
  );
}

export default App;
