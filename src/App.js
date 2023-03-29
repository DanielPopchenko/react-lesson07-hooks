import SignUpForm from './components/SignUpForm/SignUpForm';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Counter from './components/Counter/Counter';

const colorPickerOptions = [
  { label: 'red', color: '#c41d1d' },
  { label: 'orange', color: '#f25116' },
  { label: 'pink', color: '#d1246f' },
  { label: 'blue', color: '#2f1dd1' },
  { label: 'green', color: '#398f1f' },
];

function App() {
  return (
    <div className="App">
      <SignUpForm />
      <ColorPicker options={colorPickerOptions} />
      <Counter />
    </div>
  );
}

export default App;
