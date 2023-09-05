"use client";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="w-4/5 mx-auto">
      <div className="w-32 h-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full fixed top-[100px] ml-10 left-1/3 animate-[smallBallmove_4s_linear_infinite_alternate]"></div>
      <div className="w-[500px] h-[500px] bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full fixed bottom-[40px] z-0 -left-[200px] animate-[bigBallmove_4s_linear_infinite]"></div>
      <div className="flex mt-24 relative z-100">
        <div className="mt-24 mr-auto w-1/2">
          <div className="text-[80px] text-[#3d535f] font-bold">
            <Typewriter
              options={{
                strings: ["Hello, I'm Eric."],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="text-2xl text-[#3d535f]">I'm a student from Taiwan.</p>
          <p className="text-2xl text-[#3d535f]">
            This is my personal website created by NextJS.
          </p>
        </div>
        <div className="relative">
          <div>
            <img
              className="relative z-10 mask mask-circle w-[450px] h-auto ml-auto animate-[usemove_4s_linear_infinite_alternate]"
              src="1039564.jpg"
            />
          </div>
          <div>
            <img className="scale-x-[2] fixed right-20 bottom-20 -rotate-45" src="brush.png" alt="" />
          </div>
          <div>
            <img className="scale-x-[2.3] fixed right-26 bottom-52 -rotate-45" src="brush.png" alt="" />
          </div>
          <div>
            <img className="scale-x-[1.7] fixed right-[300px] top-32 -rotate-45" src="brush.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
