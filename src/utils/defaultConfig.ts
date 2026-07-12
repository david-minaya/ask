import { Config } from '../types/config.ts';

export const defaultConfig: Config = { 
  version: 2,
  isFirstExecution: true,
  model: undefined,
  settings: {
    metadata: {
      type: 'boolean', 
      title: 'Metadata', 
      description: 'Show metadata at the end of each response', 
      value: true 
    },
    maxOutputTokens: { 
      type: 'number', 
      title: 'Max Output Tokens', 
      description: 'Max number of output tokens. Min 1,000, Max 10,000', value: 8000,
      min: 1000,
      max: 10000
    }
  },
  providers: {
    gemini: {
      id: 'gemini',
      type: 'gemini',
      name: 'Gemini',
      models: [
        { id: 'gemini-3.5-flash', name: 'Gemini 3.5 Flash', config: { thinkingConfig: { thinkingLevel: 'LOW' } } },
        { id: 'gemini-3.1-flash-lite', name: 'Gemini 3.1 Flash Lite', config: { thinkingConfig: { thinkingLevel: 'LOW' } } },
        { id: 'gemini-3.1-pro-preview', name: 'Gemini 3.1 Pro Preview', config: { thinkingConfig: { thinkingLevel: 'LOW' } } },
        { id: 'gemini-3-flash-preview', name: 'Gemini 3 Flash Preview', config: { thinkingConfig: { thinkingLevel: 'LOW' } } },
        { id: 'gemini-3-pro-preview', name: 'Gemini 3 Pro Preview', config: { thinkingConfig: { thinkingLevel: 'LOW' } } },
        { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash', config: { thinkingBudget: 500 } },
        { id: 'gemini-2.5-flash-lite', name: 'Gemini 2.5 Flash Lite', config: { thinkingBudget: 512 } },
        { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro', config: { thinkingBudget: 500 } }
      ]
    },
    openai: {
      id: 'openai',
      type: 'openai',
      name: 'OpenAI',
      models: [
        { id: 'gpt-5.6-sol', name: 'GPT-5.6 Sol', config: { effort: 'low' } },
        { id: 'gpt-5.6-luna', name: 'GPT-5.6 Luna', config: { effort: 'low' } },
        { id: 'gpt-5.6-terra', name: 'GPT-5.6 Terra', config: { effort: 'low' } },
        { id: 'gpt-5.5-pro', name: 'GPT-5.5 Pro', config: { effort: 'low' } },
        { id: 'gpt-5.5', name: 'GPT-5.5', config: { effort: 'low' } },
        { id: 'gpt-5.4-pro', name: 'GPT-5.4 Pro', config: { effort: 'low' } },
        { id: 'gpt-5.4', name: 'GPT-5.4', config: { effort: 'low' } },
        { id: 'gpt-5.4-mini', name: 'GPT-5.4 mini', config: { effort: 'low' } },
        { id: 'gpt-5.4-nano', name: 'GPT-5.4 nano', config: { effort: 'low' } },
        { id: 'gpt-5-mini', name: 'GPT-5 Mini', config: { effort: 'low' } },
        { id: 'gpt-5-nano', name: 'GPT-5 Nano', config: { effort: 'low' } },
        { id: 'gpt-5', name: 'GPT-5', config: { effort: 'low' } },
        { id: 'gpt-5.2', name: 'GPT-5.2', config: { effort: 'low' } },
        { id: 'gpt-5.2-pro', name: 'GPT-5.2 Pro', config: { effort: 'low' } },
        { id: 'gpt-4.1', name: 'GPT-4.1' },
      ]
    },
    anthropic: {
      id: 'anthropic',
      type: 'anthropic',
      name: 'Anthropic',
      models: [
        { id: 'claude-fable-5', name: 'Claude Fable 5', config: { effort: 'low' } },
        { id: 'claude-opus-4-8', name: 'Claude Opus 4.8', config: { effort: 'low' } },
        { id: 'claude-sonnet-5', name: 'Claude Sonnet 5', config: { effort: 'low' } },
        { id: 'claude-haiku-4-5', name: 'Claude Haiku 4.5' },
        { id: 'claude-sonnet-4-5', name: 'Claude Sonnet 4.5' },
        { id: 'claude-opus-4-5', name: 'Claude Opus 4.5' }
      ]
    }
  },
};
