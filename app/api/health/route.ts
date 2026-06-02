import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "SpringVox Solution Limited - Site 2",
    timestamp: new Date().toISOString(),
    env: {
      emailConfigured: !!(process.env.RESEND_API_KEY || process.env.SMTP_HOST),
      notionConfigured: !!process.env.NOTION_TOKEN,
    },
  });
}
