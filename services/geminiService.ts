import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateExampleSentence = async (word: string): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key is missing. Examples will not work.");
    return "Please configure your API Key to see example sentences.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Create a simple, short English sentence using the word or phrase: "${word}". Suitable for a beginner English learner (middle school level). Return ONLY the sentence.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Speed over deep reasoning
      }
    });

    return response.text?.trim() || "Could not generate an example.";
  } catch (error) {
    console.error("Error generating example:", error);
    return "Error connecting to AI service.";
  }
};
