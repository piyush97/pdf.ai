import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-teal-100 to-rose-100">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">PDF.ai</h1>
            <UserButton afterSignOutUrl="/" />
          </div>
          <div className="flex mt-2">
            <Button>Go to Chats</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
