import Button from "@/components/Button";

export default function CTACard() {
  return (
    <section className="mt-16 flex flex-col justify-center  mx-auto relative w-full">
      <div className="bg-gray-200/20 dark:bg-gray-800/20 -4 rounded-md flex flex-col items-center">
        <div className="max-w-xl py-8 flex flex-col items-center">
          <p className="text-xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black dark:from-white to-gray-300  dark:to-gray-700 text-center">
            Let&apos;s turn your ideas into reality! <br />
            Tell me about your next project and let&apos;s create something
            amazing together.
          </p>
          <Button className="mt-4">Start a Project! 📧</Button>
        </div>
      </div>
    </section>
  );
}
