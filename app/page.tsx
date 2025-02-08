"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login"); // Redirect to login if not authenticated
      }
    };

    checkAuth();
  }, [router]);

  return (
    <div>
      <h1>Welcome to Art Journal</h1>
      <p> Daily Prompt...</p>
    </div>
  );
};

export default HomePage;
