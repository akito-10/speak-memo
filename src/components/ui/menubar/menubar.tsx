"use client";

import { ListIcon } from "@/components/assets/list";
import { PlusIcon } from "@/components/assets/plus";
import { SearchIcon } from "@/components/assets/search";
import { Button } from "@/components/shadcn/ui/button";
import Link from "next/link";
import { FC } from "react";
import { useSearchParams } from "next/navigation";

export const Menubar: FC = () => {
  const searchParams = useSearchParams();
  const selectedMemoId = searchParams.get("memoId")
    ? Number(searchParams.get("memoId"))
    : undefined;

  return (
    <header className="w-40 h-screen border-r bg-bgMain">
      <div className=" border-b p-4 flex flex-col gap-4">
        <h2 className="font-bold text-xl">メモ帳</h2>
        <Button className="flex gap-2 items-center p-0 h-fit" variant="ghost">
          <SearchIcon />
          メモを探す
        </Button>
        <Button className="h-fit">ログイン</Button>
      </div>
      <h3 className="flex gap-2 items-center pt-8 justify-center">
        <ListIcon />
        メモ一覧
        <Button className="p-2 h-fit" variant="ghost">
          <PlusIcon />
        </Button>
      </h3>
      <ul className="mt-2 flex flex-col">
        {[
          { id: 1, title: "memo A" },
          { id: 2, title: "memo B" },
          { id: 3, title: "memo C" },
        ].map((memo) => (
          <li key={memo.id}>
            <Link
              className="py-1 px-6 w-full h-full rounded-none justify-start block hover:bg-accent"
              href={`/?memoId=${memo.id}`}
              style={{
                color: selectedMemoId === memo.id ? "#7cb855" : "inherit",
              }}
            >
              {memo.title}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
