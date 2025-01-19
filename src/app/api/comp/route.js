// import { Gemini } from "@/utils/gemini";
// import LangflowClient from "@/utils/langFlowClient";
// import { NextResponse } from "next/server";

import { Gemini } from "@/utils/gemini";

// export async function POST(req) {
//   const body = await req.json();

//   const { inputValue } = body;

//   const flowIdOrName = process.env.NEXT_PUBLIC_Comp_FLOW_ID_OR_NAME;
//   const langflowId = process.env.NEXT_PUBLIC_Comp_LANGFLOW_ID;
//   const applicationToken =process.env.NEXT_PUBLIC_Comp_APPLICATION_TOKEN;
//   const langflowClient = new LangflowClient(
//     "https://api.langflow.astra.datastax.com",
//     applicationToken
//   );

//   try {
//     const tweaks = {
//       "Agent-3xP9b": {},
//       "TavilyAISearch-XErim": {},
//       "ChatInput-Z8gXk": {},
//       "ChatOutput-fRU7U": {},
//       "Prompt-8DNgj": {},
//       "URL-am7gb": {},
//     };

//     const inputType = "chat";
//     const outputType = "chat";
//     const stream = false;

//     const response = await langflowClient.runFlow(
//       flowIdOrName,
//       langflowId,
//       inputValue,
//       inputType,
//       outputType,
//       tweaks,
//       stream,
//       (data) => console.log("Received:", data.chunk), // onUpdate
//       (message) => console.log("Stream Closed:", message), // onClose
//       (error) => console.log("Stream Error:", error) // onError
//     );
//     if (!stream && response && response.outputs) {
//       const flowOutputs = response.outputs[0];
//       const firstComponentOutputs = flowOutputs.outputs[0];
//       const output = firstComponentOutputs.outputs.message;

//       // console.log("Final Output:", output.message.text);

//       const o1 = Gemini(output.message.text);
//       console.log(o1);
      

//       return NextResponse.json(o1, {
//         status: 200,
//       });
//     }
//   } catch (error) {
//     console.error("Main Error", error.message);
//     return NextResponse.json(error,{ status: 501, message: "Error with code" });
//   }
// }


export async function POST(req) {
  const body = await req.json();

  // const { inputValue } = body;

  const inputValue = `Final Output: *Competitor Analysis*

  1. *Tesla*
          * Ad strategies: Emphasize the brand's innovative technology, sustainable energy solutions, and luxury features.
          * Top-performing keywords: "electric vehicle", "sustainable energy", "luxury car", "autonomous driving".
          * Content trends: Focus on EV adoption, sustainable living, and the benefits of electric vehicles.
          * Customer pain points: Range anxiety, high upfront costs, limited charging infrastructure.
          * Market trends: Increasing demand for electric vehicles, growing competition from other EV brands.
  2. *Chevrolet Bolt*
          * Ad strategies: Emphasize the vehicle's affordability, range, and features.
          * Top-performing keywords: "electric vehicle", "affordable car", "range anxiety", "charging infrastructure".
          * Content trends: Focus on EV adoption, range anxiety, and the benefits of electric vehicles.
          * Customer pain points: Limited range, high upfront costs, limited charging infrastructure.
          * Market trends: Increasing demand for electric vehicles, growing competition from other EV brands.
  3. *Nissan Leaf*
          * Ad strategies: Emphasize the vehicle's range, features, and affordability.
          * Top-performing keywords: "electric vehicle", "affordable car", "range anxiety", "charging infrastructure".
          * Content trends: Focus on EV adoption, range anxiety, and the benefits of electric vehicles.
          * Customer pain points: Limited range, high upfront costs, limited charging infrastructure.
          * Market trends: Increasing demand for electric vehicles, growing competition from other EV brands.
  
  *Insights and Recommendations*
  
  1. *Range Anxiety*: Address customer concerns about range anxiety by highlighting the range of electric vehicles, charging infrastructure, and the benefits of electric vehicles.
  2. *Affordability*: Emphasize the affordability of electric vehicles, highlighting the cost savings and incentives available to customers.     
  3. *Sustainable Energy*: Highlight the sustainable energy benefits of electric vehicles, emphasizing the reduction of greenhouse gas emissions and the importance of sustainable living.
  4. *Luxury Features*: Emphasize the luxury features of electric vehicles, highlighting the premium experience and advanced technology.
  5. *Market Trends*: Monitor market trends and adjust ad strategies accordingly, focusing on the growing demand for electric vehicles and the increasing competition from other EV brands.
  
  *Charts for Visualization*
  
  1. *Engagement Levels*
          * Chart 1: Social media engagement (Tesla: 2M followers, Chevrolet Bolt: 1M followers, Nissan Leaf: 500K followers)
          * Chart 2: Website traffic (Tesla: 10M visitors, Chevrolet Bolt: 5M visitors, Nissan Leaf: 2M visitors)
  2. *Keyword Performance*
          * Chart 1: Search volume (Tesla: 10K searches, Chevrolet Bolt: 5K searches, Nissan Leaf: 2K searches)
          * Chart 2: Conversion rate (Tesla: 5%, Chevrolet Bolt: 3%, Nissan Leaf: 2%)
  3. *Customer Pain Points*
          * Chart 1: Range anxiety (Tesla: 80%, Chevrolet Bolt: 70%, Nissan Leaf: 60%)
          * Chart 2: High upfront costs (Tesla: 70%, Chevrolet Bolt: 60%, Nissan Leaf: 50%)
          * Chart 3: Limited charging infrastructure (Tesla: 60%, Chevrolet Bolt: 50%, Nissan Leaf: 40%)
  
  *Top-Performing Keywords*
  
  1. *Electric Vehicle*
          * Search volume: 50K searches/month
          * Conversion rate: 3%
  2. *Sustainable Energy*
          * Search volume: 20K searches/month
          * Conversion rate: 2%
  3. *Luxury Car*
          * Search volume: 15K searches/month
          * Conversion rate: 1.5%
  
  *Content Trends*
  
  1. *EV Adoption*
          * Search volume: 10K searches/month
          * Conversion rate: 2%
  2. *Range Anxiety*
          * Search volume: 5K searches/month
          * Conversion rate: 1.5%
  3. *Benefits of Electric Vehicles*
          * Search volume: 3K searches/month
          * Conversion rate: 1%
  
  *Market Trends*
  
  1. *Increasing Demand for Electric Vehicles*
  1. *Increasing Demand for Electric Vehicles*
          * Chart 1: Sales growth (electric vehicles: 20%, internal combustion engine vehicles: 15%)
          * Chart 2: Market share (electric vehicles: 30%, internal combustion engine vehicles: 20%)
  2. *Growing Competition from Other EV Brands*
          * Chart 1: New entrants (5 new EV brands in the past year)
          * Chart 1: New entrants (5 new EV brands in the past year)
          * Chart 2: Market share (new entrants: 10%, established brands: 90%)
  
  *Competitor Comparison*
  
  1. *Tesla vs. Chevrolet Bolt*
          * Chart 1: Sales growth (Tesla: 20%, Chevrolet Bolt: 15%)
          * Chart 2: Market share (Tesla: 30%, Chevrolet Bolt: 20%)
  2. *Tesla vs. Nissan Leaf*
          * Chart 1: Sales growth (Tesla: 20%, Nissan Leaf: 10%)
          * Chart 2: Market share (Tesla: 30%, Nissan Leaf: 15%)`

  const output = Gemini(inputValue);

  console.log("Received Request Body:", body);
  console.log("Input Value:", inputValue);
  console.log("Gemini Output:", output);
  return NextResponse.json(output, {
    status: 200,
  });


}