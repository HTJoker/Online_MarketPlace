"use client";
import { SignOutButton, SignInButton, useUser, UserButton } from "@clerk/nextjs";


const LoginButton = () => {
  const user = useUser();
  return (
    <div className="cursor-pointer">
      {user.isSignedIn ? (
        <UserButton afterSignOutUrl="/"/>
      ) : (
        <SignInButton>
          <span className="rounded-md bg-blue-600 px-2 py-1 text-white">
            Sign In
          </span>
        </SignInButton>
      )}
    </div>
  );
};

export default LoginButton;
