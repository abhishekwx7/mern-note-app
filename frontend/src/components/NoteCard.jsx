import { PenSquareIcon, Trash2Icon } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils.js";
import api from "../lib/axios.js";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note deleted successfully! 😫");
    } catch (error) {
      console.error("Error in handleDelete", error);
      toast.error("Failed to delete note 😐");
    }
  };
  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-[#fff1c7] text-[#4a2f19] hover:shadow-xl transition-all duration-200 border-t-4 border-solid border-[#8b5e34] hover:-translate-y-1"
    >
      <div className="card-body">
        <h3 className="card-title text-[#4a2f19] font-bold">{note.title}</h3>

        <p className="text-[#6b4a2b] line-clamp-3">{note.content}</p>

        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-[#8a6a44]">
            {formatDate(new Date(note.createdAt))}
          </span>

          <div className="flex items-center gap-2">
            <PenSquareIcon className="size-4 text-[#6b4a2b]" />

            <button
              className="btn btn-ghost btn-xs text-[#b84a3a] hover:bg-[#f6d6b8]"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
