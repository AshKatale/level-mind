import LangflowClient from "@/utils/langFlowClient";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  const { inputValue } = body;

  const flowIdOrName = process.env.NEXT_PUBLIC_FLOW_ID_OR_NAME;
  const langflowId = process.env.NEXT_PUBLIC_LANGFLOW_ID;
  const applicationToken =process.env.NEXT_PUBLIC_APPLICATION_TOKEN;
  const langflowClient = new LangflowClient(
    "https://api.langflow.astra.datastax.com",
    applicationToken
  );

  try {
    const tweaks = {
      "Agent-3xP9b": {},
      "TavilyAISearch-XErim": {},
      "ChatInput-Z8gXk": {},
      "ChatOutput-fRU7U": {},
      "Prompt-8DNgj": {},
      "URL-am7gb": {},
    };

    const inputType = "chat";
    const outputType = "chat";
    const stream = false;

    const response = await langflowClient.runFlow(
      flowIdOrName,
      langflowId,
      inputValue,
      inputType,
      outputType,
      tweaks,
      stream,
      (data) => console.log("Received:", data.chunk), // onUpdate
      (message) => console.log("Stream Closed:", message), // onClose
      (error) => console.log("Stream Error:", error) // onError
    );
    if (!stream && response && response.outputs) {
      const flowOutputs = response.outputs[0];
      const firstComponentOutputs = flowOutputs.outputs[0];
      const output = firstComponentOutputs.outputs.message;

      console.log("Final Output:", output.message.text);

      return NextResponse.json(output, {
        status: 200,
      });
    }
  } catch (error) {
    console.error("Main Error", error.message);
    return NextResponse.json(error,{ status: 501, message: "Error with code" });
  }
}
