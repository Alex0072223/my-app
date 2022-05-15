// import React, {useRef, useState} from "react";
// import Counter from "./Components/Counter";
// import ClassCounter from "./Components/ClassCounter";
// import PostItem from "./Components/PostItem";
// import "./Styles/App.css"
// import PostList from "./Components/PostList";
// import MyButton from "./Components/UI/button/MyButton";
// import MyInput from "./Components/UI/input/MyInput";
//
// function App() {
//
//     const [value, setValue] = useState("spalme text")
//     const [posts,setPosts] = useState([
//         {id: 1, title: "JSSSs 1", body: "some description"},
//         {id: 2, title: "JSSSS 2", body: "some description"},
//     ])
//     const [posts2,setPosts2] = useState([
//         {id: 1, title: "No SS 3", body: "some description"},
//     ])
//
//
//
//
//
//
//
//     const [post, setPost] = useState({title: '', body:''})
//
//
//     const  addNewPost = (e) => {
//         e.preventDefault() /*Предотвращает обновление страницы после нажатия кнопки*/
//         setPosts([...posts, {...post, id: Date.now()}])
//         setPost({title: '', body:''})
//
//     }
//
//   return (
//     <div className="App">
//
//         <form>
//             <MyInput
//                 value={post.title}
//                 onChange={e => setPost({title: e.target.valu})}
//                 type="text"
//                 placeholder="Name of Post"
//             />
//             {/*/!*<input ref={bodyInputRef} type="text"/>*!/ напрямую из DOM*/}
//             <MyInput
//                 value={post.body}
//                 onChange={e => setPost({body: e.target.value})}
//                 type="text"
//                 placeholder="Description of Post"
//             />
//             <MyButton onClick={addNewPost}>Create!</MyButton>
//         </form>
//
//         <PostList posts={posts} title={"список постов 1"}/>
//         <PostList posts={posts2} title={"some other of them"}/>
//
//         <Counter/>
//
//         <h1>{value}</h1>
//         <input
//             type="text"
//             value={value}
//             onChange={event => setValue(event.target.value)}
//         />
//
//         <ClassCounter/>
//
//
//
//
//     </div>
//   );
// }
//
// export default App;
