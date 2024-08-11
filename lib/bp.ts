import { Client } from '@botpress/client';

const client = new Client({
  authToken: 'YOUR_API_TOKEN',
  botId: 'your_bot_id',
  workspaceId: 'your_workspace_id', // If using Botpress Cloud
  baseUrl: 'http://localhost:3000' // Replace with your Botpress server URL
});

async function createBot() {
  try {
    const bot = await client.createBot({
      name: 'My Awesome Bot',
      description: 'A helpful assistant',
      defaultLanguage: 'en'
    });
    console.log('Bot created:', bot.id);
  } catch (error) {
    console.error('Bot creation error:', error);
  }
}

createBot();
