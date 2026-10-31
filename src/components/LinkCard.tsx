"use client";

import { useState } from "react";

type Props = { id: string; title: string; url: string; initialCount: number };

export default function LinkCard({ id, title, url, initialCount }: Props) {
  const [count, setCount] = useState(initialCount);

  // 링크는 기본 동작(새 탭 이동)을 그대로 두고, 클릭 수만 백그라운드로 기록
  function handleClick() {
    setCount((c) => c + 1);
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    }).catch(() => {});
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex w-full items-center justify-between rounded-xl border-2 border-neutral-300 px-5 py-4 transition hover:-translate-y-0.5 hover:bg-neutral-100 dark:border-neutral-600 dark:hover:bg-neutral-800"
    >
      <span className="font-medium">{title}</span>
      <span className="text-xs text-neutral-500 dark:text-neutral-400">
        {count.toLocaleString()}회
      </span>
    </a>
  );
}
