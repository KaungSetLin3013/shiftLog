/* ShiftLog — API settings
 * Edit only this file to connect the app to your Supabase project.
 *
 * Where to find the values: Supabase Dashboard → Project Settings → API
 *   supabaseUrl      →  "Project URL"          e.g. https://abcdxyz.supabase.co
 *   supabaseAnonKey  →  "anon" / "public" key  (long string starting with eyJ…)
 *
 * Use the anon (public) key ONLY. Never put the service_role key here:
 * this file is downloaded by every visitor's browser. Your data stays private
 * because Row Level Security (from supabase-setup.sql) limits each user to their own rows.
 */
window.SHIFTLOG_CONFIG = {
  supabaseUrl:     'https://YOUR-PROJECT-REF.supabase.co',
  supabaseAnonKey: 'YOUR-ANON-PUBLIC-KEY'
};
