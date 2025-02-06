"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
  }

  return (
    <div className="min-h-screen bg-black flex">
      {/* Left section with logo and Bitcoin image */}
      <div className="flex-1 relative p-8">
        <Link href="/" className="inline-block">
          <span className="text-3xl font-bold text-white">
            A<span className="text-purple-500">I</span>vestor
            <span className="text-purple-500">.</span>
          </span>
        </Link>
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/login-YZOJ8nSk6ha9JS1SLU8iXld39esbr9.png"
            alt="Bitcoin Stack"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>

      {/* Right section with login form */}
      <div className="flex-1 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-3xl" />
        <div className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-black/40">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white">
              Account <span className="text-purple-500">Login</span>
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/10 text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/5 border-white/10 text-white"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" className="border-white/20 data-[state=checked]:bg-purple-500" />
              <Label htmlFor="remember" className="text-sm text-gray-300">
                Remember me
              </Label>
            </div>

            <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 text-white">
              Login
            </Button>

            <Button type="button" variant="outline" className="w-full bg-white hover:bg-gray-100 text-black">
              <Image src="/google.svg" alt="Google" width={20} height={20} className="mr-2" />
              Login with Google
            </Button>

            <p className="text-center text-gray-400 text-sm">
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-400 hover:underline">
                Sign up here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

