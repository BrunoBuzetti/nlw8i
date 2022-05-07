import { ArrowLeft } from "phosphor-react";
import { useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
    feedbackType, 
    onFeedbackRestartRequested
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
                    onClick={onFeedbackRestartRequested}>
                    <ArrowLeft  weight="bold" className="w-4 h-4"></ArrowLeft>
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img className="w-6 h-6" src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt}></img>
                    {feedbackTypeInfo.title}
                </span>
                
                <CloseButton></CloseButton>
            </header>

            <form className="my-4 w-full">
                <textarea 
                    className="min-w-[384px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalles o que está acontencendo...">
                </textarea>
            </form>
        </>
    );
}