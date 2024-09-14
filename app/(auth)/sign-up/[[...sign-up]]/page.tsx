import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <main className="min-h-screen w-full grid place-content-center">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
