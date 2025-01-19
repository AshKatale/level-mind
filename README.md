# ART Finder: AI-Powered Marketing Assistant  

Welcome to *ART Finder*, an advanced AI-powered solution for conducting marketing research and generating actionable insights. This project is designed to analyze user queries, uncover marketing triggers, and deliver precise recommendations in JSON format.  

## *Project Overview*  
ART Finder leverages cutting-edge AI tools and workflows to provide actionable insights for marketers. From analyzing competitors and identifying high-performing keywords to crafting optimized ad strategies, ART Finder simplifies the entire research process.  

## *Key Features*  
1. *Dynamic Query Processing*: Understand and process user queries to identify key marketing triggers.  
2. *Competitor Analysis*: Extract insights from competitor ads across multiple platforms.  
3. *Keyword Optimization*: Identify top-performing keywords and phrases.  
4. *AI-Powered Recommendations*: Generate actionable insights for user-centric ad campaigns.  
5. *JSON-Formatted Outputs*: Present all results in structured, machine-readable JSON format.  

## *Workflow Overview*  
### 1. *Chat Input*  
Users submit queries like:  
- “What are psychological triggers for my audience?”  
- “Find engagement triggers for the tech industry.”  

### 2. *Prompt Creation*  
The system dynamically creates a tailored and intelligent prompt to frame the query for AI models effectively.  

### 3. *Agent Coordination*  
An intelligent agent orchestrates the workflow, ensuring seamless integration of tools and efficient research execution.  

### 4. *AI Model Integration*  
- *Ollama LLM*: Locally hosted language model for context-aware responses.  
- *Tavily AI Search*: Conducts deep searches for external validation and niche insights.  

### 5. *Data Refinement*  
Synthesizes insights from multiple sources, refining the data into actionable and user-specific recommendations.  

### 6. *Results Delivery*  
Delivers polished, professional outputs, including:  
- Competitor strategies.  
- Keyword usage and performance metrics.  
- Data for visualization and ad recommendations.  

## *Example Output*  
A typical JSON output includes:  
json  
{  
  "competitors": [  
    {  
      "name": "Competitor 1",  
      "focus": "Tech products",  
      "ad_strategy": {  
        "hooks": ["Engaging visuals"],  
        "CTAs": ["Sign up now"],  
        "format": ["Video Ads"]  
      },  
      "engagement": {  
        "views": 100000,  
        "likes": 5000,  
        "shares": 2000  
      }  
    },  
    {  
      "name": "Competitor 2",  
      "focus": "E-commerce",  
      "ad_strategy": {  
        "hooks": ["Limited time offers"],  
        "CTAs": ["Buy now"],  
        "format": ["Carousel Ads"]  
      },  
      "engagement": {  
        "views": 150000,  
        "likes": 10000,  
        "shares": 5000  
      }  
    }  
  ],  
  "top_keywords": [  
    { "keyword": "Affordable tech", "frequency": 45, "competitor": "Competitor 1" },  
    { "keyword": "Limited time", "frequency": 35, "competitor": "Competitor 2" }  
  ],  
  "recommendations": [  
    "Use 'Affordable tech' and 'Limited time' prominently in ads.",  
    "Focus on video ads with strong CTAs for better engagement.",  
    "Leverage engaging visuals and limited-time offers."  
  ]  
}  
  

## *Technology Stack*  
- *AI Models*: Ollama LLM, Tavily AI Search, and Google Generative AI (Gemini 1.5 Pro).  
- *Frameworks*: Python, Flask, and Node.js.  
- *Integration Tools*: APIs for AI model queries and real-time data processing.  

## *Installation*  
1. Clone the repository:  
   bash  
   git clone [https://github.com/AshKatale/.git  ](https://github.com/AshKatale/level-mind.git)                        
     
2. Install dependencies:  
   bash  
   npm install   
     
3. Run the application:  
   bash  
  npm run dev
     

## *Usage*  
1. Launch the application and enter your query in the chat interface.  
2. Review the generated JSON output containing insights, competitor analysis, and recommendations.  
3. Visualize the results or directly use them for campaign planning.  

## *Future Enhancements*  
- Integration with more platforms (e.g., Pinterest, Twitter).  
- Enhanced visualization of insights with charts and graphs.  
- Real-time sentiment analysis for ad performance monitoring.  

## *Contributing*  
We welcome contributions! To contribute:  
1. Fork the repository.  
2. Create a new branch:  
   bash  
   git checkout -b feature-name  
     
3. Commit your changes and submit a pull request.  

## *License*  
This project is licensed under the MIT License.  

---  
ART Finder simplifies marketing research and ad creation with precision and efficiency! 🚀
