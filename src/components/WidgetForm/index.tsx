import { useState } from 'react';
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { CloseButton } from '../CloseButton';

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'imagem de um balão de pensamento'
        }
    },
};

export type FeedbackType = keyof typeof feedbackTypes;  

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    function handleRestartFeedback() {
        setFeedbackType(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            <header>
                <span className="text-xl çeading-6">
                    Deixe seu feedback
                </span>
                <CloseButton></CloseButton>
            </header>

            { !feedbackType ? (
                        <div className="flex py-8 gap-2 w-full">
                        {Object.entries(feedbackTypes).map(([key, value]) => {
                            console.log(key, value);
                            return (
                                <button
                                    type="button"
                                    key={key}
                                    onClick={() => setFeedbackType(key as FeedbackType)}
                                    className="bg-zinc-800  rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                                >
                                    <img src={value.image.source} alt={value.image.alt} />
                                    <span>{value.title}</span>
                                </button>
                            )
                        })}
                    </div>
            ) : (
                <p>Hellow</p>
            )


            }

            <footer className="text-xs text-neutral-400">
                Feito con ♥ por Bruno & <a className="underline underline-offset-2" href="http://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    );
}