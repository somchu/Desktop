import logo from './logo.svg';
import './App.css';
import Post from './components/chap_3/Post'
import Comment from './components/chap_3/Comment'
function App() {
  const test = "test 1234"
  const data1 = 10
  const data2 = 20
  const randomnumber = Math.random();

  return (
    <>
    {/* <p>{test}</p> */}
         
    {/* <p>ทดสอบ {data1+data2}</p> */}
    {/* <p>{randomnumber}</p>
    {
      randomnumber < 0.5 ? <div>You Lose</div> : <div>You Win</div>
    } */}
    {/* <h1>content from class component Post</h1> */}
    {/* <Post studentname="test student" age="29">test children</Post> */}
    <Post id="2">
      <Comment userId="1" data="5 stars"></Comment>
      <Comment userId="2" data="4 stars"/>
    </Post>
    </>
  );
}

export default App;
