export default function NavBar() {
    return (
        <>
            <div className="flex font-untitledSans font-bold flex-row justify-between w-full py-9 text-lg px-28">
                <a href="/#" className="text-lg">Logo</a>
                <a 
                    href="mailto:theodoreladera.tl@gmail.com"
                >
                    theodoreladera.tl@gmail.com
                </a>
                <ul className="flex flex-row gap-10">
                    <li>
                        <a href="#about">ABOUT</a>
                    </li>
                    <li>
                        <a href="#works">WORKS</a>
                    </li>
                    <li>
                        <a href="#contact">CONTACT</a>
                    </li>
                </ul>
            </div>
        </>
    )
}