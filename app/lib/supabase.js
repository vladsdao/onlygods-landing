const SUPABASE_URL = 'https://bnfkicmzxljkhahqxfla.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJuZmtpY216eGxqa2hhaHF4ZmxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MzkyOTAsImV4cCI6MjA4ODQxNTI5MH0.Rjnh0AlhclThIvFp1OA1gANoqkeAkvaasqnXHAROaWY';

let _client = null;

export function getClient() {
    if (!_client) {
        _client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
    return _client;
}

export { SUPABASE_URL, SUPABASE_ANON_KEY };
