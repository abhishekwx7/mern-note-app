import React from "react";
import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-[#f4d9a6] border-b-4 border-[#5c3b1e] shadow-[0px_4px_0px_0px_rgba(92,59,30,1)]">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-black font-mono tracking-tight text-[#5c3b1e]">
            ThinkBoard
          </h1>

          <div className="flex items-center gap-4">
            <Link
              to={"/create"}
              className="btn bg-[#8b5e34] text-[#fff4d6] border-2 border-[#5c3b1e] font-bold shadow-[4px_4px_0px_0px_rgba(92,59,30,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-[#6f4828]"
            >
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
