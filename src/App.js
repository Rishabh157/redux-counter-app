import './App.css';
import CounterView from './app/components/CounterView';
import Inc from './app/components/Inc';
import Dec from './app/components/Dec';

function App() {
  return (
    <div className='d-flex justify-content-center mt-5'>
      <Inc />
      <CounterView />
      <Dec />
    </div>

  );
}

export default App;
