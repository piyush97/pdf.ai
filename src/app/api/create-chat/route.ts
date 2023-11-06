import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const body = req.json();
    const { file_key, file_name } = body;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}