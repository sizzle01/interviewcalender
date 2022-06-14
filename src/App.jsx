import './App.css'
import SideMenu from './components/Sidemenu/SideMenu'
import Content from './components/content/Content'
function App() {
  return (
    <div>
      <div className="menu">
        <SideMenu />
        <Content />
      </div>
    </div>
  )
}

export default App
