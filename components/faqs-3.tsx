'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function FAQsThree() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'zap',
            question: 'How does Scribewise AI improve my writing speed?',
            answer: 'Scribewise AI uses an Advanced Grammar Engine and real-time suggestions to catch errors, refine phrasing, and suggest stronger alternatives instantly. Users typically reduce editing time by 60% and produce polished drafts in a fraction of the time.',
        },
        {
            id: 'item-2',
            icon: 'palette',
            question: 'Can I customize the tone of my content?',
            answer: 'Absolutely. The Tone Optimizer lets you select from over 20 professional tones—including formal, conversational, persuasive, and empathetic—and applies consistent styling across your entire document with one click.',
        },
        {
            id: 'item-3',
            icon: 'shield',
            question: 'How does the Content Originality Checker work?',
            answer: 'Our AI scans your text against billions of web pages and academic sources in real time, highlighting potential matches and providing originality scores. It also suggests rephrasing to ensure 100% unique content—perfect for SEO and plagiarism concerns.',
        },
        {
            id: 'item-4',
            icon: 'users',
            question: 'Is Scribewise AI suitable for enterprise teams?',
            answer: 'Yes. The Enterprise plan includes team workspaces, centralized brand voice guidelines, role-based access, SSO login, and dedicated account management. Fortune 500 companies use Scribewise to maintain consistency across global marketing and legal teams.',
        },
        {
            id: 'item-5',
            icon: 'lock',
            question: 'Is my content secure and private?',
            answer: 'Your documents are encrypted in transit and at rest using AES-256. We never train our models on your data, and Enterprise clients can enable private cloud deployment. All processing happens securely on Vercel Edge Functions with zero data retention beyond your session.',
        },
        {
            id: 'item-6',
            icon: 'refresh-cw',
            question: 'Can I try Scribewise AI before purchasing?',
            answer: 'Yes! The interactive writing demo on our homepage lets you test all core features—grammar correction, tone adjustment, and originality checking—in real time. Starter plan users also get a 7-day free trial with full Professional access.',
        },
        {
            id: 'item-7',
            icon: 'dollar-sign',
            question: 'What’s the difference between pricing tiers?',
            answer: 'Starter ($9/mo) is ideal for individuals with 50K words/month. Professional ($29/mo) adds tone libraries, team collaboration, and priority support. Enterprise (custom) includes API access, brand voice training, and SLA-backed uptime.',
        },
    ];
    
    return (
        <section className="bg-muted dark:bg-background py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mt-4">
                                Can't find what you're looking for? Contact our{' '}
                                <Link
                                    href="#"
                                    className="text-primary font-medium hover:underline">
                                    customer support team
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-2">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-6">
                                                <DynamicIcon
                                                    name={item.icon}
                                                    className="m-auto size-4"
                                                />
                                            </div>
                                            <span className="text-base">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="text-base">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
