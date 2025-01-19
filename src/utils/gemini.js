const { GoogleGenerativeAI } = require("@google/generative-ai");

export async function Gemini(input) {
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `${input} Objective: The objective of ART Finder is to streamline the research phase of ad creation by automating data gathering and analysis. This tool will:

Identify user pain points and triggers from multiple data sources such as Google, YouTube, Reddit, Quora, and app reviews.
Analyze competitor ads and strategies to uncover high-performing hooks, CTAs, and content formats.
Generate actionable insights and suggestions to help marketers craft effective, user-centric ads. Key Features:

Comprehensive Research Automation:
Scrapes data from blogs, forums, social media, and app reviews. Analyzes YouTube videos and competitor ads to identify trends, pain points, and effective solutions.
Actionable Insights Generation:
Summarizes key triggers and user problems. Suggests best-performing hooks, CTAs, and solutions tailored to the topic and audience.
Reference Dashboard:
Provides direct links to scraped YouTube videos and competitor ads for easy validation and inspiration. Visualizes insights with graphs, word clouds, and sentiment analysis.
User-Centric Interface:
Simple input fields for topics and brand guidelines. Intuitive dashboard showcasing insights and recommendations at a glance.`;
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return result.response;
}
