import React from "react";
import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-[#f4d9a6] border-b-2 border-[#b7793f] shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold font-mono tracking-tight text-[#5c3b1e]">
            ThinkBoard
          </h1>

          <div className="flex items-center gap-4">
            <Link
              to={"/create"}
              className="btn bg-[#8b5e34] hover:bg-[#6f4828] text-[#fff4d6] border-none"
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
