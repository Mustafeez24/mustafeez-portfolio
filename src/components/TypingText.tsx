"use client";

import { useEffect, useState } from "react";

export function TypingText({ items }: { items: string[] }) {
  const [itemIndex, setItemIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = items[itemIndex];
    const doneTyping = !deleting && text === current;
    const doneDeleting = deleting && text === "";
    const delay = doneTyping ? 1200 : deleting ? 35 : 70;

    const timer = window.setTimeout(() => {
      if (doneTyping) {
        setDeleting(true);
        return;
      }

      if (doneDeleting) {
        setDeleting(false);
        setItemIndex((index) => (index + 1) % items.length);
        return;
      }

      setText((value) =>
        deleting ? current.slice(0, value.length - 1) : current.slice(0, value.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, itemIndex, items, text]);

  return (
    <span>
      {text}
      <span className="ml-1 inline-block h-6 w-px translate-y-1 bg-blue-400" />
    </span>
  );
}
