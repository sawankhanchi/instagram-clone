import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">
      <div className="app_header">
        <img
          className="header_logo"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram_Logo"
        />
      </div>

      {/* Posts */}
      <Post />
      <Post />
      {/* Posts */}
    </div>
  );
}

export default App;
