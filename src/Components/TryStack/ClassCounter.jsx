// import React from "react";
// import Counter from "./Counter";
// import PostItem from "./PostItem";
//
// const BASE_PATH='https://api.spaceflightnewsapi.net/v3';
// const SEARCH_PATH='/articles';
// const SEARCH_PARAM='?_limit=100';
//
// class  ClassCounter extends React.Component{
//
//     state = {
//         searchQuery: '',
//         result: {},
//     }
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
//     render() {
//         const {searchQuery,result}= this.state;
//         const {hits = []} = result;
//         return(
//             <div>
//                 <ul className="newsList">
//                     {hits.map(({id,title,summary})=>
//                         <PostItem
//                             id = {id}
//                             title = {title}
//                             created_at={summary}/>
//                     )}
//                 </ul>
//
//             </div>
//         )
//     }
// }
// export default ClassCounter;