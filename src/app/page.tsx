"use client"

import {useState} from "react";
import Image from "next/image";
import {GoMute, GoUnmute} from "react-icons/go";

import {produce} from 'immer'




const words = [
  "Squirm",
  "Muck",
  "Fester",
  "Gristle",
  "Squelch",
  "Ooze",
  "Gunk",
  "Sludge",
  "Clammy",
  "Creak",
  "Blob",
  "Nasty",
  "Gaggle",
  "Crusty",
  "Flake",
  "Pus",
  "Slime",
  "Drool",
  "Phlegm",
  "Grime",
  "Scum",
  "Moist",
  "Gnash",
  "Splash",
  "Smegma",
  "Mucus",
  "Maggot",
  "Flesh",
  "Pound",
  "Fetid",
  "Seeping",
  "Diarrhea",
  "Scab",
  "Pustulent",
  "Corpus",
  "Bung",
  "Fecid",
  "Fetid",
  "Crung",
  "Matter",
  "Krindle",
  "Crindle",
  "Squanch",
  "Squish",
  "Spleen",
  "Apex",
  "Secrete",
  "Hatch",
  "Clang",
  "Fang",
  "Blister",
  "Callous",
  "Bile",
  "Bilous",
  "Chafe",
  "Gush",
  "Cyst",
  "Cystaceous",
  "Lump",
  "Rot",
  "Rank",
  "Slop",
  "Ere",
  "Skatter",
  "Skin",
  "Mash",
  "Waste",
  "Stench",
  "Grunch",
  "Fecal",
  "Tongue",
  "Tepid",
  "Algae",
  "Fowl",
  "Foul",
  "Rankor",
  "Schism",
  "Rip",
  "Rancid",
  "Vulgar",
  "Sebaceous",
  "Wing",
  "Thigh",
  "Eye",
  "Coch",
  "Bane",
  "Clang",
  "Powder",
  "Winge",
  "Chog",
  "Eel",
  "Blood",
  "Hemo",
  "Glob",
  "Musk",
  "Gland",
  "Wring",
  "Frack",
  "Oil",
  "Slig",
  "Agony",
  "Gasp",
  "Feces",
  "Fetus",
  "Fetal",
  "Fecundid",
  "Colonic",
  "Young",
  "Wrinkle",
  "Wet",
  "Munge",
  "Mange",
  "Rabid",
  "Cream",
  "Worm",

];

// @TODO: Could be much better at generating weird names by respecting english linguistic rules lmao
const adjs = []
const nouns = []
const verbs = []

const arrayRandom = <T,>(array: T[]): T => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export default function Home() {

  const [playSound, setPlaySound] = useState(true)

  const [history, setHistory] = useState<string[]>([])


  const generateName = (): string => {

    let prefix = arrayRandom(words)
    let suffix = arrayRandom(words).toLowerCase()

    const prefixLast = prefix[prefix.length - 1]
    const suffixFirst = suffix[0]

    // if the first and last letters are the same, remove one
    if(prefixLast === suffixFirst){
      suffix = suffix.slice(1)
    }

    return prefix + suffix


  }

  const exaltedOrbSound = new Audio('./exalted.mp3')


  const [name, setName] = useState<string>()

  const handleName = (name: string) => {
    setName(name)
    setHistory(produce(draft => {
      draft.push(name)
    }))

  }

  const handleGenerate = async () => {
    const name = generateName()

    handleName(name)

    if(playSound) await exaltedOrbSound.play()
  }

  // @TODO: Add history display


  return (
    <div className={`bg-gradient-to-b from-black to-red-600 flex flex-col justify-center align-center gap-24 w-screen h-screen text-center`}>


      <h1 className='text-6xl'>PoE <span className='text-yellow-600'>Rare</span> Generator</h1>

      <div className='h-14'>
        {name != null ? (
            <p className='text-2xl underline-offset-4 underline'>{name}</p>
        ) : (
            <p className='text-2xl italic'>???</p>
        )}

      </div>

      <div className='flex flex-row gap-4 self-center'>

        <button onClick={() => setPlaySound((sound) => !sound)}>
          {playSound ? (<GoUnmute />) : (<GoMute />)}
        </button>

        <button onClick={handleGenerate}
                className='flex flex-row gap-2 self-center transition-all hover:shadow-hard w-fit px-10 py-1 rounded-xl'>Generate
          <Image src='/exalted_orb.png' width={25} height={25} alt={"PoE Exalted Orb"}/>
        </button>
      </div>
    </div>
  );
}
