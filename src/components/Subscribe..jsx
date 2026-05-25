import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); 
  // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xlgvwzlw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 bg-[#0f1222] border border-[#2a3150] rounded-lg text-[#cdd9ff] text-sm focus:outline-none focus:border-[#5f7cff] transition-colors"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#3b4eff] to-[#5f72ee] text-white text-sm font-semibold hover:scale-105 transition-all"
        >
          {status === "sending" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {/* Messages */}
      {status === "success" && (
        <p className="text-green-400 text-xs mt-2">
          Thanks! You are subscribed 🎉
        </p>
      )}

      {status === "error" && (
        <p className="text-red-400 text-xs mt-2">
          Something went wrong. Try again.
        </p>
      )}
    </div>
  );
}