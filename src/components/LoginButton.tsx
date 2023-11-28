"use client";
import { SignInButton, useUser, UserButton } from "@clerk/nextjs";

const LoginButton = () => {
  const user = useUser();
  return (
    <div className="cursor-pointer">
      {user.isSignedIn ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <div className="rounded-md bg-blue-600 p-1 text-white hover:bg-blue-400">
          <SignInButton>Sign In</SignInButton>
        </div>
      )}
    </div>
  );
};

export default LoginButton;
