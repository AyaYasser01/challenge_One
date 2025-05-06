import Navbar from "./component/Navbar/Navbar"
import Post from "./component/Post/Post"
import Sidebar from "./component/Sidebar/Sidebar"


function App() {


  return (
    <div>
    <Navbar/>
    <div style={{display:"flex"}}>
    <div style={{width :"70%"}}>
<Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
</div>
    <div style={{width:"30%"}}>
    <Sidebar/>
    </div>
    </div>
    </div>
  )
}

export default App
