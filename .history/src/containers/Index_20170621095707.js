import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FetchOrgList } from '../actions'
import Tooltip from '../components/common/toast';

import style from '../styles/demo.css'

class Index extends React.Component {
   componentDidMount(){
    const { dispatch } = this.props
    dispatch(FetchOrgList())
  }
  render() {
    return (
      <div>
        <div className="pos_relative">
        <button className={style.btn} onClick={() => Tooltip.show('the tooltip autoHide after 2s')}>正常弹出层</button>
        <button onClick={() => Tooltip.show('the tooltip autoHide after 3s', 3000)}>延时弹出层</button>
        <button onClick={() =>   {var tip = Tooltip.show('the tooltip will be hidden before the default time 2s');
    setTimeout(()=>tip.hide(), 1000);}}>弹出层</button>
          {// <NavBar />
          }
        </div>
        <Router>
          <Route path="/" component={Home} />
        </Router>
        <div id="nprogress" style={{display:this.props.loading?'block':'none'}}>   
           this.props.loading ? "加载中" : ""
        </div>
      </div>
    );
  }
}
const Home = () =>
  <div>
    <h2 className="font">得到mock数据form port3000</h2>
  </div>;

const mapStateToProps = (state) => {
    const loading = state.app.loading
    return {
      loading:loading
    }
} 
export default connect()(Index);
// import React from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/topics">Topics</Link></li>
//       </ul>

//       <hr/>

//       <Route exact path="/" component={Home}/>
//       <Route path="/about" component={About}/>
//       <Route path="/topics" component={Topics}/>
//     </div>
//   </Router>
// )

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// )

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>

//     <Route path={`${match.url}/:topicId`} component={Topic}/>
//     <Route exact path={match.url} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )

// export default BasicExample
