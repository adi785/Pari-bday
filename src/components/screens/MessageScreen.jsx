"use client"

import { useState } from "react"

export default function MessageScreen() {
    const [opened, setOpened] = useState(false)

    return (
        <div className="bg-[#fff8fc] p-7 rounded-[60px] drop-shadow-2xl min-w-48 w-full max-w-110 relative flex flex-col items-center gap-4 my-10">
            <div
                className="text-center">
                <h2
                    className="text-2xl md:text-3xl font-semibold text-primary text-center"
                >
                    A Special Message
                </h2>

                <p className="text-primary/70 text-sm">
                    Tap to open
                </p>
            </div>

            <div
                onClick={() => setOpened(!opened)}
                className={`card  relative h-71.25 w-full rounded-[40px] overflow-hidden shadow-inner cursor-pointer transition-all bg-linear-to-b from-white/80 to-pink-200 flex items-center justify-center max-w-71.25`}
            >
                <div className={`cover ${opened ? "opacity-0" : "opacity-100"} pointer-events-none z-10 bg-[#ffedea]!`} />

                <div className="relative px-6 h-56 overflow-y-auto text-foreground">
                    Happy birthday pari di.!!!U deserve all the happiness, love and smiles today and always... i cant tell u .. kitni baar apne meri help kri h.. bhale hi woh hum dono ki ladyai ho, hum dono k gusse k shikar ho.. ya kuch bhi.. i wont forget.. aapne mujhe itna samjhaya jb bhi hum dono lade h... just bcoz of u.. hmari kaafi ladayia toh kaafi jaldi sort huyi h... Keep being thee amazing person .. our third wheel , spreading joy .. Wishing u endless happiness and success ... aap success ho.. tb hum bhi success ho jayege... Happy bdya to u Pari di !! 💗💗
                </div>
            </div>
        </div>
    )
}
