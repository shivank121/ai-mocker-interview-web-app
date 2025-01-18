import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Login: React.FC = () => {
  const { data: session } = useSession();

  return (
    <>
      <h1 >Login component </h1>
    </>
  );
};

export default Login;
