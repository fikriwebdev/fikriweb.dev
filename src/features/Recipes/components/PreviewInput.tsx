import Input from "@/components/shared/Recipes/Input";

export default function PreviewInput() {
    return (
        <div className="flex flex-col gap-4 w-[300px]">
            <Input placeholder="Enter your name" size="sm" />
            <Input placeholder="Enter your name" size="md" />
            <Input placeholder="Enter your name" size="lg" />
        </div>
    );
}
