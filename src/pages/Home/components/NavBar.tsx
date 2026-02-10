export default function NavBar() {
    return (
        <>
            <div className="flex font-untitledSans font-bold flex-row justify-between w-full py-9 text-2xl px-28 top-0 fixed z-50 box-border">
                <div className="flex items-center gap-10">
                    <a href="/#" className="text-lg">Logo</a>
                    <a 
                        href="mailto:theodoreladera.tl@gmail.com"
                    >
                        theodoreladera.tl@gmail.com
                    </a>
                </div>

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