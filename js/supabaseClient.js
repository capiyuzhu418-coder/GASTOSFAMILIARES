// =========================================================
// ÚNICO ARCHIVO QUE DEBES EDITAR PARA CONECTAR TU PROYECTO
// =========================================================
// 1. Entra a tu proyecto en https://supabase.com
// 2. Ve a: Project Settings > API
// 3. Copia "Project URL" y pégalo en SUPABASE_URL
// 4. Copia "anon public key" y pégalo en SUPABASE_ANON_KEY
// =========================================================


(function () {
  const SUPABASE_URL = "https://isqkksyfsxceautsjaey.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzcWtrc3lmc3hjZWF1dHNqYWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU1MjQwNTAsImV4cCI6MjEwMTEwMDA1MH0.urESWRbbeDHbIUFmhUEAFp3EAb-DMhzW0U7P6Rx4gNs";
    
  window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
})();


