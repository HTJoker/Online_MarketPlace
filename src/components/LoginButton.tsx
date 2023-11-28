"use client";
import { SignOutButton, SignInButton, useUser } from "@clerk/nextjs";

const LoginButton = () => {
  const user = useUser();
  return (
    <div>
      {user.isSignedIn ? (
        <SignOutButton>
          <span className="cursor-pointer rounded-md bg-purple-200 px-2 py-1">
            Sign Out
          </span>
        </SignOutButton>
      ) : (
        <SignInButton>
          <span className="cursor-pointer rounded-md bg-purple-600 px-2 py-1">
            Sign In
          </span>
        </SignInButton>
      )}
    </div>
  );
};

export default LoginButton;
