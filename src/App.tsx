import "./App.css";
import { Analytics } from "@vercel/analytics/react"


function App() {

  return (
    <>
      <Analytics />
      <h1 style={{fontSize: '2.5rem', paddingInline: '20px'}}>Chilling mit Finn und Tim</h1>
    </>
  );
}

export default App;
