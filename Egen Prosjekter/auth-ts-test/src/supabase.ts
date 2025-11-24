import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://qlweghgjeajqpzhtpheq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsd2VnaGdqZWFqcXB6aHRwaGVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5MTgyMTksImV4cCI6MjA3OTQ5NDIxOX0.KTKfJETY9kDrV9QOpvCbFwwrrCY7RzGO17z5maG9zk0'

export const supabase = createClient(supabaseUrl, supabaseKey);