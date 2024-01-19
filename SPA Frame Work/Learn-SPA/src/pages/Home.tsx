import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
        <h1>This is Home Page</h1>
        <Link to={'/course'}>Courses</Link>
    </div>
  )
}

export default Home