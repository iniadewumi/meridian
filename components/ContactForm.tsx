'use client'

import { useState } from 'react'
import { appText } from '@/appText'

export default function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: 'general',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')

    // TODO: Implement actual form submission with rate limiting
    // This should POST to your API endpoint with server-side validation
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      // Replace with actual API call:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })
      
      setFormState('success')
      setFormData({ name: '', email: '', company: '', message: '', interest: 'general' })
    } catch (error) {
      setFormState('error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-dark-surface border border-dark-border rounded-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            {appText.contact.form.name} {appText.contact.form.required}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-dark-bg border border-dark-border rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            disabled={formState === 'submitting'}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            {appText.contact.form.email} {appText.contact.form.required}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-dark-bg border border-dark-border rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            disabled={formState === 'submitting'}
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            {appText.contact.form.company}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-dark-bg border border-dark-border rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            disabled={formState === 'submitting'}
          />
        </div>

        {/* Interest */}
        <div>
          <label htmlFor="interest" className="block text-sm font-medium mb-2">
            {appText.contact.form.interest} {appText.contact.form.required}
          </label>
          <select
            id="interest"
            name="interest"
            required
            value={formData.interest}
            onChange={handleChange}
            className="w-full bg-dark-bg border border-dark-border rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            disabled={formState === 'submitting'}
          >
            <option value="general">{appText.contact.form.interestOptions.general}</option>
            <option value="sales">{appText.contact.form.interestOptions.sales}</option>
            <option value="support">{appText.contact.form.interestOptions.support}</option>
            <option value="partnership">{appText.contact.form.interestOptions.partnership}</option>
            <option value="enterprise">{appText.contact.form.interestOptions.enterprise}</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            {appText.contact.form.message} {appText.contact.form.required}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-dark-bg border border-dark-border rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent resize-none"
            disabled={formState === 'submitting'}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formState === 'submitting'}
          className="w-full btn-primary rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formState === 'submitting' ? appText.contact.form.submitting : appText.contact.form.submit}
        </button>

        {/* Success Message */}
        {formState === 'success' && (
          <div className="bg-green-900/20 border border-green-500/50 rounded-md p-4 text-green-400">
            {appText.contact.form.success}
          </div>
        )}

        {/* Error Message */}
        {formState === 'error' && (
          <div className="bg-red-900/20 border border-red-500/50 rounded-md p-4 text-red-400">
            {appText.contact.form.error}
          </div>
        )}
      </form>
    </div>
  )
}
