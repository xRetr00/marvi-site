import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Brain, Calendar, CheckCircle2, Eye, Github, HardDrive, Mic, Radio, ShieldCheck, Sparkles, Waypoints, Wrench } from "lucide-react"

const repositoryUrl = "https://github.com/xRetr00/Marvi-OS"
const downloadUrl = `${repositoryUrl}/releases/latest/download/marvi-bootstrap.exe`

const capabilities = [
  { icon: Mic, title: "Voice", text: "Wake-word activation, streaming speech recognition, full-duplex conversation, interruption, local microphone capture, and spoken responses." },
  { icon: Eye, title: "Vision & presence", text: "Local room presence and gesture signals provide bounded context without sending raw camera frames into the assistant or model." },
  { icon: Brain, title: "Cortex memory", text: "A Gateway-owned cognition boundary observes events, recalls relevant memory, reflects on stable patterns, and commits decisions with provenance." },
  { icon: Waypoints, title: "World context", text: "Connectors can bring bounded context from Gmail, Calendar, Slack, Notion, GitHub, and Drive into tools, memory sync, and triggers." },
  { icon: Radio, title: "Dynamic Island", text: "The compact desktop surface communicates listening, thinking, speaking, actions, announcements, notifications, errors, and confirmations." },
  { icon: Wrench, title: "Tools & control", text: "Structured tools, Smart Room actions, browser workflows, computer use, and outside coding jobs follow the same confirmation and audit boundary." },
  { icon: Calendar, title: "Schedules", text: "Durable one-shot, interval, and cron jobs can save reminders or run bounded agent prompts with explicit model, tool, and delivery policy." },
  { icon: ShieldCheck, title: "Identity & privacy", text: "A stable soul defines how Marvi speaks and acts. A user profile learns by listening under strict question cooldowns, while secrets and raw media stay bounded." },
]

const architecture = [
  ["Gateway", "The local authority for health, threads, memory, tools, confirmations, schedules, connectors, audit, updates, and supervised sidecars."],
  ["Cortex", "The observe → reflect → commit cycle for local cognition. It is a boundary and policy vocabulary, not a second hidden agent."],
  ["Channels", "Desktop Chat, Voice, Telegram, and the Dynamic Island share identity, memory policy, tools, and confirmation semantics."],
  ["Local-first", "Microphone capture, wake word, room vision, memory, and the LiveKit transport are designed around the Windows machine."],
]

export default function DocsPage() {
  return <main className="docs-shell">
    <header className="docs-topbar"><Link className="brand" href="/"><Image src="/marvi-icon.png" alt="" width={28} height={28} /><span>MARVI / DOCS</span></Link><nav><Link href="/">BACK TO SITE</Link><a href={repositoryUrl} target="_blank" rel="noreferrer">SOURCE <Github aria-hidden="true" /></a></nav></header>
    <div className="docs-intro"><p className="section-kicker">[ PUBLIC DOCUMENTATION / 02 ]</p><h1>The full picture,<br /><em>without the noise.</em></h1><p>Marvi is an open-source, local-first assistant for Windows. These docs explain the real product boundaries: what Marvi can sense, remember, connect to, act on, and keep private.</p><div className="hero-actions"><a className="button button-primary" href={downloadUrl}><Sparkles aria-hidden="true" /> DOWNLOAD FOR WINDOWS</a><a className="button button-secondary" href={repositoryUrl} target="_blank" rel="noreferrer">READ THE SOURCE <ArrowUpRight aria-hidden="true" /></a></div></div>
    <div className="docs-layout"><aside className="docs-index"><p>ON THIS PAGE</p><a href="#capabilities">Capabilities</a><a href="#architecture">Architecture</a><a href="#privacy">Privacy boundaries</a><a href="#start">Get started</a></aside><div className="docs-content">
      <section id="capabilities"><p className="section-kicker">[ CAPABILITIES ]</p><h2>A system that feels<br /><span>like a presence.</span></h2><div className="docs-feature-grid">{capabilities.map(({ icon: Icon, title, text }) => <article key={title} className="docs-card"><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section id="architecture" className="docs-architecture"><p className="section-kicker">[ HOW IT FITS TOGETHER ]</p><h2>One local authority.<br /><span>Many quiet surfaces.</span></h2><div className="architecture-list">{architecture.map(([name, text], index) => <article key={name}><span>0{index + 1}</span><div><h3>{name}</h3><p>{text}</p></div></article>)}</div></section>
      <section id="privacy" className="docs-callout"><ShieldCheck aria-hidden="true" /><div><p className="section-kicker">[ PRIVACY FIRST ]</p><h2>Your context belongs<br />to <span>you.</span></h2><p>Raw camera frames remain inside the room sidecar. Microphone capture stays local for wake word and voice. External content is stored as untrusted information, never as instructions. Tools and writes remain behind schema validation, confirmation, YOLO policy, and an append-only audit path.</p><ul className="docs-checks"><li><CheckCircle2 aria-hidden="true" /> Local capture and bounded context</li><li><CheckCircle2 aria-hidden="true" /> Confirmed actions with exact arguments</li><li><CheckCircle2 aria-hidden="true" /> Visible memory and identity controls</li></ul></div></section>
      <section id="start" className="docs-start"><p className="section-kicker">[ GET STARTED ]</p><h2>Start with a<br /><span>single signal.</span></h2><p>Download the latest Windows bootstrap from the public releases, install Marvi, and use the desktop control center to configure providers, memory, channels, tools, updates, and identity.</p><div className="start-grid"><div><HardDrive aria-hidden="true" /><strong>WINDOWS / LOCAL RUNTIME</strong><span>Built for a supervised desktop environment.</span></div><div><CheckCircle2 aria-hidden="true" /><strong>OPEN SOURCE / PUBLIC</strong><span>Inspect the implementation and release history.</span></div></div><a className="button button-primary" href={downloadUrl}><Sparkles aria-hidden="true" /> DOWNLOAD THE LATEST BUILD</a></section>
    </div></div>
    <footer id="contact"><div className="footer-brand"><Image src="/marvi-icon.png" alt="" width={22} height={22} /><span>MARVI</span></div><p>Open-source intelligence for Windows.</p><a href={repositoryUrl} target="_blank" rel="noreferrer">SOURCE / RELEASES <ArrowUpRight aria-hidden="true" /></a><small>© 2026 MARVI. DOCUMENTATION FOR THE PUBLIC PROJECT.</small></footer>
  </main>
}
