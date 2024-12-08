import Accordian  from "./components/accordian";
import TodoList from "./components/Todos_List";
import StarRating from "./components/StarRating";
import Ecommerce from "./components/Ecommerce website";
import LoginSignup from "./components/Minor_Project_7thSem/LoginSignup";
import LoginMinor from "./components/Minor_Project_7thSem/loginMinor";
// import SearchFilter from "./components/Minor_Project_7thSem/SearchFilter/SearchFilter";



function App() {
  
  return (
    <div className="App">
      {/* 1.Accordian */}
      <Accordian/>

      {/* 2.TodosList */}
      <TodoList/>

      {/* 3.StarRating */}
      {/* <StarRating noOfStars={10}/> */}

      {/* 4.Ecommerce Website */}
      <Ecommerce/>

      {/* LogIn form Minor project */}
      <LoginMinor/>
       <LoginSignup/>
      {/* <LoginSignup/>         */}

      {/* Search-filter api  */}
      {/* <SearchFilter/> */}
      {/* 5. Counter Application */}
      

    

</div>
  );
}

export default App;






