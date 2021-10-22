/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Homepage() {
  const [username, setUsername] = useState('')
  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault()
    if (username === '') return
    router.push(`/store/${username}`)
  }

  return (
    <main className="flex justify-center">
      <div className="border-4 border-gray-300 w-96 h-40">
        <p>Veuillez s'il vous plaît vous authentifier afin de pouvoir accéder à notre boutique </p>
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            value={username}
            className="border border-gray-600"
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
          <button type="submit" className="bg-green-600 rounded-sm p-1">
            SUBMIT
          </button>
        </form>
      </div>
    </main>
  )
}
