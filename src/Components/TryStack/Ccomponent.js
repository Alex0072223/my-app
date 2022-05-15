// // import {Component} from "react";
// // import {render} from "react-dom";
// // import React from "react";
// //
// //  class Ccomponent extends React.Component{
// //
// //     constructor(props) {
// //         super(props);
// //         this.state ={
// //             error: null,
// //             isLoaded: false,
// //             items: []
// //         };
// //
// //
// //         componentDidMount(){
// //             fetch("sdf")
// //         }
// //
// //
// //     }
// // }
//
// import React from "react";
//
// const {searchQuery,result}= this.state;
// const {hits = []} = result;
//
// }
//
// return(
//     <div>
//         <ul className="newsList">
//             {hits.map(({id,title,summary})=>
//                 <NewsPost
//                     key = {objectID}
//                     author={author}
//                     created_at={summary}/>
//             )}
//         </ul>
//     </div>
// );
//
//
//
//
//
//
//
//
// import React from "react";
// import Counter from "./Counter";
// import {render} from "react-dom";
//
//
// const BASE_PATH='https://api.spaceflightnewsapi.net/v3';
// const SEARCH_PATH='/articles';
// const SEARCH_PARAM='?_limit=100';
// class  ClassCounter extends React.Component{
//
//     state = {
//         searchQuery: '',
//         result: {},
//     }
//
//     constructor(props) {
//         super(props);
//         // this.state = {
//         //     count: 0,
//         //
//         // }
//
//
//
//
//         this.componentDidMount = this.componentDidMount.bind(this);
//
//         /* this.increment = this.increment.bind(this);
//          this.decrement = this.decrement.bind(this);*/
//     }
//
//     /*increment(){
//         this.setState({count: this.state.count +1})
//
//     }*/
//
//     componentDidMount() {
//         const {searchQuery} = this.state;
//         fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}`)
//             .then(res => res.json())
//             .then(result => this.setNews(result))
//             .catch(error => error);
//     }
//     setNews = result => {
//         this.setState({result});
//     }
//
//
// }
//
//
//
// /*  decrement(){
//       this.setState({count: this.state.count -1})
//   }*/
//
// render() {
//
//
//
//
//     return(
//         <div>
//             <h1>{this.state.count}</h1>
//             <button onClick={this.increment}>Increment</button>
//             <button onClick={this.decrement}>Decrement</button>
//         </div>
//     )
// }
// }
// export default ClassCounter;