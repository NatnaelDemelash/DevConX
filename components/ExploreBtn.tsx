"use client";

import Image from "next/image";

const ExploreBtn = () => {
  return (
    <button className="mt-4 bg-gray-700 px-6 py-3 w-1/2 rounded-full">
      <a
        href="#events"
        className="flex items-center justify-center gap-2 text-white "
      >
        Explore Events
        <Image
          src="/icons/arrow-down.svg"
          alt="arrow down"
          width={24}
          height={24}
        />
      </a>
    </button>
  );
};

export default ExploreBtn;
