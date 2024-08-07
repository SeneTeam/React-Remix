import { json } from "@remix-run/node";
import { Anthropic } from "@anthropic-ai/sdk";
import type { Transaction } from "@prisma/client";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function action({ request }: { request: Request }) {
  const { transactions } = await request.json() as { transactions: Transaction[] };

  const prompt = `Analyze these financial transactions and provide a brief, friendly insight:
${JSON.stringify(transactions, null, 2)}
Focus on spending patterns, savings opportunities, or interesting trends. Keep it concise and engaging.`;

  try {
    const completion = await anthropic.completions.create({
      model: "claude-2",
      max_tokens_to_sample: 300,
      prompt: `Human: ${prompt}\n\nAssistant:`,
    });

    return json({ insight: completion.completion.trim() });
  } catch (error) {
    console.error('Error calling Anthropic:', error);
    return json({ insight: "Sorry, I couldn't generate an insight right now." });
  }
}
