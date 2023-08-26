"use client";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="flex mt-36 mx-auto w-4/5">
      <div>
        <div className="text-[100px] text-[#3d535f]">
          <Typewriter
            options={{
              strings: ["Hello, I'm Eric Lin"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="text-2xl text-[#3d535f]">I'm a student from Taiwan. This is my personal website created by NextJS.</p>
      </div>
      <img className="mask mask-circle w-[450px] ml-auto" src="1039564.jpg" />
    </div>
  );
}
