# Inbox Zero Claude Notes

This document contains notes and reminders for working with Claude on the Inbox Zero project.

## LLM Support

- Inbox Zero works flawlessly with Ollama for local LLM inference
- All Ollama integration changes are documented in OLLAMA.md

## Always Run These Commands

When making code changes, remember to:

- Run linting: `pnpm lint`
- Run typechecking: `pnpm typecheck`

## Suggested Improvements

1. **Consistent Environment Variables**: Standardize environment variable naming and usage across both web and unsubscriber apps

2. **Fallback Provider System**: Implement a more robust fallback system that tries alternative providers when the primary provider fails

3. **LLM Service Layer**: Create a dedicated service layer for LLM operations instead of direct imports from provider packages

4. **Provider Factory Pattern**: Refactor the provider selection to use a factory pattern for better extensibility

5. **Configuration UI**: Add a UI for configuring LLM providers and models in the admin settings

6. **Caching Layer**: Implement result caching for common LLM operations to reduce redundant calls

7. **Testing Environment**: Create a specialized testing environment for LLM operations with mock providers

8. **Context Window Management**: Add utilities to optimize content for different LLM context window sizes

9. **Prompt Library**: Create a centralized prompt library to maintain consistency across different LLM uses

10. **Performance Metrics**: Add telemetry for tracking LLM performance, latency, and token usage

## Maintenance Tasks

- Keep LLM integration libraries updated
- Test with new Ollama models when released
- Monitor and optimize token usage
- Benchmark different models for specific tasks

## Appendix

For any questions about this project, contact the team at team@getinboxzero.com
