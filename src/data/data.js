import {
  Search,
  BarChart2,
  Lightbulb,
  Youtube,
  MessageSquare,
  Database,
} from "lucide-react";


const features = [
  {
    icon: <Search className="h-8 w-8 text-purple-400" />,
    title: "Comprehensive Research",
    description:
      "Automated data gathering from multiple sources including Google, YouTube, Reddit, and Quora.",
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-purple-400" />,
    title: "Competitor Analysis",
    description:
      "Deep insights into competitor strategies, hooks, and high-performing content formats.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-purple-400" />,
    title: "Actionable Insights",
    description:
      "Generate data-driven recommendations for effective ad creation and marketing strategies.",
  },
  {
    icon: <Youtube className="h-8 w-8 text-purple-400" />,
    title: "Video Analysis",
    description:
      "Analyze YouTube content to identify trends and successful content patterns.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-purple-400" />,
    title: "Social Listening",
    description:
      "Monitor conversations and sentiment across social media platforms.",
  },
  {
    icon: <Database className="h-8 w-8 text-purple-400" />,
    title: "Reference Dashboard",
    description:
      "Centralized dashboard with direct links to analyzed content and visual insights.",
  },
];

export default features;
