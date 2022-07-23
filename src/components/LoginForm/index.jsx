
function LoginForm(props){

    return (<div>
        <div class="form-outline mb-4">
          <input type="text" id="form2Example1" class="form-control" onChange={props.setUsername}/>
          <label class="form-label" for="form2Example1">Username</label>
        </div>
        <div class="form-outline mb-4">
          <input type="password" id="form2Example2" class="form-control" onChange={props.setPassword}/>
          <label class="form-label" for="form2Example2">Password</label>
        </div>
      </div>)
}

export default LoginForm