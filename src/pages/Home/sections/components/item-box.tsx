export default function ItemBox({link, name, logo}: {link: string, name: string, logo: string}) { 
    return (
        <a href={link} key={name} className="flex flex-col items-center justify-center 
        w-18 h-20 rounded-lg px-5 py-10 text-center text-[8px] 
        cursor-pointer gap-2 border filter sm:grayscale text-white
        hover:scale-105 hover:-translate-y-1 sm:hover:grayscale-0
        transition duration-300 ease-in-out
        backdrop-blur-sm bg-white/10 border-white/10 hover:border-blue-200">
            <img src={logo} alt={`${name} Logo`} width={30} height={30}/>
            <span >{name}</span>
        </a>
    )
    
}