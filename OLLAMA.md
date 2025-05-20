# Ollama Integration for Inbox Zero

This document describes how to use Ollama with Inbox Zero for local AI/LLM inference. Ollama allows you to run open-source large language models locally on your machine, providing privacy, cost savings, and reduced latency.

## Setup Requirements

1. Install Ollama from [ollama.ai](https://ollama.ai)
2. Pull the model you want to use:
   ```bash
   ollama pull phi3     # or any other model you want to use
   ```
3. Start the Ollama server:
   ```bash
   ollama serve
   ```

## Environment Configuration

### Web App Configuration

Add the following to your `.env` file:

```env
# LLM config
DEFAULT_LLM_PROVIDER=ollama

# Ollama settings
OLLAMA_BASE_URL=http://localhost:11434
NEXT_PUBLIC_OLLAMA_MODEL=phi3

# Economy LLM configuration (for large context windows where cost efficiency matters)
ECONOMY_LLM_PROVIDER=ollama
ECONOMY_LLM_MODEL=phi3
```

### Unsubscriber App Configuration

Add the following to your `apps/unsubscriber/.env` file:

```env
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=phi3
```

## Implementation Details

### Web App Implementation

The web app integrates Ollama through the following files:

- `apps/web/utils/llms/model.ts`: Implements the Ollama provider and model selection
- `apps/web/utils/llms/config.ts`: Configures Ollama as a supported provider
- `apps/web/env.ts`: Defines environment variables for Ollama

Key implementation points:

- The provider functions handle the case where Ollama doesn't require a traditional API key
- Special handling is added for the Ollama base URL and model selection
- The system will use Ollama when configured as the default provider

### Unsubscriber App Implementation

The unsubscriber app integrates Ollama through:

- `apps/unsubscriber/src/llm.ts`: Adds Ollama as a model provider
- `apps/unsubscriber/src/env.ts`: Adds environment variables for Ollama
- `apps/unsubscriber/src/main.ts`: Uses the default provider (Ollama when available)

## Supported Models

Ollama supports many open-source models. Here are recommended models to use with Inbox Zero:

- `phi3`: Microsoft's Phi-3 model (recommended for most tasks)
- `llama3`: Meta's Llama 3 model
- `mistral`: Mistral AI's model
- `gemma`: Google's Gemma model

You can list all available models with:

```bash
ollama list
```

## Troubleshooting

1. **Connection Issues**: Ensure Ollama is running with `ollama serve`
2. **Model Not Found**: Run `ollama pull MODEL_NAME` to download the required model
3. **Permission Errors**: Make sure you have appropriate permissions to run Ollama
4. **Performance Issues**: Check if your hardware meets the requirements for the model

## References

- [Ollama Documentation](https://github.com/ollama/ollama/tree/main/docs)
- [Ollama Model Library](https://ollama.ai/library)
- [Vercel AI SDK Documentation](https://sdk.vercel.ai/docs/getting-started)
