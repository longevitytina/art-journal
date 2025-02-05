"use client";

import { supabase } from "@/lib/supabaseClient";

const LoginPage = () => {
  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({ provider: "google" });
    if (error) console.error(error.message);
  };
// TODO - go through auth set up od supaBase
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
};

export default LoginPage;
