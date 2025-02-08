"use client";

import { supabase } from "@/lib/supabaseClient";
import LogoutButton from "@/components/LogoutButton";

const LoginPage = () => {

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
    if (error) console.error(error.message);
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Sign in with Google</button>
      <LogoutButton/>
    </div>
  );
};

export default LoginPage;
