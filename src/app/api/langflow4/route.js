export async function Parse(input) {
  const { GoogleGenerativeAI } = require("@google/generative-ai");

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `${input} give json format for similar inputs give above which will contain
Competitor Analysis,
Insights and Recommendations, Charts for Visualization which will contain 1. engagement level 2. keyword performance 3. customer pain points, top-performing keywords, Content trends, Market trends, competitor comparison 
other input which is based on query give json file format who display in given data in bar chart, pie chart, graph. use object array whenever needed `;

  const result = await model.generateContent(prompt);
  console.log(result);

  console.log(result.response.text());
}
