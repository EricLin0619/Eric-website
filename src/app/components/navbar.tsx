import Image from "next/image";

function Navbar() {
  return (
    <div className="grid grid-cols-3 items-center h-32 mx-auto w-4/5">
      <div className=" text-4xl font-bold text-[#3d535f] tracking-wider">
        Eric Lin
        <b className="text-[35px]">.</b>
      </div>
      <div className="mx-auto">
        <ul className="flex text-2xl text-black space-x-5">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Projects</li>
        </ul>
      </div>
      <div className="flex space-x-4 ml-auto">
        <Image
          src="/instagram.png"
          width={30}
          height={30}
          className="mt-2"
          alt=""
        />
        <Image
          src="/facebook.png"
          width={30}
          height={30}
          className="mt-2"
          alt=""
        />
        <Image
          src="/github-sign.png"
          width={30}
          height={30}
          className="mt-2"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
