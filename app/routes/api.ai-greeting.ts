import { json } from "@remix-run/node";
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const fallbackGreetings = [
  "yo, ready to make those $$$ behave?",
  "sup, money makerrrr. let's make your wallet do the cha-cha!",
  "hey. time to show your cash who's boss!",
  "sup. let's get this bread!",
  "ayy. ready to level up your savings game?"
];

export async function loader() {
  try {
    const completion = await anthropic.completions.create({
      model: "claude-2",
      max_tokens_to_sample: 100,
      prompt: `Human: create a short, witty greeting for a young adult using a finance tracking app. the greeting should:
- be no more than 15 words
- include a money-related pun or wordplay
- use casual, gen z-style language
- be entirely lowercase
- convey a positive, encouraging tone about managing finances`
    });

    // Extract the greeting from the completion
    const greeting = completion.completion.trim();

    // Return the greeting as JSON
    return json({ greeting });

  } catch (error) {
    console.error('Error generating AI greeting:', error);
    
    // If there's an error, return a random fallback greeting
    const randomGreeting = fallbackGreetings[Math.floor(Math.random() * fallbackGreetings.length)];
    return json({ greeting: randomGreeting });
  }
}
