import { Switch, Route } from 'react-router-dom'

import Home from '../page/home'
import Science from '../page/science'
import Technology from '../page/technology'

const Router = () => {
    return (
       <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/science" component={Science} />
           <Route path="/technology" component={Technology} />
       </Switch>
    )
}

export default Router