import { Metadata } from 'next'
import { appText } from '@/appText'

export const metadata: Metadata = {
  title: appText.metadata.about.title,
  description: appText.metadata.about.description,
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
