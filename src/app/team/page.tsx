import { Mail, ArrowRight } from 'lucide-react';

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const team = [
  {
    name: 'Mohammed Al Suwaidi',
    role: 'FOUNDER & CHAIRMAN',
    desc: 'Over 25 years of experience in investment banking, private equity and asset management across the GCC. Former CEO of Injazat Capital.',
  },
  {
    name: 'Khaled El Khatib',
    role: 'CHIEF EXECUTIVE OFFICER',
    desc: 'Investment professional with 20+ years in private equity and corporate finance. Previously with Mubadala Capital and Emirates NBD.',
  },
  {
    name: 'Dania Rizk',
    role: 'CHIEF INVESTMENT OFFICER',
    desc: '15+ years in venture capital and growth equity across MENA and global markets. Former Partner at Global Ventures.',
  },
  {
    name: 'Omar Al Ansari',
    role: 'HEAD OF PRIVATE EQUITY',
    desc: 'Specializes in buyouts and growth investments. Previously with EQT and Investcorp with a focus on value creation and operational excellence.',
  },
  {
    name: 'Aisha Al Marzooqi',
    role: 'HEAD OF VENTURE CAPITAL',
    desc: 'Tech investor with a passion for backing innovative founders. Formerly with 500 Global and focused on early-stage technology companies.',
  },
  {
    name: 'Youssef Ben Hassan',
    role: 'CHIEF FINANCIAL OFFICER',
    desc: 'Finance executive with 18+ years in capital markets and corporate finance. Formerly with Natixis and KPMG.',
  },
];

const committee = [
  { name: 'Mohammed Al Suwaidi' },
  { name: 'Khaled El Khatib' },
  { name: 'Dania Rizk' },
  { name: 'Omar Al Ansari' },
  { name: 'Hussain Al Mahmoud' },
];

const advisory = [
  { name: 'H.E. Dr. Ahmad Mohamed Ali' },
  { name: 'Nabil Sultan' },
  { name: 'Ramy Abdelkader' },
  { name: 'Dr. Raja Al Gurg' },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/team-bg.jpg" 
            alt="Team Background" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent" />
        </div>
        <div className="container-custom relative z-10">
          <h4 className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4">Our Team</h4>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Experience. Integrity.<br /><span className="text-brand-gold italic">Aligned Interests.</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            Our team combines deep investment expertise, operational experience, and regional insight to identify opportunities, build exceptional companies, and deliver long-term value.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-brand-dark">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group relative overflow-hidden border border-brand-border bg-brand-dark-light transition-all duration-300 hover:border-brand-gold">
                <div className="aspect-[4/5] bg-gray-800 grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-xs text-brand-gold uppercase tracking-widest font-bold">{member.role}</p>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                    {member.desc}
                  </p>
                  <div className="flex gap-4 pt-2">
                    <LinkedinIcon />
                    <Mail size={18} className="text-gray-500 hover:text-brand-gold cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Committee & Advisory Board */}
      <section className="py-24 bg-brand-dark-light border-y border-brand-border">
        <div className="container-custom grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-brand-gold mb-8">Investment Committee</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {committee.map((member, i) => (
                   <div key={i} className="text-center">
                    <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden grayscale">
                      <div className="w-full h-full bg-brand-dark flex items-center justify-center text-brand-gold font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wider">{member.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-500 italic max-w-md">
              Collective experience of 100+ years in investing across private equity, venture capital and corporate finance.
            </p>
          </div>

          <div className="space-y-12 border-l border-brand-border lg:pl-16">
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-brand-gold mb-8">Advisory Board</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {advisory.map((member, i) => (
                   <div key={i} className="text-center">
                    <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden grayscale">
                      <div className="w-full h-full bg-brand-dark flex items-center justify-center text-brand-gold font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-wider">{member.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-500 italic max-w-md">
              Seasoned industry leaders providing strategic guidance and market insight to support our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-brand-dark">
        <div className="container-custom">
           <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-4xl font-serif text-brand-gold mb-2">30+</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-400">Professionals</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-brand-gold mb-2">20+</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-400">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-brand-gold mb-2">60+</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-400">Investments Completed</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-brand-gold mb-2">25+</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-400">Successful Exits</div>
            </div>
             <div>
              <div className="text-4xl font-serif text-brand-gold mb-2">$1B+</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-400">AUM</div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-brand-dark-light">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-sm uppercase tracking-[0.3em] text-brand-gold">Our Culture</h2>
            <h3 className="text-4xl font-serif">Building Value Through People.</h3>
            <p className="text-gray-400 leading-relaxed">
              We foster an environment of intellectual curiosity, rigorous analysis, and entrepreneurial spirit. Our culture is built on the foundation of collaboration, integrity, and a relentless commitment to excellence.
            </p>
            <button className="bg-brand-gold text-brand-dark px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-brand-gold-light transition-all">
              JOIN OUR TEAM
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Entrepreneurial mindset',
              'Integrity and transparency',
              'Collaboration and respect',
              'Commitment to excellence',
              'Long-term value creation',
              'Global perspective',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-6 border border-brand-border bg-brand-dark transition-colors hover:border-brand-gold">
                <div className="w-2 h-2 rounded-full bg-brand-gold" />
                <span className="text-xs font-bold uppercase tracking-widest">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}