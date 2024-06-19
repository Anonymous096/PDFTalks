import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";
import { Button, buttonVariants } from "./ui/button";
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { ArrowRight, LogIn } from "lucide-react";

const Navbar = async () => {
  const { userId } = await auth();
  const isAuth = !!userId;
  let firstChat;
  if (userId) {
    firstChat = await db.select().from(chats).where(eq(chats.userId, userId));
    if (firstChat) {
      firstChat = firstChat[0];
    }
  }
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <div className="flex h-14 items-center justify-between border-b border-zinc-200">
        <Link href="/" className="flex p-4 z-40 font-semibold">
          <span>PDFTalks.</span>
        </Link>

        <div className="hidden p-4 items-center space-x-4 sm:flex">
          {isAuth && firstChat ? (
            <Link href={`/chat/${firstChat.id}`}>
              <Button variant="ghost">
                Go to Chats <ArrowRight className="ml-2" />
              </Button>
            </Link>
          ) : (
            <Link href="/sign-in">
              <Button variant="ghost">
                Login
                <LogIn className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          )}
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
