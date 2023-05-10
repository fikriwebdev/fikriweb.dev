import Button from "@/components/Button";

export default function CTACard() {
  return (
    <section className="px-4 md:px-0">
      <div className="mt-16 flex flex-col justify-center  mx-auto relative w-full rounded-md overflow-hidden bg-gray-800">
        <div className="absolute -left-1/2 -right-1/2  animate-rotate bg-gradient-to-r from-white via-transparent to-transparent w-[200%] h-[700%] transform rotate-90  z-10"></div>
        <div className="bg-gray-200/20 dark:bg-gray-800 m-1  flex flex-col items-center relative z-10 rounded-md">
          <div className="max-w-xl py-8 flex flex-col items-center px-4">
            <p className="text-xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black dark:from-white to-gray-300  dark:to-gray-700 text-center">
              Let&apos;s turn your ideas into reality! <br />
              Tell me about your next project and let&apos;s create something
              amazing together.
            </p>
            <Button className="mt-4">Start a Project! 📧</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
