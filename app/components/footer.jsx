export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-dotted border-black">
      {/* Say Hello Section */}
      <div className="text-center py-12 px-8">
        <h2 className="text-5xl font-light text-black mb-6">Say Hello</h2>
        <a 
          href="mailto:stephaniewardharvey@pm.me" 
          className="text-2xl text-black hover:underline mb-8 inline-block"
        >
          stephaniewardharvey@pm.me
        </a>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a 
            href="mailto:stephaniewardharvey@pm.me"
            className="hover:opacity-80 transition-opacity"
          >
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="white">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-black">
          Website created and maintained by Build-It Bear Enterprises, 2025. Copyright Incredicoon Studios, 2025.
        </p>
      </div>
    </footer>
  );
}
