import React from 'react';
import loadable from '@loadable/component';
import { Route, Switch } from 'react-router-dom';
const ReviewEdit = loadable(() => import('../../components/map/reviewSection/newReviewSection/ReviewEdit'));
const ReviewView = loadable(() => import('../../components/map/reviewSection/newReviewSection/ReviewView'));
const ReviewList = loadable(() => import('../../components/map/reviewSection/newReviewSection/ReviewList'));
const ReviewUpdate = loadable(() => import('../../components/map/reviewSection/newReviewSection/ReviewUpdate'));
function ReviewPage(props) {
  console.log(props.match.url);
  return (
    <>
      <Switch>
        {/* <Route path="/register" component={ReviewEdit} /> */}
        <Route exact path={`${props.match.url}/:id`} component={ReviewView} />
     
      <Route exact path={props.match.url}component={ReviewList} />
      {/* <Route exact path={`${props.match.url}/:id/update`} component={ReviewUpdate} /> */}
      </Switch>
    </>
  );
}

export default ReviewPage;

// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   useHistory,
// } from 'react-router-dom';
// import ItemListContainer from '../../components/map/reviewSection/reviewContainer/ItemListContainer';
// import ItemRegisterContainer from '../../components/map/reviewSection/reviewContainer/ItemRegisterContainer';
// import ItemModifyContainer from '../../components/map/reviewSection/reviewContainer/ItemModifyContainer';
// import ItemReadContainer from '../../components/map/reviewSection/reviewContainer/ItemReadContainer';

// function ReviewPage(props) {
//   return (
//     <Router>
//       <div className="main-bg-wrapper">
//         <div className="main-bg"></div>
//         <div className="main-container">
//           <Switch>
//             <Route
//               component={ItemListContainer}
//               path={`${props.match.url}`}
//               exact
//             />
//             <Route
//               component={ItemRegisterContainer}
//               path={`${props.match.url}/register`}
//               exact
//             />
//             <Route
//               component={ItemModifyContainer}
//               path={`${props.match.url}/edit/:id`}
//               exact
//             />
//             <Route
//               component={ItemReadContainer}
//               path={`${props.match.url}/read/:id`}
//               exact
//             />
//           </Switch>{' '}
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default ReviewPage;
