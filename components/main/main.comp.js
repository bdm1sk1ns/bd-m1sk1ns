import Companies from './main.data';
import Link from 'next/link';

const ListOfCompanies = () => {
    return(
        <div className="text-center lg:px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6">
                {Companies.map((company) => (
                    <div key={company.id} className="cursor-pointer">
                        <Link as={`/${company.id}/${company.title}`} href="/[id]/[title]">
                            <div className="pt-4 bg-gray-50 shadow-lg h-24 transform scale-100 hover:scale-105 transition duration-300 ease-in">
                                <section className="tracking-widest text-lg font-extralight">{company.title}</section>
                                <section className="tracking-wider text-xs text-blue-600 font-light">{company.shortDes}</section>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListOfCompanies;
