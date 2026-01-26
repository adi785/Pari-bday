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
                    Happy birthday 🎂 
                </h2>

                <p className="text-primary/70 text-sm">
                    click to read 💌 
                </p>
            </div>

            <div
                onClick={() => setOpened(!opened)}
                className={`card  relative h-71.25 w-full rounded-[40px] overflow-hidden shadow-inner cursor-pointer transition-all bg-linear-to-b from-white/80 to-pink-200 flex items-center justify-center max-w-71.25`}
            >
                <div className={`cover ${opened ? "opacity-0" : "opacity-100"} pointer-events-none z-10 bg-[#ffedea]!`} />

                <div className="relative px-6 h-56 overflow-y-auto text-foreground">
                   𝙃𝙖𝙥𝙥𝙮 𝙗𝙞𝙧𝙩𝙝𝙙𝙖𝙮,🎂 𝙢𝙖𝙮 𝙮𝙤𝙪𝙧 𝙙𝙖𝙮 𝙗𝙚 𝙖𝙨 𝙨𝙬𝙚𝙚𝙩 𝙖𝙨 𝙮𝙤𝙪𝙧 𝙗𝙚𝙝𝙖𝙫𝙞𝙤𝙧 𝙖𝙣𝙙 𝙖𝙨 𝙗𝙚𝙖𝙪𝙩𝙞𝙛𝙪𝙡 𝙖𝙨 𝙮𝙤𝙪𝙧 𝙝𝙚𝙖𝙧𝙩,❤️ 𝙮𝙤𝙪 𝙙𝙚𝙨𝙚𝙧𝙫𝙚 𝙖𝙡𝙡 𝙩𝙝𝙚 𝙡𝙤𝙫𝙚, 𝙝𝙖𝙥𝙥𝙞𝙣𝙚𝙨𝙨 𝙖𝙣𝙙 𝙡𝙞𝙩𝙩𝙡𝙚 𝙢𝙖𝙜𝙞𝙘𝙖𝙡 𝙢𝙤𝙢𝙚𝙣𝙩𝙨 𝙩𝙤𝙙𝙖𝙮 𝙖𝙣𝙙 𝙖𝙡𝙬𝙖𝙮𝙨✨️ 𝙢𝙖𝙮 𝙮𝙤𝙪𝙧 𝙖𝙡𝙡 𝙙𝙧𝙚𝙖𝙢/𝙜𝙤𝙖𝙡 𝙘𝙤𝙢𝙚𝙨 𝙩𝙧𝙪𝙚 𝙖𝙣𝙙 𝙮𝙤𝙪𝙧 𝙡𝙞𝙛𝙚 𝙗𝙚 𝙛𝙞𝙡𝙡𝙚𝙙 𝙬𝙞𝙩𝙝 𝙥𝙚𝙖𝙘𝙚, 𝙡𝙤𝙫𝙚 𝙖𝙣𝙙 𝙝𝙖𝙥𝙥𝙞𝙣𝙚𝙨𝙨,❤️ 𝙄 𝙬𝙖𝙣𝙩𝙚𝙙 𝙩𝙤 𝙩𝙚𝙡𝙡 𝙮𝙤𝙪 𝙩𝙝𝙖𝙩, 𝟮𝟬𝟮𝟱 𝙝𝙤𝙣𝙚𝙨𝙩𝙡𝙮 𝙬𝙖𝙨𝙣’𝙩 𝙖 𝙜𝙧𝙚𝙖𝙩 𝙮𝙚𝙖𝙧 𝙛𝙤𝙧 𝙢𝙚,"𝙗𝙪𝙩 𝙢𝙚𝙚𝙩𝙞𝙣𝙜 𝙮𝙤𝙪 𝙩𝙝𝙖𝙩 𝙮𝙚𝙖𝙧 𝙝𝙖𝙨 𝙗𝙚𝙚𝙣 𝙖 𝙫𝙚𝙧𝙮 𝙥𝙤𝙨𝙞𝙩𝙞𝙫𝙚 𝙚𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙚 𝙛𝙤𝙧 𝙢𝙚," 𝙄 𝙩𝙝𝙞𝙣𝙠 𝙮𝙤𝙪'𝙧𝙚 𝙖 𝙩𝙧𝙪𝙡𝙮 𝙜𝙤𝙤𝙙 𝙥𝙚𝙧𝙨𝙤𝙣 𝙖𝙣𝙙 "𝙮𝙤𝙪'𝙧𝙚 𝙝𝙤𝙣𝙚𝙨𝙩𝙡𝙮 𝙤𝙣𝙚 𝙤𝙛 𝙩𝙝𝙚 𝙣𝙞𝙘𝙚𝙨𝙩 𝙥𝙚𝙧𝙨𝙤𝙣 𝙄 𝙢𝙚𝙩 𝙩𝙝𝙖𝙩 𝙮𝙚𝙖𝙧." . 💗
                </div>
            </div>
        </div>
    )
}
