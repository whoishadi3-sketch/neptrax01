import { Sparkles, Rocket, ShoppingCart, Briefcase, Users, Code, Palette, Search, Target, Layers, Wrench, TrendingUp, ArrowUpRight } from 'lucide-react';
import Silk from '../components/Silk';
import StarBorder from '../components/StarBorder';

interface HomeProps {
  onNavigate: (section: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const clients = [
    { icon: Briefcase, title: 'Local Service Businesses', description: 'Plumbers, electricians, consultants' },
    { icon: Rocket, title: 'SaaS Startups', description: 'Cloud-based software companies' },
    { icon: Sparkles, title: 'AI Startups', description: 'Machine learning innovations' },
    { icon: ShoppingCart, title: 'E-Commerce Brands', description: 'Online retail businesses' },
    { icon: Users, title: 'Agencies & Freelancers', description: 'Creative professionals' },
  ];

  const services = [
    { icon: Palette, title: 'Web Design', description: 'Beautiful, modern interfaces' },
    { icon: Code, title: 'Web Development', description: 'Fast, responsive websites' },
    { icon: Search, title: 'SEO Optimization', description: 'Higher search rankings' },
    { icon: Target, title: 'GEO Targeting', description: 'Local market reach' },
    { icon: Layers, title: 'UI/UX Design', description: 'User-centered experiences' },
    { icon: Wrench, title: 'Website Maintenance', description: 'Ongoing support & updates' },
  ];

  const stats = [
    { number: '100+', label: 'Sites Built' },
    { number: '50+', label: 'Verified Reviews' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction Rate' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-100">
          <Silk
            speed={8}
            scale={1}
            color="#13717d"
            noiseIntensity={0.5}
            rotation={0}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0d1117] to-[#1e3a8a] opacity-70"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#2563eb] rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#1e3a8a] rounded-full blur-[120px] opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1e293b]/60 backdrop-blur-sm border border-white/10 mb-8 animate-fade-in">
              <TrendingUp size={16} className="text-[#2563eb]" />
              <span className="text-sm text-[#94a3b8]">Trusted by leading brands worldwide</span>
            </div>

            <h1
              className="text-5xl md:text-7xl lg:text-6xl font text-[#f1f5f9] mb-6 leading-tight animate-fade-in"
            >
              Launch your brand online <br />
              <span className="bg-gradient-to-r from-[#2e4fdc] to-[#4da6ff] bg-clip-text text-transparent">
              with a website built to
              </span>
              <br />
              convert & scale.
            </h1>

            <p className="text-lg md:text-xl text-[#abbcd4] mb-10 max-w-2xl leading-relaxed">
              Guiding startups and small businesses from idea to digital success with websites built for performance and growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button
                onClick={() => onNavigate('contact')}
                className="px-16 py-3 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-[#f1f5f9] font-medium hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all"
              >
                Book a Call
              </button>
              <button
                onClick={() => onNavigate('portfolio')}
                className="group px-12 py-3 rounded-full bg-transparent border border-[#8f9eb3] text-[#f1f5f9] font-medium hover:brightness-125 transition-all flex items-center justify-center gap-2"
              >
                View Our Work
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            <div>
              <h3 className="text-sm text-[#8f9eb3] font-medium mb-6 text-center sm:text-left">
                Trusted by Industry Leaders
              </h3>
              <div className="flex items-center justify-center sm:justify-start gap-12 flex-wrap">
                <svg className="h-8" viewBox="0 0 272 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M115.75 47.18C115.75 48.38 115.45 49.41 114.85 50.27C114.25 51.13 113.42 51.79 112.36 52.25C111.3 52.71 110.08 52.94 108.7 52.94H103.88V41.42H108.7C110.08 41.42 111.3 41.65 112.36 42.11C113.42 42.57 114.25 43.23 114.85 44.09C115.45 44.95 115.75 46.01 115.75 47.18ZM112.36 47.18C112.36 45.95 112 45.03 111.28 44.42C110.56 43.81 109.51 43.51 108.13 43.51H106.88V50.85H108.13C109.51 50.85 110.56 50.55 111.28 49.94C112 49.33 112.36 48.41 112.36 47.18Z" fill="#8f9eb3"/>
                  <path d="M128.29 47.18C128.29 48.77 127.94 50.15 127.24 51.32C126.54 52.49 125.58 53.39 124.36 54.02C123.14 54.65 121.75 54.97 120.19 54.97C118.63 54.97 117.24 54.65 116.02 54.02C114.8 53.39 113.84 52.49 113.14 51.32C112.44 50.15 112.09 48.77 112.09 47.18C112.09 45.59 112.44 44.21 113.14 43.04C113.84 41.87 114.8 40.97 116.02 40.34C117.24 39.71 118.63 39.39 120.19 39.39C121.75 39.39 123.14 39.71 124.36 40.34C125.58 40.97 126.54 41.87 127.24 43.04C127.94 44.21 128.29 45.59 128.29 47.18ZM125.19 47.18C125.19 46.21 125.01 45.38 124.65 44.69C124.29 44 123.79 43.48 123.15 43.12C122.51 42.76 121.78 42.58 120.96 42.58C120.14 42.58 119.41 42.76 118.77 43.12C118.13 43.48 117.63 44 117.27 44.69C116.91 45.38 116.73 46.21 116.73 47.18C116.73 48.15 116.91 48.98 117.27 49.67C117.63 50.36 118.13 50.88 118.77 51.24C119.41 51.6 120.14 51.78 120.96 51.78C121.78 51.78 122.51 51.6 123.15 51.24C123.79 50.88 124.29 50.36 124.65 49.67C125.01 48.98 125.19 48.15 125.19 47.18Z" fill="#8f9eb3"/>
                  <path d="M141.57 47.18C141.57 48.77 141.22 50.15 140.52 51.32C139.82 52.49 138.86 53.39 137.64 54.02C136.42 54.65 135.03 54.97 133.47 54.97C131.91 54.97 130.52 54.65 129.3 54.02C128.08 53.39 127.12 52.49 126.42 51.32C125.72 50.15 125.37 48.77 125.37 47.18C125.37 45.59 125.72 44.21 126.42 43.04C127.12 41.87 128.08 40.97 129.3 40.34C130.52 39.71 131.91 39.39 133.47 39.39C135.03 39.39 136.42 39.71 137.64 40.34C138.86 40.97 139.82 41.87 140.52 43.04C141.22 44.21 141.57 45.59 141.57 47.18ZM138.47 47.18C138.47 46.21 138.29 45.38 137.93 44.69C137.57 44 137.07 43.48 136.43 43.12C135.79 42.76 135.06 42.58 134.24 42.58C133.42 42.58 132.69 42.76 132.05 43.12C131.41 43.48 130.91 44 130.55 44.69C130.19 45.38 130.01 46.21 130.01 47.18C130.01 48.15 130.19 48.98 130.55 49.67C130.91 50.36 131.41 50.88 132.05 51.24C132.69 51.6 133.42 51.78 134.24 51.78C135.06 51.78 135.79 51.6 136.43 51.24C137.07 50.88 137.57 50.36 137.93 49.67C138.29 48.98 138.47 48.15 138.47 47.18Z" fill="#8f9eb3"/>
                  <path d="M155.09 54.94C153.53 54.94 152.16 54.63 150.98 54.01C149.8 53.39 148.87 52.5 148.19 51.34C147.51 50.18 147.17 48.79 147.17 47.17C147.17 45.58 147.52 44.2 148.22 43.03C148.92 41.86 149.87 40.96 151.07 40.33C152.27 39.7 153.63 39.39 155.15 39.39C156.39 39.39 157.5 39.6 158.48 40.02C159.46 40.44 160.27 41.04 160.91 41.82C161.55 42.6 161.99 43.53 162.23 44.61L159.23 45.34C159.05 44.59 158.67 43.97 158.09 43.48C157.51 42.99 156.74 42.75 155.78 42.75C154.96 42.75 154.24 42.93 153.62 43.29C153 43.65 152.52 44.17 152.18 44.85C151.84 45.53 151.67 46.32 151.67 47.22C151.67 48.15 151.85 48.96 152.21 49.65C152.57 50.34 153.07 50.87 153.71 51.24C154.35 51.61 155.09 51.8 155.93 51.8C156.55 51.8 157.12 51.7 157.64 51.5C158.16 51.3 158.6 51 158.96 50.6C159.32 50.2 159.57 49.7 159.71 49.1L162.71 49.83C162.47 50.88 161.99 51.79 161.27 52.56C160.55 53.33 159.65 53.93 158.57 54.36C157.49 54.73 156.33 54.94 155.09 54.94Z" fill="#8f9eb3"/>
                  <path d="M171.28 54.97C169.72 54.97 168.35 54.65 167.17 54.01C165.99 53.37 165.07 52.47 164.41 51.31C163.75 50.15 163.42 48.77 163.42 47.17C163.42 45.57 163.76 44.19 164.44 43.03C165.12 41.87 166.06 40.97 167.26 40.33C168.46 39.69 169.83 39.37 171.37 39.37C172.91 39.37 174.28 39.69 175.48 40.33C176.68 40.97 177.62 41.87 178.3 43.03C178.98 44.19 179.32 45.57 179.32 47.17C179.32 48.77 178.97 50.15 178.27 51.31C177.57 52.47 176.61 53.37 175.39 54.01C174.17 54.65 172.78 54.97 171.28 54.97ZM171.28 51.78C172.1 51.78 172.83 51.6 173.47 51.24C174.11 50.88 174.61 50.36 174.97 49.67C175.33 48.98 175.51 48.15 175.51 47.18C175.51 46.21 175.33 45.38 174.97 44.69C174.61 44 174.11 43.48 173.47 43.12C172.83 42.76 172.1 42.58 171.28 42.58C170.46 42.58 169.73 42.76 169.09 43.12C168.45 43.48 167.95 44 167.59 44.69C167.23 45.38 167.05 46.21 167.05 47.18C167.05 48.15 167.23 48.98 167.59 49.67C167.95 50.36 168.45 50.88 169.09 51.24C169.73 51.6 170.46 51.78 171.28 51.78Z" fill="#8f9eb3"/>
                  <path d="M189.07 54.73V41.42H192.67V54.73H189.07ZM182.17 48.13V45.02H199.57V48.13H182.17Z" fill="#8f9eb3"/>
                  <path d="M204.71 54.94C203.29 54.94 202.03 54.66 200.93 54.1C199.83 53.54 198.96 52.74 198.32 51.7C197.68 50.66 197.36 49.43 197.36 48.01C197.36 46.59 197.68 45.36 198.32 44.32C198.96 43.28 199.83 42.48 200.93 41.92C202.03 41.36 203.29 41.08 204.71 41.08C206.13 41.08 207.39 41.36 208.49 41.92C209.59 42.48 210.46 43.28 211.1 44.32C211.74 45.36 212.06 46.59 212.06 48.01C212.06 49.43 211.74 50.66 211.1 51.7C210.46 52.74 209.59 53.54 208.49 54.1C207.39 54.66 206.13 54.94 204.71 54.94ZM204.71 51.75C205.53 51.75 206.26 51.57 206.9 51.21C207.54 50.85 208.04 50.33 208.4 49.64C208.76 48.95 208.94 48.12 208.94 47.15C208.94 46.18 208.76 45.35 208.4 44.66C208.04 43.97 207.54 43.45 206.9 43.09C206.26 42.73 205.53 42.55 204.71 42.55C203.89 42.55 203.16 42.73 202.52 43.09C201.88 43.45 201.38 43.97 201.02 44.66C200.66 45.35 200.48 46.18 200.48 47.15C200.48 48.12 200.66 48.95 201.02 49.64C201.38 50.33 201.88 50.85 202.52 51.21C203.16 51.57 203.89 51.75 204.71 51.75Z" fill="#8f9eb3"/>
                  <path d="M221.58 54.73V41.42H225.18V54.73H221.58ZM214.68 48.13V45.02H232.08V48.13H214.68Z" fill="#8f9eb3"/>
                  <path d="M242.71 54.73V41.42H246.31V54.73H242.71ZM235.81 48.13V45.02H253.21V48.13H235.81Z" fill="#8f9eb3"/>
                </svg>

                <div className="flex items-center gap-3">
                  <svg className="h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.479 9.883c-1.626-.604-2.512-1.067-2.512-1.803 0-.622.511-.977 1.423-.977 1.667 0 3.379.642 4.558 1.444l.043.025V4.843l-.025-.017c-.783-.497-2.03-.875-3.32-.875-3.903 0-6.647 2.073-6.647 5.079 0 2.226 1.586 3.514 4.369 4.478 1.994.689 2.512 1.298 2.512 2.053 0 .622-.511 1.242-1.626 1.242-1.667 0-3.583-.711-4.964-1.583l-.043-.027v3.734l.025.017c.977.627 2.449 1.067 3.929 1.067 4.166 0 7.063-2.106 7.063-5.135 0-2.226-1.586-3.513-4.785-4.478z" fill="#8f9eb3"/>
                  </svg>
                  <span className="text-lg font-semibold text-[#8f9eb3]">Stripe</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg className="h-5" viewBox="0 0 284 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M141.68 16.25C135.64 16.25 131.26 20.61 131.26 26.64V56.95H125.13V11.01H131.11V14.63C133.09 11.85 136.38 10.14 140.43 10.14C148.86 10.14 154.73 16.33 154.73 25.36V56.95H148.6V25.36C148.6 19.79 145.38 16.25 141.68 16.25Z" fill="#8f9eb3"/>
                    <path d="M169.45 45.18C172.78 45.18 175.93 43.77 177.98 41.25L182.36 44.43C179.39 48.34 174.49 50.78 169.45 50.78C159.17 50.78 151.89 43.84 151.89 33.73C151.89 23.62 159.17 16.68 169.05 16.68C178.92 16.68 186.2 23.62 186.2 33.73C186.2 34.81 186.13 35.88 185.98 36.89H158.15C159.24 41.79 163.69 45.18 169.45 45.18ZM158.15 31.5H179.92C178.85 26.6 174.4 23.21 169.05 23.21C163.69 23.21 159.24 26.6 158.15 31.5Z" fill="#8f9eb3"/>
                    <path d="M213.19 11.01L197.87 56.95H191.34L176.02 11.01H182.67L194.61 49.02L206.54 11.01H213.19Z" fill="#8f9eb3"/>
                    <path d="M228.35 45.18C231.68 45.18 234.83 43.77 236.88 41.25L241.26 44.43C238.29 48.34 233.39 50.78 228.35 50.78C218.07 50.78 210.79 43.84 210.79 33.73C210.79 23.62 218.07 16.68 227.95 16.68C237.82 16.68 245.1 23.62 245.1 33.73C245.1 34.81 245.03 35.88 244.88 36.89H217.05C218.14 41.79 222.59 45.18 228.35 45.18ZM217.05 31.5H238.82C237.75 26.6 233.3 23.21 227.95 23.21C222.59 23.21 218.14 26.6 217.05 31.5Z" fill="#8f9eb3"/>
                    <path d="M270.8 11.01V56.95H264.82V53.33C262.84 56.11 259.55 57.82 255.5 57.82C247.07 57.82 241.2 51.63 241.2 42.6V11.01H247.33V42.6C247.33 48.17 250.55 51.71 254.25 51.71C260.29 51.71 264.67 47.35 264.67 41.32V11.01H270.8Z" fill="#8f9eb3"/>
                    <path d="M160.99 0L0 55L160.99 32.5L283.99 55L160.99 0Z" fill="#8f9eb3"/>
                  </svg>
                  <span className="text-lg font-semibold text-[#8f9eb3]">Vercel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-[#f1f5f9] text-center mb-4"
          >
            Who We Work With
          </h2>
          <p className="text-[#94a3b8] text-center mb-12">
            We partner with businesses of all sizes across industries
          </p>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl">
              {clients.slice(0, 3).map((client, index) => (
                <div
                  key={index}
                  className="bg-[#1e293b] rounded-2xl p-6 hover:bg-[#1e3a8a] hover:scale-105 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                >
                  <client.icon className="text-[#2563eb] mb-4" size={32} />
                  <h3 className="text-xl font-bold text-[#f1f5f9] mb-2">{client.title}</h3>
                  <p className="text-[#94a3b8] text-sm">{client.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {clients.slice(3).map((client, index) => (
                <div
                  key={index + 3}
                  className="bg-[#1e293b] rounded-2xl p-6 hover:bg-[#1e3a8a] hover:scale-105 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                >
                  <client.icon className="text-[#2563eb] mb-4" size={32} />
                  <h3 className="text-xl font-bold text-[#f1f5f9] mb-2">{client.title}</h3>
                  <p className="text-[#94a3b8] text-sm">{client.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-[#f1f5f9] text-center mb-4"
          >
            What We Do
          </h2>
          <p className="text-[#94a3b8] text-center mb-12">
            Full-service digital solutions tailored to your needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#1e293b] rounded-2xl p-6 hover:bg-[#1e3a8a] hover:scale-105 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
              >
                <service.icon className="text-[#2563eb] mb-4" size={32} />
                <h3 className="text-xl font-bold text-[#f1f5f9] mb-2">{service.title}</h3>
                <p className="text-[#94a3b8] text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-[#f1f5f9] text-center mb-12"
          >
            Our Credentials
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-5xl font-bold bg-gradient-to-r from-[#2563eb] to-[#3b82f6] bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </div>
                <div className="text-[#94a3b8]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold text-[#f1f5f9] mb-6"
          >
            Ready to Start Your Project?
          </h2>
          <p className="text-[#94a3b8] text-lg mb-8">
            Let's discuss how we can help your business grow online
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-[#f1f5f9] font-medium text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] transition-all"
          >
            Book a Call
          </button>
        </div>
      </section>
    </div>
  );
}
