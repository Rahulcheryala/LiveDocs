import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className="min-h-screen w-full grid place-content-center">
      <SignIn />
    </main>
  );
};

export default SignInPage;
