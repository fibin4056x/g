import {Link, Outlet} from 'react-router-dom'
export default function Pages(){
   return(
    <div>
        <Link to={'/'}>TODO</Link>
        <Link to={'/list'}>List</Link>
        <div>
            <Outlet/>
        </div>
    </div>
   )
}