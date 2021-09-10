import { Switch, Route, Redirect } from 'react-router-dom'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

export default function Routes() {
  return (
    <Switch>
      <Route path="/signin" component={SignIn} exact />
      <Route path="/signup" component={SignUp} exact />

      <Redirect from="/" to="signin" />
    </Switch>
  )
}
