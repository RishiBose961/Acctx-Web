export interface FAQItem {
  q: string;
  a: string;
}

export const faqs: FAQItem[] = [
  {
    q: "Is Acctx really 100% offline?",
    a: "Yes. Acctx runs entirely on your local machine with zero network requests to external cloud servers. It contains no tracking scripts, analytics, or third-party cloud synchronization. Your financial documents never leave your computer.",
  },
  {
    q: "How does the Master 6-digit PIN secure my data?",
    a: "Your financial database is encrypted locally on your device. When you set a 6-digit PIN, it is salted and stretched locally using secure key derivation to generate your vault key. Acctx also includes brute-force cooldown timers to prevent automated dictionary attacks.",
  },
  {
    q: "Is Acctx free or are there hidden subscriptions?",
    a: "Acctx is 100% free and open-source. There are no monthly subscriptions, paid tiers, in-app purchases, or advertisements.",
  },
  {
    q: "How does the automatic recurring bill cycle work?",
    a: "When you mark a recurring bill as settled (e.g. rent, internet, subscriptions), Acctx logs the payment to your transaction history and calculates the exact upcoming due date based on your frequency (weekly, monthly, quarterly, or yearly) automatically.",
  },
  {
    q: "How do I backup or transfer my data to a new computer?",
    a: "Under Acctx Settings, you can click 'Export Data' to save an encrypted, portable backup of your finances. On your new computer, simply choose 'Import Data' and enter your PIN to restore everything instantly.",
  },
  {
    q: "Which operating systems are supported?",
    a: "Acctx v1.0.2 is officially released and available for Windows 10 & 11 (64-bit). macOS (Universal binary for Apple Silicon & Intel) and Linux (.AppImage) builds are currently in active development and will be available in upcoming releases.",
  },
];
