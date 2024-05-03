import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { BellIcon } from '@radix-ui/react-icons';
import { Component } from 'react';
import { MenuIcon } from '@/utils/icons';
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { Loading } from '@/components/Loading';

interface StoreState {
    loading: boolean;
}


class Store extends Component<{}, StoreState> {
    constructor(props: any) {
        super(props); // Call the constructor of the parent class (Component)
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1000);
    }

    render() {

        const { loading } = this.state;
        if (loading) return <Loading/>

        return (
            <nav className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex items-center">
                                <a href="/">
                                    <img
                                        alt="Logo"
                                        className="block lg:hidden h-8 w-auto"
                                        height="32"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "32/32",
                                            objectFit: "cover",
                                        }}
                                        width="32"
                                    />
                                    <img
                                        alt="Logo"
                                        className="hidden lg:block h-8 w-auto"
                                        height="32"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "32/32",
                                            objectFit: "cover",
                                        }}
                                        width="32"
                                    />
                                </a>
                            </div>
                            <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                                <a
                                    className="border-b-2 border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                                    href="#Category"
                                >
                                    Category
                                </a>
                                <a
                                    className="text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                                    href="#Store"
                                >
                                    Store
                                </a>
                                <a
                                    className="text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                                    href="#Contact Us"
                                >
                                    Contact Us
                                </a>
                                <a
                                    className="text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                                    href="#About Us"
                                >
                                    About Us
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="relative hidden md:block">
                                <Input
                                    className="pl-10 pr-4 py-2 border rounded-md"
                                    placeholder="Search ..."
                                    type="search"
                                />
                                <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            </div>
                            <div className="flex items-center ml-3 sm:ml-6">
                                <Button className="ml-3" variant="ghost">
                                    <BellIcon className="h-6 w-6" />
                                </Button>
                                <Button className="ml-3" variant="ghost">
                                    <FaRegUser className="h-5 w-5" />
                                </Button>
                            </div>
                            {/* tab collape side */}
                            <div className="lg:hidden flex items-center ml-3">
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button className="ml-3" variant="ghost">
                                            <MenuIcon className="h-6 w-6" />
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent className="transition-all duration-300 ease-in-out" side="right">
                                        <div className="relative md:hidden mt-4">
                                            <Input
                                                className="pl-10 pr-4 py-2 border rounded-md"
                                                placeholder="Search ..."
                                                type="search"
                                            />
                                            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        </div>
                                        <div className="grid gap-4 p-4">
                                            <a
                                                className="text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                                                href="#"
                                            >
                                                Category
                                            </a>
                                            <a
                                                className="text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                                                href="#"
                                            >
                                                Home
                                            </a>
                                            <a
                                                className="text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                                                href="#"
                                            >
                                                Themes
                                            </a>
                                            <a
                                                className="text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                                                href="#"
                                            >
                                                Examples
                                            </a>
                                            <a
                                                className="text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                                                href="#"
                                            >
                                                Blocks
                                            </a>
                                            <a
                                                className="text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                                                href="#"
                                            >
                                                GitHub
                                            </a>
                                        </div>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Store;
