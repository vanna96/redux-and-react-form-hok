import { useSelector } from "react-redux";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { ComboBox } from "./components/ComboBox";
import { FaMapMarkedAlt } from "react-icons/fa";
import { useMemo } from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { Link } from 'react-router-dom';

export function Home() {

    const store = useSelector((state: any) => state.store);

    const zones: Zone[] = useMemo(() => {
        if (!store?.selectedBranch) return [];
        return store?.branchs.find((branch: Branch) => branch.id === store?.selectedBranch)?.detail
    }, [store?.selectedBranch]);

    return <div className="min-h-screen bg-[#2c2a2e] text-white relative">
        <div className="flex items-center justify-center">
            <div>
                <p className="font-bold leading-tight text-6xl flex justify-center mt-16">Store</p>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-1 m-16">
                    {store?.countries?.map((country: Country, idx: number) => (
                        <div
                            key={idx}
                            className={`col-span-1 flex m-1 items-center justify-center ${country.id === store?.selectedCountry ? 'text-yellow-600' : ''
                                } gap-1 my-2 mx-3 text-lg cursor-pointer`}
                        >
                            <p>{country.name}</p> <FaFontAwesomeFlag />
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <ComboBox />
                </div>
            </div>
        </div>
        <div className="container grid md:grid-cols-3 grid-cols-1 mt-16 gap-[100px]">
            {zones?.map((zone: Zone, idx: number) => (
                <div className="col-span-1 pb-4" key={idx} style={{ borderBottom: '1px solid rgb(128 128 128 / 15%)' }}>
                    <p className="text-3xl m-2">{zone.name}</p>
                    <p className="flex items-center m-2">
                        <span><MdOutlinePhoneAndroid /></span>
                        {zone.phone}
                    </p>
                    <p className="flex gap-2 w-90% m-2">
                        <span><FaMapMarkedAlt /></span>
                        {zone.address}
                    </p>
                    <Link to={`/store/${zone.id}`}>
                        <p className="m-2 text-yellow-600 flex items-center gap-2 font-bold cursor-pointer">More Detail <IoIosArrowForward /></p></Link>
                </div>
            ))}
        </div>
        <div className="fixed bottom-0 right-0 p-8">
            <div className="flex flex-col items-end">
                <AiOutlineFacebook className="text-4xl text-yellow-600 mb-4 cursor-pointer" />
                <FaInstagram className="text-4xl text-yellow-600 cursor-pointer" />
            </div>
        </div>
    </div>
}
