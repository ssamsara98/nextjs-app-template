'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import { serverApi } from '~/lib/serverApi';
import axios from 'axios';

export const UserComponent = () => {
  const { data: session, update } = useSession();

  async function updateSession() {
    if (!session) return;
    try {
      const tokens = await serverApi.post<{ accessToken: string; refreshToken: string }>(
        '/refresh-token',
        {},
        { headers: { Authorization: `Bearer ${session?.refreshToken}` } },
      );
      await update({
        user: session?.user,
        ...tokens.data,
      });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error(err.response?.data);
      }
    }
  }

  async function logSession() {
    console.log(session);
  }

  return (
    <>
      <main className="min-h-screen p-24">
        <h2 className="font-extrabold text-5xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-400">User</span>
        </h2>
        <div className="flex space-x-2">
          <button className="border border-green-500 rounded px-4 py-2" onClick={updateSession}>
            Refresh
          </button>
          <button className="border border-green-500 rounded px-4 py-2" onClick={logSession}>
            Log Session
          </button>
        </div>
        <p className="whitespace-pre-wrap">{JSON.stringify(session, null, 2)}</p>
      </main>
    </>
  );
};
