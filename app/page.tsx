'use client';

import { useMemo, useState } from 'react';
import { Camera, Gift, Image as ImageIcon, Megaphone, Phone, MapPin, Sparkles, Upload, Wand2 } from 'lucide-react';

const tools = [
  { icon: Camera, title: 'WhatsApp Status', text: 'Create 15-sec promo scripts and layouts.' },
  { icon: ImageIcon, title: 'Poster Designer', text: 'Make colorful play-area posters.' },
  { icon: Gift, title: 'Birthday Packages', text: 'Generate party campaign content.' },
  { icon: Megaphone, title: 'School Picnic Offers', text: 'Create school/group visit promotions.' }
];

export default function Home() {
  const [headline, setHeadline] = useState('100% Gadget Free Zone');
  const [offer, setOffer] = useState('Birthday packages • Group visits • School picnic discounts • Weekday deals');
  const [files, setFiles] = useState<FileList | null>(null);
  const [logo, setLogo] = useState<File | null>(null);

  const script = useMemo(() => {
    return `0-2 sec: Hook with happy kids playing — "What if your child forgot the phone today?"\n2-5 sec: Fast fun clips — "Run. Jump. Laugh. Explore."\n5-8 sec: Big badge — "${headline}"\n8-11 sec: Offers — "${offer}"\n11-15 sec: CTA — "Visit Sim & Sam's Bandlaguda. Call 9281101616"`;
  }, [headline, offer]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-sky-100 text-slate-900">
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="rounded-[2rem] bg-white/80 p-5 card-shadow backdrop-blur md:p-8">
          <div className="flex items-center gap-3">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brandRed text-white shadow-lg">
              <Sparkles size={30} />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-brandBlue">Sim & Sam's Bandlaguda</p>
              <h1 className="text-3xl font-black leading-tight md:text-5xl">AI Marketing Suite</h1>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-[1.7rem] bg-gradient-to-br from-brandRed to-pink-600 p-6 text-white shadow-xl">
              <h2 className="text-3xl font-black">Create WhatsApp Status</h2>
              <p className="mt-2 text-white/90">Upload your play-area clips and prepare a high-energy ad plan for WhatsApp Status.</p>

              <label className="mt-6 block rounded-2xl border-2 border-dashed border-white/50 p-5 text-center">
                <Upload className="mx-auto mb-2" />
                <span className="font-bold">Upload videos</span>
                <input className="hidden" type="file" accept="video/*" multiple onChange={(e) => setFiles(e.target.files)} />
              </label>
              <p className="mt-2 text-sm text-white/80">{files ? `${files.length} video(s) selected` : 'No videos selected yet'}</p>

              <label className="mt-4 block rounded-2xl border-2 border-dashed border-white/50 p-5 text-center">
                <Upload className="mx-auto mb-2" />
                <span className="font-bold">Upload logo</span>
                <input className="hidden" type="file" accept="image/*" onChange={(e) => setLogo(e.target.files?.[0] || null)} />
              </label>
              <p className="mt-2 text-sm text-white/80">{logo ? logo.name : 'No logo selected yet'}</p>
            </div>

            <div className="rounded-[1.7rem] bg-slate-950 p-6 text-white shadow-xl">
              <div className="mb-4 flex items-center gap-2">
                <Wand2 className="text-brandYellow" />
                <h2 className="text-2xl font-black">Campaign Text</h2>
              </div>
              <label className="text-sm font-bold text-slate-300">Main message</label>
              <input value={headline} onChange={(e) => setHeadline(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 font-bold outline-none" />
              <label className="mt-4 block text-sm font-bold text-slate-300">Offers</label>
              <textarea value={offer} onChange={(e) => setOffer(e.target.value)} className="mt-2 h-28 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none" />
              <div className="mt-5 rounded-2xl bg-white/10 p-4">
                <p className="font-black text-brandYellow">Generated 15-sec plan</p>
                <pre className="mt-2 whitespace-pre-wrap text-sm text-slate-100">{script}</pre>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => (
              <div key={tool.title} className="rounded-3xl bg-white p-5 shadow-md ring-1 ring-slate-100">
                <tool.icon className="text-brandBlue" />
                <h3 className="mt-3 font-black">{tool.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{tool.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.7rem] bg-white p-5 shadow-md md:flex md:items-center md:justify-between">
            <div>
              <p className="font-black">Contact Details</p>
              <p className="mt-2 flex gap-2 text-sm text-slate-600"><MapPin size={18} /> 3rd Floor, Vantage Mall, Kalimandir, Bandlaguda Jagir, Hyderabad 500091</p>
              <p className="mt-2 flex gap-2 text-sm text-slate-600"><Phone size={18} /> 9281101616</p>
            </div>
            <button className="mt-4 rounded-2xl bg-brandBlue px-6 py-3 font-black text-white shadow-lg md:mt-0">Generate Preview</button>
          </div>
        </div>
      </section>
    </main>
  );
}
