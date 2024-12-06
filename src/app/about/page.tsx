export default function About() {
    return (
        <main>
            <div className="max-w-[1400px] m-auto py-32 px-5">
                <h1 className="text-5xl">About</h1>
                <div className="pt-12">
                    <h1 className="text-2xl">What is this?</h1>
                    <p className="capitalize pt-5">
                        The elden cast refrence based on the elden ring game.
                        You will have access to about hundreds of bosses, npcs, weapons, item and...
                        <br />
                        The elden cast refrence is filled with canonical information as seen on the video game.
                    </p>
                    <h1 className="text-2xl pt-20">Who are you?</h1>
                    <p className="capitalize pt-5">
                        im <a target="_blank" href="https://github.com/ArshiarshiA" className="text-[#cbaa6a] underline">arshia mansury</a>, a guy who likes to develop things; like a refrence about my fav video game.
                    </p>
                    <h1 className="text-2xl pt-20">Why did you build this?</h1>
                    <p className="capitalize pt-5">
                        Because me were really interested in the idea of writing an project and also because elden ring is my favorite game at that moment, so why not?
                    </p>
                    <h1 className="text-2xl pt-20">Technical stuff?</h1>
                    <p className="capitalize pt-5">
                        The entire project is hosted on <span className="text-blue-400">React</span> and nextjs. im use  <span className="text-blue-400">tailwindcss</span> and <span className="text-purple-500">heroicon</span> to serve the ui. for api i use from <a target="_blank" className="text-[#cbaa6a] underline" href="https://eldenring.fanapis.com/">elden ring open source api</a> and <span className="text-purple-500">axios</span> for handle http requests
                    </p>
                </div>
            </div>
        </main>
    )
}