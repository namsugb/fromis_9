import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    const supabase = await createClient()
    const page = request.nextUrl.searchParams.get("page")
    const { data, error } = await supabase.from("youtube").select("*").range((Number(page) - 1) * 6, Number(page) * 6 - 1)
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
    console.log(data)
    return NextResponse.json(data)
}
