import { Switch, Route, Redirect } from 'react-router-dom'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import SignUpStep2 from '../pages/SignUpStep2'
import ForgetPassword from '../pages/ForgetPassword'

export default function Routes() {
  return (
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} exact />
      <Route path="/signup/step2" component={SignUpStep2} />
      <Route path="/forget-password" component={ForgetPassword} />

      <Redirect from="/" to="signin" />
    </Switch>
  )
}
