import React from 'react'
import Nav from "./components/Nav.jsx";
import  MainNew  from "./components/MainNew";
import TodayNews from './components/TodayNews.jsx';
import TopNews from './components/TopNews.jsx';

function App() {
  return (
    <div className="App xl: min-w-full lg:px-12 lg:py-8 xl:px-32 xl:py-16  xl:h-screen  flex flex-col  p-6">
      <Nav/>

      <div className='lg:grid lg:grid-cols-12  flex flex-col '>
      
      <div className="xl:col-span-8 lg:col-span-7 ">
      <MainNew  />
      </div>
      <div className="xl:col-span-4 ">
      <TodayNews />
      </div>
    </div>
    <TopNews/>
    <div class="attribution mx-auto py-10">
    Challenge Coded by <a target='_blank' className='hover:underline' rel='noreferrer' href="https://github.com/Abraham0216" >Abraham Oñate</a>.
  </div>
    </div>
  );
}

export default App;

