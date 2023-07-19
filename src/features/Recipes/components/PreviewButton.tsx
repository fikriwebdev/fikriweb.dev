import ReusableButton from "@/components/shared/Recipes/Button";
import { ArrowRight, Loader, Settings } from "lucide-react";

export default function PreviewButton() {
    return (
        <div className="flex flex-col gap-4 items-start p-4  w-full">
            <div className="flex items-center gap-4">
                {/* filled */}
                <ReusableButton>Default</ReusableButton>
                <ReusableButton variant="filled-secondary">
                    Secondary
                </ReusableButton>
                <ReusableButton variant="filled-danger">Danger</ReusableButton>
                <ReusableButton variant="filled-warning">
                    Warning
                </ReusableButton>
                <ReusableButton variant="filled-success">
                    Success
                </ReusableButton>
            </div>
            <div className="flex items-center gap-4">
                {/* outline */}
                <ReusableButton variant="outline">Outline</ReusableButton>
                <ReusableButton variant="outline-secondary">
                    Outline
                </ReusableButton>
                <ReusableButton variant="outline-danger">
                    Outline
                </ReusableButton>
                <ReusableButton variant="outline-warning">
                    Outline
                </ReusableButton>
                <ReusableButton variant="outline-success">
                    Outline
                </ReusableButton>
            </div>
            <div className="flex items-center gap-4">
                {/* ghost */}
                <ReusableButton variant="ghost">Ghost</ReusableButton>
                <ReusableButton variant="ghost-secondary">Ghost</ReusableButton>
                <ReusableButton variant="ghost-danger">Ghost</ReusableButton>
                <ReusableButton variant="ghost-warning">Ghost</ReusableButton>
                <ReusableButton variant="ghost-success">Ghost</ReusableButton>
            </div>
            <div className="flex items-center gap-4">
                {/* With icon */}
                <ReusableButton>
                    <Settings className="w-4 h-4" /> Settings
                </ReusableButton>
                <ReusableButton>
                    Continue <ArrowRight className="w-4 h-4" />
                </ReusableButton>
                <ReusableButton disabled>Disabled</ReusableButton>
                <ReusableButton isLoading>Disabled</ReusableButton>
                <ReusableButton
                    isLoading
                    spinner={<Loader className="w-4 h-4" />}
                    loadingText="Saving..."
                >
                    Disabled
                </ReusableButton>
            </div>
        </div>
    );
}
