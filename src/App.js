import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="main">
      <Sidebar />
      <div className="container">
        <h1 className="title">My React App</h1>
        <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam modi minima aperiam voluptates facere quos quia eos cum accusantium natus itaque, praesentium quis mollitia debitis molestiae placeat magni dolor!</p>
        <button className="btn">Explore now</button>
      </div>
    </div>
  );
}

export default App
