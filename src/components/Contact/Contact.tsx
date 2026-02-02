import { SiGithub } from '@icons-pack/react-simple-icons';
import { Home, Mail } from 'lucide-react';

interface ContactType {
  icon: React.ReactNode;
  description: string;
  address: string;
}

function Contact() {
  const contacts: ContactType[] = [
    {
      icon: <SiGithub />,
      description: 'Github',
      address: 'https://github.com/Squarecat-meow',
    },
    {
      icon: <Mail />,
      description: 'Mail',
      address: 'mailto:yozumina@serafuku.moe',
    },
    {
      icon: <Home />,
      description: 'Blog',
      address: 'https://yuno.mina.house',
    },
  ];
  return (
    <main id="contact" className="min-h-screen grid grid-cols-1 lg:grid-cols-3">
      <section className="flex justify-center lg:justify-end items-center">
        <div>
          <p className="text-xs text-slate-400 tracking-[0.5em] mb-4">
            05 - CONTACT
          </p>
          <h1 className="font-hangul-heading text-5xl">감사합니다!</h1>
        </div>
      </section>
      <section />
      <section className="flex flex-row lg:flex-col justify-center items-center lg:items-start gap-4">
        {contacts.map((el) => (
          <div className="flex flex-col gap-1" key={el.description}>
            {el.icon}
            <div className="w-full border-b border-b-rose-300" />
            <a href={el.address} target="_blank" rel="noopener noreferrer">
              {el.description}
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Contact;
