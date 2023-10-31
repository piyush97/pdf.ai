import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <SignUp />
    </div>
  );
};

export default Page;
