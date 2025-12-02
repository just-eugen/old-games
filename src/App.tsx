import './components/button';
import { Button } from './components/button';

function App() {
  return (
    <div>
      <Button text="test" onClick={() => alert('test')} />
    </div>
  );
}

export default App;
