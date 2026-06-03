import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A2540] flex items-center justify-center px-4 text-center">
      <div>
        <div className="text-8xl font-bold font-heading gradient-text mb-4">404</div>
        <h1 className="text-2xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-white/50 mb-8">The page you're looking for doesn't exist.</p>
        <Link href="/" className="btn-primary inline-flex">Return Home</Link>
      </div>
    </div>
  );
}
