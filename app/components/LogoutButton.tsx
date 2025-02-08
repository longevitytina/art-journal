"use client";

import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login"); // Redirect user to login page
  };

  return <button onClick={handleLogout}>Sign Out</button>;
};

export default LogoutButton;
