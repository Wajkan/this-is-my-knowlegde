import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function ContactsSidebar() {
  return (
    <aside className="flex flex-col px-4 py-6 w-48 sticky top-0 h-screen items-start">
      <div className="mt-24 flex flex-col gap-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm hover:underline"
        >
          <FaGithub size={16} />
          GitHub
        </a>

        <a
          href="mailto:your@email.com"
          className="flex items-center gap-2 text-sm hover:underline"
        >
          <MdEmail size={16} />
          Email
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm hover:underline"
        >
          <FaLinkedin size={16} />
          LinkedIn
        </a>
      </div>
    </aside>
  );
}
