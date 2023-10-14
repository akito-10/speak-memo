import { ListIcon } from "@/components/assets/list";
import { PlusIcon } from "@/components/assets/plus";
import { SearchIcon } from "@/components/assets/search";
import { Button } from "@/components/shadcn/ui/button";

export const Menubar = () => {
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
      <ul></ul>
    </header>
  );
};
