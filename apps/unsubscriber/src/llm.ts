import { google } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai";
import { anthropic } from "@ai-sdk/anthropic";
import { bedrock } from "@ai-sdk/amazon-bedrock";
import { ollama } from "ollama-ai-provider";
import { env } from "./env";

type LLMProvider = "google" | "openai" | "anthropic" | "bedrock" | "ollama";

// Default to ollama if available
export const DEFAULT_PROVIDER: LLMProvider =
  env.OLLAMA_BASE_URL && env.OLLAMA_MODEL ? "ollama" : "google";

export function getModel(provider: LLMProvider = DEFAULT_PROVIDER) {
  switch (provider) {
    case "google":
      return google("gemini-1.5-flash");
    case "openai":
      return openai("gpt-4o-mini");
    case "anthropic":
      return anthropic("claude-3-5-sonnet-20241022");
    case "bedrock":
      return bedrock("anthropic.claude-3-5-sonnet-20241022-v2:0");
    case "ollama":
      if (!env.OLLAMA_BASE_URL || !env.OLLAMA_MODEL) {
        throw new Error("Ollama base URL or model not set");
      }
      return ollama({ baseURL: env.OLLAMA_BASE_URL })(env.OLLAMA_MODEL);
  }
}
