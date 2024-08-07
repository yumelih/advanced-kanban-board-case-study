'use client'

import { login } from '@/actions/login'
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
    <main className="flex flex-1 justify-center items-center">
      <div className="flex-1 bg-white max-w-lg p-12 rounded-lg shadow-2xl">
        <section>
          <h3 className="font-bold text-2xl">Welcome to Karga Karga</h3>
          <p className="text-gray-600 pt-2">Sign in to your account.</p>
        </section>
        <section className="mt-10">
          <form className="flex flex-col" action={formAction}>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-cyan-600 transition duration-500 px-3 py-2"
                required
              />
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-cyan-600 transition duration-500 px-3 py-2"
                required
              />
            </div>
            <button
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
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
