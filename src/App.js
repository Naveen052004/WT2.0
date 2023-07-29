// import logo from './logo.svg';
import './css/App.css';
import './css/props.css';


//Screen
import Header from "./screens/header";
import Sidebar from "./screens/sidebar";
import HomePage from "./screens/home";
import Rightbar from "./screens/rightbar";
import CategoriesPage from "./screens/categories";
function App() {
  return (
    <div className="App flex">
      <Sidebar />
    </div>
    
  );
}

export default App;
