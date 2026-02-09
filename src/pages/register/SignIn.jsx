import React from 'react'
import PromoSection from '../../components/PromoSection'

const SignIn = () => {
  return (
    <div className='flex justify-center items-center min-h-screen px-20 gap-10'>

      <PromoSection />

      <div className="w-96 bg-white p-8 rounded-xl shadow-lg flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Войти в Instagram
        </h2>

        <input
          type="text"
          placeholder="Логин"
          className="border rounded-lg px-4 py-3 w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Пароль"
          className="border rounded-lg px-4 py-3 w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button className="bg-blue-500 text-white py-3 rounded-lg w-full text-lg hover:bg-blue-600 font-semibold">
          Войти
        </button>

        <a href="#" className="text-sm text-blue-600 text-center">
          Забыли пароль?
        </a>

        <button className="bg-blue-700 text-white py-3 rounded-lg w-full text-lg hover:bg-blue-800 font-semibold">
          Войти через Facebook
        </button>

        <a href="#" className="text-sm text-blue-600 text-center rounded-lg">
          Создать новый аккаунт
        </a>
      </div>
    </div>
  )
}

export default SignIn