// import React from "react";
// import Home from "./pages/Home";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Recipe from "./pages/Recipe";
// import Search from "./pages/Search";
// import SideBarLayout from "./layout/SideBarLayout";

// const queryClient = new QueryClient();
import LoginRegister from "./Authentication/LoginRegister";
function App() {
  return (
    <div>
      <LoginRegister />
    </div>
    // <QueryClientProvider client={queryClient}>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/recipe/:id" element={<Recipe />} />
    //       <Route
    //         path="/search/:keyword/:mealType"
    //         element={
    //           <SideBarLayout>
    //             <Search />
    //           </SideBarLayout>
    //         }
    //       />
    //     </Routes>
    //   </BrowserRouter>
    // </QueryClientProvider>
  );
}

export default App;
