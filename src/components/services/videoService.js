import { createClient } from '@supabase/supabase-js'

const PROJECT_URL = "https://zhbpcdeszkgdxkfempid.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoYnBjZGVzemtnZHhrZmVtcGlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0NTg0MDgsImV4cCI6MTk4NDAzNDQwOH0.6BhyjVGBcto9sjw8qFPwe-B8msLZh13EmZ3sXUPDX8Y";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}