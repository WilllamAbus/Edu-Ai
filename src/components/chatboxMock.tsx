import React, { useState } from "react";
import { Product } from "../types/productType";
import { mockProducts } from "../services/products/produtCartApi";

export default function ChatbotSuggestion({ onView }: { onView: (p: Product) => void }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");

    // Giả lập phản hồi
    const lower = input.toLowerCase();
    let suggested = mockProducts.filter(p =>
      lower.includes("tiếng anh") ? p.name.toLowerCase().includes("anh") :
      lower.includes("react") ? p.name.toLowerCase().includes("react") :
      lower.includes("python") ? p.name.toLowerCase().includes("python") :
      false
    );

    if (suggested.length === 0) {
      suggested = mockProducts.slice(0, 2); // fallback
    }

    setMessages(prev => [
      ...prev,
      { sender: "bot", text: `Tôi gợi ý cho bạn: ${suggested.map(p => p.name).join(", ")}` },
    ]);
  };

  return (
    <div className="p-4 bg-white rounded shadow max-w-xl mx-auto my-6">
      <h2 className="font-semibold mb-2">Chatbot AI Tư vấn sản phẩm</h2>

      <div className="h-64 overflow-y-auto border p-2 mb-2 rounded">
        {messages.map((m, i) => (
          <div key={i} className={`mb-2 ${m.sender === "user" ? "text-right" : "text-left"}`}>
            <span className={m.sender === "user" ? "bg-blue-100" : "bg-gray-100"} style={{ padding: "4px 8px", borderRadius: "12px" }}>
              {m.text}
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập yêu cầu của bạn..."
          className="flex-1 border rounded px-2 py-1"
        />
        <button onClick={handleSend} className="bg-primary text-white px-4 py-1 rounded">
          Gửi
        </button>
      </div>
    </div>
  );
}
