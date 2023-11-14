import React from "react";

import { Header, Intro, Brands, Options, Carousel, Blog, Category } from "./components/index"

import { RiChatSmileFill } from "react-icons/ri"

function App() {
  return (
    <div className="App bg-gray-900">
      <section className="feedback fixed top-2/4 -right-11 px-4 py-2 rounded-md bg-btns -rotate-90 cursor-pointer hover:py-3 transition-all hidden lg:block">
        <div className="flex items-center justify-center space-x-1">
          <div><RiChatSmileFill size={20} /></div>
          <div>Feedback</div>
        </div>
      </section>
      <Header />
      <Intro />
      <Brands />
      <Options />
      <Carousel />
      <Blog />
      <Category />
    </div>
  );
}

export default App;
