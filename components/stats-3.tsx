export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-semibold lg:text-5xl">Scribewise in numbers</h2>
                    <p>Scribewise is transforming how professionals write. Trusted by millions worldwide, our AI-powered platform delivers real results for writers, teams, and enterprises.</p>
                </div>

                <div className="grid gap-0.5 *:text-center md:grid-cols-3">
                    <div className="rounded-(--radius) space-y-4 border py-12">
                        <div className="text-5xl font-bold">+5M</div>
                        <p>Active Writers</p>
                    </div>
                    <div className="rounded-(--radius) space-y-4 border py-12">
                        <div className="text-5xl font-bold">96%</div>
                        <p>Accuracy rate</p>
                    </div>
                    <div className="rounded-(--radius) space-y-4 border py-12">
                        <div className="text-5xl font-bold">+2B</div>
                        <p>Words Analyzed</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
