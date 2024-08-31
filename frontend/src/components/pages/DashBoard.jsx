'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PlusCircle, User, FileText } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useNavigate } from 'react-router-dom'
import Roadmap from './Roadmap'

export default function HomePage() {
  const [username, setUsername] = useState('Educator')
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch user data and update username
    // This is a placeholder, replace with actual API call
    setUsername('John Doe')
  }, [])

  const handleLogout = () => {
    // Implement logout logic here
    navigate('/')
  }

  const handleEditProfile = () => {
    navigate('/profile')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-700">My Kagada</h1>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleEditProfile}>Edit Profile</DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <motion.h2 
          className="text-3xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome back, {username}!
        </motion.h2>

        {/* Exam Types */}
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Supported Exam Types</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['JEE', 'NEET', 'KCET', '11th', '12th', 'More Soon'].map((exam) => (
              <Card key={exam} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="flex items-center justify-center h-24">
                  <span className="text-lg font-medium">{exam}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">How It Works</h3>
          <Roadmap />
        </motion.section>

        {/* Quick Actions */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Create New Exam</CardTitle>
            </CardHeader>
            <CardContent>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Start Creating
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>View Question Bank</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Browse Questions
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">MyKagada</h4>
              <p className="text-sm">Empowering educators with comprehensive exam management tools.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Pricing</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-sm">Email: support@MyKagada.com</p>
              <p className="text-sm">Phone: +1 (123) 456-7890</p>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} MyKagada. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}