/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RZl3Gboo8t2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
    
    const [formData, setFormData] = useState({
        username: '',
        first_name: '',
        last_name: '',
        password: '',
        password2: '',
        email: '',
    })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
        console.log(formData)
    }

    const handleSubmit = async (e: React.FormEvent): Promise<void>=>{
        e.preventDefault();
        setError('')
        setSuccess('')

        if (formData.password !== formData.password2) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const res = await fetch('http://127.0.0.1:8000/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setSuccess('Registration successful! Redirecting to login...');
                setTimeout(() => router.push('/login'), 2000);
            } else {
                setError(data.message || 'Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        }

        console.log("test")
    }
    return (
    <div className="mx-auto h-screen flex flex-col justify-center max-w-lg space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Register</h1>
        <p className="text-muted-foreground">Create your account to get started.</p>
      </div>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
        <Label htmlFor="first-name">Username</Label>
        <Input id="first-name" placeholder="John" name="username" onChange={handleChange} required />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First Name</Label>
            <Input id="first-name" placeholder="John" name="first_name" onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last Name</Label>
            <Input id="last-name" placeholder="Doe" name="last_name" onChange={handleChange} required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" onChange={handleChange} name="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" name="password" onChange={handleChange} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Retype the Password</Label>
          <Input id="password" type="password" name="password2" onChange={handleChange} required />
        </div>
        <Button type="submit" className="w-full">
          Register
        </Button>
      </form>
    </div>
  )
}