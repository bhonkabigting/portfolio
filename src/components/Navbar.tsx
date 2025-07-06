import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  dark: boolean;
  toggleDark: () => void;
}

export function Navbar({ dark, toggleDark }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 mb-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">John Doe</h1>

        <div className="flex items-center gap-4">
          <button onClick={toggleDark} aria-label="Toggle dark mode">
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {['about', 'projects', 'resume', 'contact'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="hover:underline hover:text-blue-600 transition"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden px-4 pb-4 pt-2 space-y-2 text-sm font-medium bg-white dark:bg-gray-900">
          {['about', 'projects', 'resume', 'contact'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className="block py-1 hover:underline hover:text-blue-600 transition"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
