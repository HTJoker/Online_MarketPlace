"use client";
import { SignOutButton, SignInButton, useUser } from "@clerk/nextjs";

const LoginButton = () => {
  const user = useUser();
  return (
    <div className="cursor-pointer">
      {user.isSignedIn ? (
        <SignOutButton>
          <span className="bg-purple-200 px-2 py-1 rounded-md">Sign Out</span>
        </SignOutButton>
      ) : (
        <SignInButton>
          <span className="bg-purple-600 px-2 py-1 rounded-md">Sign In</span>
        </SignInButton>
      )}
    </div>
  );
};

export default LoginButton;
