import { ArrowLeft } from "phosphor-react";
import { useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequest: () => void;
}

export function FeedbackContentStep({
    feedbackType, 
    onFeedbackRestartRequest
}: FeedbackContentStepProps) {
    const [screenshot, setScreenShot] = useState<string | null>(null);

    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return ( 
        <>
            <header>

                <button 
                    type="button" 
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" 
                    title="Voltar"
                    onClick={onFeedbackRestartRequest}>
                    <ArrowLeft  weight="bold" className="w-4 h-4"></ArrowLeft>
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img className="w-6 h-6" src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt}></img>
                    {feedbackTypeInfo.title}
                </span>
                
                <CloseButton></CloseButton>
            </header>

            <div className="flex py-8 gap-2 w-full">
            </div>
        </>
    );
}