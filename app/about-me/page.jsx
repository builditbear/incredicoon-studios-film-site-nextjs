import Image from 'next/image';

export default function AboutMePage() {
    return (
        <div className="w-full">
            {/* Hero Image with Title and Resume Link */}
            <div className="relative w-full h-[calc(100vh-3rem)] flex flex-col">
                <div className="relative flex-1">
                    <Image
                        src="/images/about-me/hero.jpg"
                        alt="Stephanie Ward-Harvey"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Bottom Section with Title and Resume Link */}
                <div className="relative px-8 py-6 max-w-7xl mx-auto w-full">
                    <div className="flex items-center justify-between gap-12">
                        <h1 className="text-5xl font-light text-black flex-1">Hey, I'm Stephanie.</h1>

                        <a
                            href="/resume.pdf"
                            download
                            className="text-black hover:underline inline-flex items-center gap-2 w-[350px] justify-center"
                        >
                            Click to download my RESUME
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-8 py-16">
                <div className="flex gap-12 items-start">
                    {/* Left Column - Text Content */}
                    <div className="flex-1">
                        <div className="space-y-6 text-lg text-black">
                            <p>
                                When I was young, I frequently spent every penny I earned on fresh DVDs and Blu-rays from the entertainment section at the local grocery store. My parents would shop and I would study each and every title, admiring the cover art and cast list, scooping them into my basket and excitedly heading home to escape into a universe where I could save the world.
                            </p>

                            <p>
                                I have since embraced the world of filmmaking from both in front of and behind the camera, having experience in acting, assistant camera, grip and lighting, only to find my home in sound mixing and boom operation. As a woman in film, I strive to make film an accessible and fun learning environment all while doing what we storytellers do best: evoking emotion, creating connections and inspiring others.
                            </p>

                            <p className="font-light italic">Keep filmmaking fun.</p>

                            <p className="text-2xl font-light mt-8">
                                <span className="font-normal">~Stephanie</span>
                            </p>
                        </div>

                        <div className="mt-12">
                            <p className="text-base text-black leading-relaxed">
                                <strong>Stephanie Ward-Harvey</strong> is a 2022 graduate from Western Washington University with a Bachelor's degree in technical theatre/creative writing and most recently an award winning filmmaker. When she isn't making films herself, she is managing a non profit film camp for kids with NW Film Camp in Portland, OR and sipping a chai tea while reading Twilight and petting her cat Sokka.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Images and Resume */}
                    <div className="w-[350px] flex flex-col gap-8">
                        {/* Photo with decorative frame */}
                        <div className="relative">
                            {/* Decorative logo at top center */}
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                                <Image
                                    src="/logo-audio-style.png"
                                    alt="Incredicoon Studios"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>

                            {/* Dotted border frame with spacing */}
                            <div className="border-2 border-dotted border-black rounded-lg flex items-center justify-center p-8">
                                <div className="relative w-full h-[400px]">
                                    <Image
                                        src="/images/about-me/bio.jpg"
                                        alt="Stephanie on set"
                                        fill
                                        className="object-cover rounded"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}