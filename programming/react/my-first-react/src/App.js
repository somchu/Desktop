import logo from './logo.svg';
import './App.css';

function App() {
  const test = "test 1234"
  const data1 = 10
  const data2 = 20
  const randomnumber = Math.random();

  return (
    <>
          {/* <p>{test}</p> */}
    {/* <p>ทดสอบ {data1+data2}</p> */}
    <p>{randomnumber}</p>
    {
      randomnumber < 0.5 ? <div>You Lose</div> : <div>You Win</div>
    }
    </>
  );
}

export default App;
