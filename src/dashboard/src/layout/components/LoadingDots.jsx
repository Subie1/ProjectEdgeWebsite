export default function LoadingDots() {
    return (
        <div className="flex items-center justify-center gap-2 opacity-30">
            <div className="w-2 h-2 bg-secondary rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-secondary rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-secondary rounded-full animate-bounce"></div>
        </div>
    )
}