import React from 'react'
import User from './types/user'
import axios from 'axios'
import { parsedEnv } from '../../env'
import { parse } from 'path';

export default async function Home() {
  const response = await axios.get<User[]>(
    `${parsedEnv.API_URL}/users`,
    {
      headers: {
        "Authorization": `Bearer ${parsedEnv.API_TOKEN}`,
      },
    }
  );
  
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">USUARIOS</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {response.data.map((user, index) => (
          <article key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-700">{user.username}</h2>
            <h3 className="text-lg text-gray-600">{user.email}</h3>
          </article>
        ))}
      </div>
    </main>
  )
}
