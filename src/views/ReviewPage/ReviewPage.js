import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import ItemListContainer from '../../components/map/reviewSection/reviewContainer/ItemListContainer';
import ItemRegisterContainer from '../../components/map/reviewSection/reviewContainer/ItemRegisterContainer';
import ItemModifyContainer from '../../components/map/reviewSection/reviewContainer/ItemModifyContainer';
import ItemReadContainer from '../../components/map/reviewSection/reviewContainer/ItemReadContainer';

function ReviewPage(props) {
  return (
    <Router>
      <div className="main-bg-wrapper">
        <div className="main-bg"></div>
        <div className="main-container">
          <Switch>
            <Route
              component={ItemListContainer}
              path={`${props.match.url}`}
              exact
            />
            <Route
              component={ItemRegisterContainer}
              path={`${props.match.url}/register`}
              exact
            />
            <Route
              component={ItemModifyContainer}
              path={`${props.match.url}/edit/:id`}
              exact
            />
            <Route
              component={ItemReadContainer}
              path={`${props.match.url}/read/:id`}
              exact
            />
          </Switch>{' '}
        </div>
      </div>
    </Router>
  );
}

export default ReviewPage;
