import { Route, Switch, Redirect } from "react-router-dom"
import Home from "./Home"
import Movie from "./Movie"

const Routes = () => (
    <>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/movies/:title"><Movie /></Route>
        <Redirect to="/" />
      </Switch>
    </>
)

export default Routes