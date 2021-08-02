
import './App.css';
import Todo from './Complonets/Todo';
import Pages from './Componts2/Pages';
// import Todo1 from './Complonets/Todo1';

function App() {
  return (
    <div>
      <h2> Taks One</h2>
      <div className="App">
        {/* <Todo1 /> */}

        <Pages />


      </div>
      <h2 >Task Two</h2>
      <div className="App">
        {/* <Todo1 /> */}



        <Todo />
      </div>

    </div>

  );
}

export default App;
