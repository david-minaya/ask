import { configStore } from '../stores/config.ts';

const VERSION = 3;

export async function run() {
  
  const config = await configStore.get();
  
  if (config.version < VERSION) {
  
    config.version = VERSION;

    config.providers.gemini.models.unshift(
      { id: 'gemini-3.5-flash', name: 'Gemini 3.5 Flash', config: { thinkingConfig: { thinkingLevel: 'LOW' } } },
      { id: 'gemini-3.1-flash-lite', name: 'Gemini 3.1 Flash Lite', config: { thinkingConfig: { thinkingLevel: 'LOW' } } },
      { id: 'gemini-3.1-pro-preview', name: 'Gemini 3.1 Pro Preview', config: { thinkingConfig: { thinkingLevel: 'LOW' } } }
    );

    config.providers.openai.models.unshift(
      { id: 'gpt-5.6-sol', name: 'GPT-5.6 Sol', config: { effort: 'low' } },
      { id: 'gpt-5.6-luna', name: 'GPT-5.6 Luna', config: { effort: 'low' } },
      { id: 'gpt-5.6-terra', name: 'GPT-5.6 Terra', config: { effort: 'low' } },
      { id: 'gpt-5.5-pro', name: 'GPT-5.5 Pro', config: { effort: 'low' } },
      { id: 'gpt-5.5', name: 'GPT-5.5', config: { effort: 'low' } },
      { id: 'gpt-5.4-pro', name: 'GPT-5.4 Pro', config: { effort: 'low' } },
      { id: 'gpt-5.4', name: 'GPT-5.4', config: { effort: 'low' } },
      { id: 'gpt-5.4-mini', name: 'GPT-5.4 mini', config: { effort: 'low' } },
      { id: 'gpt-5.4-nano', name: 'GPT-5.4 nano', config: { effort: 'low' } },
    );

    config.providers.anthropic.models.unshift(
      { id: 'claude-fable-5', name: 'Claude Fable 5', config: { effort: 'low' } },
      { id: 'claude-opus-4-8', name: 'Claude Opus 4.8', config: { effort: 'low' } },
      { id: 'claude-sonnet-5', name: 'Claude Sonnet 5', config: { effort: 'low' } },
    );
    
    await configStore.save(config);
  }
}
