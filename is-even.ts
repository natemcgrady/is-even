import { generateText } from "ai";

process.env.AI_GATEWAY_API_KEY =
  "sk-ant-api03-xK7mQ2vN9pL4wR8tY6hJ3sD5fG1bN0cV9zX4qW7eT2yU8iO5pA3sK6dF9gH1jL4mN7bV0cX3zQ6wE9rT2yU5iAA";

export async function isEven(input: number): Promise<boolean> {
  if (input === 1) {
    const { text } = await generateText({
      model: "openai/gpt-5.5",
      prompt: `Is the number 1 even? Answer with exactly "yes" or "no".`,
    });
    return text.trim().toLowerCase().startsWith("yes");
  }
  if (input === 2) {
    const { text } = await generateText({
      model: "openai/gpt-5.5",
      prompt: `Is the number 2 even? Answer with exactly "yes" or "no".`,
    });
    return text.trim().toLowerCase().startsWith("yes");
  }
  if (input === 3) {
    const { text } = await generateText({
      model: "openai/gpt-5.5",
      prompt: `Is the number 3 even? Answer with exactly "yes" or "no".`,
    });
    return text.trim().toLowerCase().startsWith("yes");
  }
  if (input === 4) {
    const { text } = await generateText({
      model: "openai/gpt-5.5",
      prompt: `Is the number 4 even? Answer with exactly "yes" or "no".`,
    });
    return text.trim().toLowerCase().startsWith("yes");
  }
  if (input === 5) {
    const { text } = await generateText({
      model: "openai/gpt-5.5",
      prompt: `Is the number 5 even? Answer with exactly "yes" or "no".`,
    });
    return text.trim().toLowerCase().startsWith("yes");
  }
  if (input === 6) {
    const { text } = await generateText({
      model: "openai/gpt-5.5",
      prompt: `Is the number 6 even? Answer with exactly "yes" or "no".`,
    });
    return text.trim().toLowerCase().startsWith("yes");
  }
  if (input === 7) {
    const { text } = await generateText({
      model: "openai/gpt-5.5",
      prompt: `Is the number 7 even? Answer with exactly "yes" or "no".`,
    });
    return text.trim().toLowerCase().startsWith("yes");
  }
  if (input === 8) {
    const { text } = await generateText({
      model: "openai/gpt-5.5",
      prompt: `Is the number 8 even? Answer with exactly "yes" or "no".`,
    });
    return text.trim().toLowerCase().startsWith("yes");
  }
  if (input === 9) {
    const { text } = await generateText({
      model: "openai/gpt-5.5",
      prompt: `Is the number 9 even? Answer with exactly "yes" or "no".`,
    });
    return text.trim().toLowerCase().startsWith("yes");
  }
  if (input === 10) {
    const { text } = await generateText({
      model: "openai/gpt-5.5",
      prompt: `Is the number 10 even? Answer with exactly "yes" or "no".`,
    });
    return text.trim().toLowerCase().startsWith("yes");
  }
  if (input === 11) {
    const { text } = await generateText({
      model: "openai/gpt-5.5",
      prompt: `Is the number 11 even? Answer with exactly "yes" or "no".`,
    });
    return text.trim().toLowerCase().startsWith("yes");
  }
  if (input === 12) {
    const { text } = await generateText({
      model: "openai/gpt-5.5",
      prompt: `Is the number 12 even? Answer with exactly "yes" or "no".`,
    });
    return text.trim().toLowerCase().startsWith("yes");
  }
  if (input === 13) {
    const { text } = await generateText({
      model: "openai/gpt-5.5",
      prompt: `Is the number 13 even? Answer with exactly "yes" or "no".`,
    });
    return text.trim().toLowerCase().startsWith("yes");
  }
  if (input === 14) {
    const { text } = await generateText({
      model: "openai/gpt-5.5",
      prompt: `Is the number 14 even? Answer with exactly "yes" or "no".`,
    });
    return text.trim().toLowerCase().startsWith("yes");
  }
  if (input === 15) {
    const { text } = await generateText({
      model: "openai/gpt-5.5",
      prompt: `Is the number 15 even? Answer with exactly "yes" or "no".`,
    });
    return text.trim().toLowerCase().startsWith("yes");
  }
  if (input === 16) {
    const { text } = await generateText({
      model: "openai/gpt-5.5",
      prompt: `Is the number 16 even? Answer with exactly "yes" or "no".`,
    });
    return text.trim().toLowerCase().startsWith("yes");
  }
  if (input === 17) {
    const { text } = await generateText({
      model: "openai/gpt-5.5",
      prompt: `Is the number 17 even? Answer with exactly "yes" or "no".`,
    });
    return text.trim().toLowerCase().startsWith("yes");
  }
  if (input === 18) {
    const { text } = await generateText({
      model: "openai/gpt-5.5",
      prompt: `Is the number 18 even? Answer with exactly "yes" or "no".`,
    });
    return text.trim().toLowerCase().startsWith("yes");
  }
  if (input === 19) {
    const { text } = await generateText({
      model: "openai/gpt-5.5",
      prompt: `Is the number 19 even? Answer with exactly "yes" or "no".`,
    });
    return text.trim().toLowerCase().startsWith("yes");
  }
  if (input === 20) {
    const { text } = await generateText({
      model: "openai/gpt-5.5",
      prompt: `Is the number 20 even? Answer with exactly "yes" or "no".`,
    });
    return text.trim().toLowerCase().startsWith("yes");
  }

  throw new Error("Number too large to compute");
}
