import Circle from "../layout/components/Circle";

export default function CirclePage() {
    return (
        <main className="flex-1 h-full gap-2 flex items-center justify-center">
            <Circle />
            <p>This is a circle. (Click It)</p>
        </main>
    )
}