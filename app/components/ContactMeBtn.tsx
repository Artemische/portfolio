'use client'

import { useContactContext } from "../context/ContactContext";

export default function ContactMeBtn(): React.ReactElement {
  const { triggerHighlight } = useContactContext();

  return (
    <button
      className="px-5 py-2 rounded-md border border-gray-500 text-gray-300 hover:bg-gray-700 transition"
      onClick={triggerHighlight}
    >
      Contact Me
    </button>
  );
}
