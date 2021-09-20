import { Switch, Route, Redirect } from 'react-router-dom'

import SignIn from '../pages/Auth/SignIn'
import SignUp from '../pages/Auth/SignUp'
import SignUpStep2 from '../pages/Auth/SignUpStep2'
import SignUpStep3 from '../pages/Auth/SignUpStep3'
import ForgetPassword from '../pages/Auth/ForgetPassword'
import App from '../pages/App'

export default function Routes() {
  return (
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} exact />
      <Route path="/signup/step2" component={SignUpStep2} />
      <Route path="/signup/step3" component={SignUpStep3} />
      <Route path="/forget-password" component={ForgetPassword} />

      <Route path="/app" component={App} />

      <Redirect from="/" to="signin" />
    </Switch>
  )
}
