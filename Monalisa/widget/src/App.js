import {Monalisa} from 'tsmona'

function App() {
  const screenId="61e1532b4cdb8cfa375286da"
  // const screenId = "61e1ba319d29bffcffa6011f"

  return (
    <div className="App">
      <Monalisa screen={(screenId)}/>
    </div>
  );
}

export default App;
