import Link from 'next/link';

const HeaderComp = () => {
    return(
        <div className="p-3 bg-white text-center p-8">
            <Link href="/">
                <p className="cursor-pointer p-2 font-light text-lg">Miskin Companies</p>
            </Link>
        </div>
    )
}

export default HeaderComp;