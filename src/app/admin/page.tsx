'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Send cookies with the request
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Small delay to ensure cookie is set before redirect
        setTimeout(() => {
          router.push('/admin/dashboard');
        }, 100);
      } else {
        setError(data.error || 'Invalid password');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Network error. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-md border-4 border-black p-8 shadow-[12px_12px_0px_0px_#000000]">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-8">Admin Login</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-mono font-bold uppercase mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border-2 border-black outline-none focus:shadow-[4px_4px_0px_0px_#FA520F] transition-all font-mono"
              required
              disabled={isLoading}
              placeholder="Enter admin password"
            />
          </div>
          {error && (
            <p className="text-[#FA520F] font-mono text-xs font-bold">{error}</p>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white font-bold py-4 uppercase hover:bg-[#FA520F] transition-colors shadow-[4px_4px_0px_0px_#FA520F] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Authenticating...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}