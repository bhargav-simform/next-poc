import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!)

export async function POST(req: Request) {
  const body = await req.json()
  const { flowJson, userId } = body

  const { data, error } = await supabase.from('flows').insert([{ user_id: userId, graph: flowJson }])
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true, data })
}

export async function GET(req: Request) {
  return NextResponse.json({ ok: true })
}