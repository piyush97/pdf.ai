import { Button } from "@/components/ui/button";
import {
  GO_TO_CHATS,
  HOME_SUBTITLE,
  MADE_WITH_LOVE,
  PDF_AI,
} from "@/lib/constants";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-teal-100 to-rose-100">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">{PDF_AI}</h1>
            <UserButton afterSignOutUrl="/" />
          </div>
          <div className="flex mt-2">
            {isAuth && <Button>{GO_TO_CHATS}</Button>}
          </div>
          <p className="max-w-xl mt-1 text-lg text-slate-600">
            {HOME_SUBTITLE}
            <p>{MADE_WITH_LOVE}</p>
          </p>
          <div className="w-full mt-4">
            {isAuth ? (
              <h1>fileUpload</h1>
            ) : (
              <Link href="/sign-in">
                <Button>Login to get Started!</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
