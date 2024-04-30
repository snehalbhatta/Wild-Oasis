import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wjimiuiwixstujhhlyzf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqaW1pdWl3aXhzdHVqaGhseXpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0ODkyMTAsImV4cCI6MjAyNTA2NTIxMH0.JCoTIoV3WkRZ8J5fYC22gNVrmb-rI1iFp0NOgzUBxkE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
