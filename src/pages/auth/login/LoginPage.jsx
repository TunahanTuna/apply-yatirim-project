import React, { useState } from 'react'
import ApplyLogo from '../../../assets/ApplyLogo'
import axios from 'axios'
import { toast } from 'react-toastify'

const initialUser = { identifier: '', password: '' }
// Bütün alanlar dinamikleştirilecek.
export default function LoginPage() {
    const [user, setUser] = useState(initialUser)

    const handleChange = ({ target }) => {
        const { name, value } = target
        setUser((currentUser) => ({
            ...currentUser,
            [name]: value
        }))
    }
    const handleLogin = async () => {
        const url = import.meta.env.VITE_AUTH_URL

        try {
            if (user.identifier && user.password) {
                const res = await axios.post(url, user)
            }
        } catch (error) {
            toast.error(error.message, {
                hideProgressBar: true
            })
        }
    }

    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-1/3 max-w-sm">
                <ApplyLogo width="18rem" />
            </div>
            <div className="md:w-1/3 max-w-sm">
                <form>
                    <input
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                        type="email"
                        name="identifier"
                        placeholder="Kullanıcı Adı"
                        onChange={handleChange}
                        value={user.identifier}
                    />
                    <input
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                        type="password"
                        name="password"
                        placeholder="Şifre"
                        onChange={handleChange}
                        value={user.password}
                    />
                </form>

                <div className="text-center md:text-left">
                    <button
                        className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                        type="submit"
                        onClick={handleLogin}
                    >
                        Giriş
                    </button>
                </div>
            </div>
        </section>
    )
}