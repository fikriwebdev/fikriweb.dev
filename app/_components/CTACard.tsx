"use client";

import Button from "@/components/Button";
import BoxBorderAnimation from "@/components/shared/BoxBorderAnimation";

export default function CTACard() {
    return (
        <section>
            <BoxBorderAnimation className="mt-16">
                <div className="max-w-xl py-8 flex flex-col items-center px-4">
                    <p className="text-xl md:text-3xl font-semibold text-center opacity-80">
                        Let&apos;s turn your ideas into reality! <br />
                        Tell me about your next project and let&apos;s create
                        something amazing together.
                    </p>
                    <Button className="mt-4">Start a Project! 📧</Button>
                </div>
            </BoxBorderAnimation>
        </section>
    );
}
