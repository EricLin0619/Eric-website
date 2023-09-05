"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();

  return (
    <nav>
      <div className="grid grid-cols-3 items-center h-32 mx-auto w-4/5">
        <div className="cursor-pointer text-4xl font-bold text-[#3d535f] tracking-wider" onClick={()=>{router.push('/')}}>
          Eric Lin
          <b className="text-[35px]">.</b>
        </div>
        <div className="mx-auto">
          <ul className="flex text-2xl text-black space-x-7">
            <li className="cursor-pointer" onClick={() => router.push("/")}>
              Home
            </li>
            <li
              className="cursor-pointer"
              onClick={() => router.push("/about")}
            >
              About
            </li>
            <li
              className="cursor-pointer"
              onClick={() => router.push("/projects")}
            >
              Projects
            </li>
          </ul>
        </div>
        <div className="flex space-x-4 ml-auto relative z-50">
          <a
            href="https://www.instagram.com/ting_.07/"
            target="_black"
            rel="noopener noreferrer"
          >
            <Image
              src="/instagram.png"
              width={30}
              height={30}
              className="mt-2 cursor-pointer"
              alt=""
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100002221696958"
            target="_black"
            rel="noopener noreferrer"
          >
            <Image
              src="/facebook.png"
              width={30}
              height={30}
              className="mt-2 cursor-pointer"
              alt=""
            />
          </a>
          <a
            href="https://github.com/EricLin0619"
            target="_black"
            rel="noopener noreferrer"
          >
            <Image
              src="/github-sign.png"
              width={30}
              height={30}
              className="mt-2 cursor-pointer"
              alt=""
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
// 用nav標籤

export default Navbar;
