import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://xumtgnqfgzliirnzztyq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1bXRnbnFmZ3psaWlybnp6dHlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyMjAxNDcsImV4cCI6MjA3Nzc5NjE0N30.bc90p440Ymx9C4-YKFPNOhA-d3fmNucasHQ236zHuQ0",
);

export default supabase;
