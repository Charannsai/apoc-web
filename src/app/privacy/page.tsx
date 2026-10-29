import React from "react";
import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How APOC Labs handles your information: we only collect the email you give us, use no ad or analytics trackers, and delete data on request.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      effective="November 2026"
      intro="We collect as little as possible. Here is exactly what we take, why, and what you can ask us to do with it."
      sections={[
        {
          title: "What we collect",
          body: "Only what you choose to give us: your email address if you join early access, and whatever you include if you email us. We do not ask for anything else, and you do not need an account to use this site.",
        },
        {
          title: "How we use it",
          body: "We use your email to send early access news about APOC C1 and to reply to your messages. That is all. We do not use it for advertising and we do not sell, rent or trade it.",
        },
        {
          title: "Cookies and tracking",
          body: "This site does not use advertising or analytics trackers. Your browser may store a small preference, such as display settings, on your own device. Like most websites, our hosting provider may keep standard server logs, such as IP address and browser type, to keep the site secure and running.",
        },
        {
          title: "Who we share it with",
          body: "Nobody, except the service providers we need to run this site and send email, and only for that purpose. We would also disclose information if the law required us to.",
        },
        {
          title: "How long we keep it",
          body: "We keep your email while early access is running or while we are talking with you, and delete it when it is no longer needed or when you ask us to.",
        },
        {
          title: "Your choices",
          body: "You can ask us at any time to see the information we hold about you, correct it, or delete it, or to stop emailing you. Just write to charan@apoc.in and we will take care of it.",
        },
        {
          title: "Changes to this policy",
          body: "If we change how we handle your information, we will update this page and its effective date. If a change is significant, we will tell early access members by email.",
        },
      ]}
    />
  );
}
