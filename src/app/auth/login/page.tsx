/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mxCiEJWLhJ5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { login } from '../../../lib/utils/auth';
import { useRouter } from 'next/navigation';

export default function Component() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent): Promise<void>=>{
        e.preventDefault()
        console.log(formData.username)
        try {
          await login(formData.username, formData.password);
          router.push('/dashboard');
        } catch (err) {
          setError(err.message);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void=>{
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
        console.log(formData)
    }
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Or{" "}
            <Link href="#" className="font-medium text-primary hover:text-primary-foreground" prefetch={false}>
              start your 14-day free trial
            </Link>
          </p>
        </div>
        <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="username" className="sr-only">
              Username
            </Label>
            <Input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              placeholder="Username"
              className="relative block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="password" className="sr-only">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Password"
              className="relative block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox id="remember-me" name="remember-me" />
              <Label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                Remember me
              </Label>
            </div>
            <div className="text-sm">
              <Link href="#" className="font-medium text-primary hover:text-primary-foreground" prefetch={false}>
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}