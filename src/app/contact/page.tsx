"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, ArrowRight, Mail, MapPin, Clock } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Pre-Order Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-zinc-900 font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-mono text-zinc-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Home</span>
          </Link>
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/apoclogo.png"
              alt="APOC"
              width={95}
              height={26}
              className="h-6 w-auto object-contain"
            />
          </Link>
        </div>
        <div className="h-4 w-full bg-gradient-to-b from-white/90 to-transparent pointer-events-none -mb-4" />
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-3xl mx-auto px-6 py-12 space-y-10">
        <div className="space-y-3 border-b border-black/10 pb-6">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-5xl font-normal tracking-tight text-zinc-950">
            Contact Apoc Systems
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
            Have questions about upcoming hardware batches, enterprise pilots, or capability integrations?
            Reach out directly to our engineering and founder team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="rounded-xl border border-black/10 bg-zinc-50 p-4 space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-zinc-500">
              <Mail className="h-3.5 w-3.5 text-zinc-900" />
              Direct Email
            </div>
            <div className="text-sm font-medium text-zinc-950">
              team@apoc.run
            </div>
            <div className="text-xs text-zinc-500">
              Typical response in 24 hours
            </div>
          </div>

          <div className="rounded-xl border border-black/10 bg-zinc-50 p-4 space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-zinc-500">
              <Clock className="h-3.5 w-3.5 text-zinc-900" />
              Operating Hours
            </div>
            <div className="text-sm font-medium text-zinc-950">
              Mon - Fri, 9am - 6pm PST
            </div>
            <div className="text-xs text-zinc-500">
              Global developer support
            </div>
          </div>

          <div className="rounded-xl border border-black/10 bg-zinc-50 p-4 space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-zinc-500">
              <MapPin className="h-3.5 w-3.5 text-zinc-900" />
              Headquarters
            </div>
            <div className="text-sm font-medium text-zinc-950">
              San Francisco, CA
            </div>
            <div className="text-xs text-zinc-500">
              Hardware Lab & Foundry
            </div>
          </div>
        </div>

        {/* In-Place Contact Form */}
        <div className="rounded-2xl border border-black/10 bg-zinc-50/70 p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-lg font-medium text-zinc-950">
                Send a Direct Message
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-zinc-600 block mb-1">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Chen"
                    className="w-full rounded-xl border border-black/15 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-black focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-zinc-600 block mb-1">
                    WORK EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full rounded-xl border border-black/15 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-black focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-zinc-600 block mb-1">
                  TOPIC
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full rounded-xl border border-black/15 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-black focus:outline-none cursor-pointer"
                >
                  <option value="Pre-Order Inquiry">Pre-Order Hardware Inquiry</option>
                  <option value="Enterprise Pilot">Enterprise Fleet Deployment</option>
                  <option value="Capability Integration">MCP Tool / Adapter Integration</option>
                  <option value="General Question">General Question</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono text-zinc-600 block mb-1">
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your team's workflow and interest in Apoc..."
                  className="w-full rounded-xl border border-black/15 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-black focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto rounded-full border border-black bg-black px-6 py-2.5 text-xs font-medium text-white hover:bg-zinc-800 transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send Message</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white mx-auto">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-zinc-950">
                Message Received
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 max-w-sm mx-auto">
                Thank you for reaching out, {formData.name || "friend"}. A member of the Apoc team will respond to{" "}
                <strong className="text-zinc-900">{formData.email}</strong> within 24 hours.
              </p>
              <div className="pt-2">
                <Link
                  href="/"
                  className="text-xs font-mono underline underline-offset-4 text-zinc-700 hover:text-black"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Clean Footer */}
      <Footer />
    </div>
  );
}
