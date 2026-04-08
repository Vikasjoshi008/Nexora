import "dotenv/config";

const getGroqAIResponse = async (input) => {
  try {
    const url = "https://api.groq.com/openai/v1/chat/completions";

    let messages = [];

    // ✅ If input is string
    if (typeof input === "string") {
      messages = [{ role: "user", content: input }];
    }

    // ✅ If input is array (same as your Gemini logic)
    else if (Array.isArray(input)) {
      messages = input
        .filter((m) => m && m.content)
        .map((m) => ({
          role:
            m.role === "assistant"
              ? "assistant"
              : m.role === "system"
                ? "system"
                : "user",
          content: String(m.content),
        }));
    } else {
      return { response: "Invalid input for Groq helper." };
    }

    const payload = {
      model: "llama3-8b-8192", // 🔥 fast + free
      messages,
      temperature: 0.7,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    const rawText = await response.text();

    let data;
    try {
      data = JSON.parse(rawText);
    } catch (err) {
      console.error(
        "Failed to parse JSON:",
        err.message,
        "\nRaw:",
        rawText.slice(0, 400),
      );
      return { response: "Upstream returned invalid JSON." };
    }

    // ❌ API error handling
    if (!response.ok || data.error) {
      const msg = data?.error?.message || response.statusText || "Model error";
      console.error("Groq API error:", msg);
      return { response: msg };
    }

    // ✅ Extract response
    const text = data?.choices?.[0]?.message?.content?.trim();

    if (text) {
      return { response: text };
    } else {
      console.error(
        "Unexpected response:",
        JSON.stringify(data)?.slice(0, 400),
      );
      return { response: "Sorry, I couldn't generate a reply." };
    }
  } catch (err) {
    console.error("Internal error:", err);
    return { response: "Internal server error while generating a reply." };
  }
};

export default getGroqAIResponse;
