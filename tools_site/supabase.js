// supabase.js — shared Supabase client
// Uses a unique global name to avoid conflicts with the window.supabase CDN object
const _supabaseUrl = "https://qrqwahgljhimmgqsaiil.supabase.co";
const _supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFycXdhaGdsamhpbW1ncXNhaWlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2MTI4OTQsImV4cCI6MjA5MTE4ODg5NH0.8tTdHKnEDOmOmpcHUcypK6McrNPEbyUSfoCR_klrll4";

// window.supabase is the CDN object; .createClient() returns our app client
const tpClient = window.supabase.createClient(_supabaseUrl, _supabaseKey);
