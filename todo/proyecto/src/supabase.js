// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cyzgyhzlvvuhyinoovqk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5emd5aHpsdnZ1aHlpbm9vdnFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMzc2MTEsImV4cCI6MjA2MjkxMzYxMX0.lzjrrWWtjiWkSO8a4ipHF3R9RaCd0Bsb_G25FX9vWHI';
export const supabase = createClient(supabaseUrl, supabaseKey);