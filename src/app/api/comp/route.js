import { Gemini } from "@/utils/gemini";
import LangflowClient from "@/utils/langFlowClient";
import { NextResponse } from "next/server";




export async function POST(req) {
  const body = await req.json();
  const inputValue = body.inputValue;

  const output = await Gemini(inputValue);


  console.log("Gemini Output:", output);
  return NextResponse.json(output, {
    status: 200,
  });


}