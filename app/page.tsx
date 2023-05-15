import ViewHomePage from "@/features/home";

export default function Home() {
    /* @ts-expect-error Async Server Component */
    return <ViewHomePage />;
}
