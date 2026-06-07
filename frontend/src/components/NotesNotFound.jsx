import { NotebookIcon, PenLineIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 max-w-md mx-auto text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-box bg-primary"></div>

        <div className="relative rounded-box border-4 border-base-content bg-base-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <NotebookIcon className="size-14 text-primary" />
        </div>
      </div>

      <div className="badge badge-primary badge-lg mb-4 font-mono">
        EMPTY NOTEBOOK
      </div>

      <h3 className="text-4xl font-black tracking-tight text-base-content">
        No Notes Yet!
      </h3>

      <p className="mt-4 text-base leading-relaxed text-base-content/70">
        Your notebook is waiting for its first masterpiece. Start jotting down
        ideas, plans, and discoveries.
      </p>

      <Link
        to="/create"
        className="btn btn-primary btn-wide mt-8 border-2 border-base-content font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
      >
        <PenLineIcon className="size-5" />
        Create First Note
      </Link>
    </div>
  );
};

export default NotesNotFound;
