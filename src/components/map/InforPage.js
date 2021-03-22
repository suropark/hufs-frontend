import React, {useState,useEffect} from "react";
import { BrowserRouter as Router, Route, useParams,withRouter,Switch,useHistory} from 'react-router-dom';
import { Provider } from "react-redux";
import ReviewPage from "./ReviewPage";
import PostView from "./postMap/PostView";
import PostList from "./postMap/PostList";
import store from "./postMap/PostStore";

const InforPage = ({match,history}) => {

  const [state, setState] = useState("");

  useEffect(() => {
    console.log(history.location.state);
    fetch(
      `./books.json`
    ).then((res) => res.json)
    .then((res)=>setState({state:res}))},[]);


  
   
  let {id} = useParams();
  const [infor, setInfor] = useState({
    
    name : '',
    adress : '',
    number : '',
    time : ''

  });

  /*
  const inforList = infor.map(inf => (
    <div>
    <li>
      name = {inf.name}
    </li>
    <li>
      adress = {inf.adress}
    </li>
    <li>
      number = {inf.number}
    </li>
    </div>
  ));
  */


  
    return (
      <>
      <div>
        
        <h1>{history.location.state}</h1>
      </div>
      <div>
        
<Provider store={store}>
      <Switch>
      <Route exact path = {`/info/${match.params.title}`} component = {PostList}/>
      <Route path = {`/info/${match.params.title}/create`} component = {ReviewPage}/>
      <Route path = {`/info/${match.params.title}/:item`} component = {PostView} />
      
      </Switch>
      </Provider>
      </div>
      </>
    );
  }

export default InforPage;