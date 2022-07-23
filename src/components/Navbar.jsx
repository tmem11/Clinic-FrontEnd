import { connect } from 'react-redux';
import { login ,logout,addNewCliniqe} from "../redux/App/app.actions";
import Dialog from './Dialog'
import LoginForm from './LoginForm'
import {useState} from "react"
import AddClinique from './AddCliniqueForm'
function Navbar(props) {
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [description,setDescription]=useState("")
    const [lng,setLng]=useState()
    const [lat,setLat]=useState()
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        {
                            props.user && props.user.role==="[DOCTOR]" &&
                            <Dialog className="nav-link" label="Add Clinique" onClick={()=>props.addNewCliniqe({description:description,longitude:lng,latitude:lat})}>
                                <AddClinique setLng = {(lng)=>setLng(lng)} setLat = {(lat)=>setLat(lat)} setDescription = {(e)=>setDescription(e.target.value)}></AddClinique>
                            </Dialog>
                        }
                        </li>
                        <li className="nav-item">
                        {
                            props.user?
                            <span className="nav-link" onClick={()=>props.logout()}>Logout</span>
                            :
                            <Dialog className="nav-link" label="Login" onClick={()=>props.login({username:username,password:password})}>
                                <LoginForm setUsername = {(e)=>setUsername(e.target.value)} setPassword = {(e)=>setPassword(e.target.value)}></LoginForm>
                            </Dialog>
                        }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
const mapStateToProps = (state) => {
    return {
      user:state.app.user
       };
  };
  
const mapDispatchToProps = (dispatch) => {
return {
    login: (user) => dispatch(login(user)),
    logout:()=>dispatch(logout()),
    addNewCliniqe:(cliniqu)=>dispatch(addNewCliniqe(cliniqu))
};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
