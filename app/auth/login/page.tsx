'use client'

import { login } from '@/actions'
import { useRouter } from 'next/navigation'
import { useFormState } from 'react-dom'
import toast from 'react-hot-toast'

const initialState = {
  message: 'pending',
  user: null,
}

const Login = () => {
  const router = useRouter()
  const [state, formAction] = useFormState(login, initialState)

  if (state.message === 'success') {
    localStorage.setItem('user', JSON.stringify(state.user))
    router.replace('/')
  }

  if (state.message === 'failed') {
    toast.error('You email or password is wrong!')
  }

  return (
    <main className="flex flex-1 items-center justify-center">
      <div className="max-w-lg flex-1 rounded-lg bg-white p-12 shadow-2xl">
        <section>
          <h3 className="text-2xl font-bold">Welcome to Karga Karga</h3>
          <p className="pt-2 text-gray-600">Sign in to your account.</p>
        </section>
        <section className="mt-10">
          <form className="flex flex-col" action={formAction}>
            <div className="mb-6 rounded bg-gray-200 pt-3">
              <label
                className="mb-2 ml-3 block text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full rounded border-b-4 border-gray-300 bg-gray-200 px-3 py-2 text-gray-700 transition duration-500 focus:border-cyan-600 focus:outline-none"
                required
              />
            </div>
            <div className="mb-6 rounded bg-gray-200 pt-3">
              <label
                className="mb-2 ml-3 block text-sm font-bold text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full rounded border-b-4 border-gray-300 bg-gray-200 px-3 py-2 text-gray-700 transition duration-500 focus:border-cyan-600 focus:outline-none"
                required
              />
            </div>
            <button
              className="rounded bg-cyan-600 py-2 font-bold text-white shadow-lg transition duration-200 hover:bg-cyan-700 hover:shadow-xl"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}

export default Login
