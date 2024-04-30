// import './App.css'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { BellIcon } from 'lucide-react'
import { Home } from './app/screens/Home'

function App() {
    return <Home/>
    return <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
                <div className="flex items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#">
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
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <a
                            className="border-b-2 border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                            href="#"
                        >
                            Docs
                        </a>
                        <a
                            className="text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                            href="#"
                        >
                            Components
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
                </div>
                <div className="flex items-center">
                    <div className="relative hidden sm:block">
                        <Input
                            className="pl-10 pr-4 py-2 border rounded-md"
                            placeholder="Search documentation..."
                            type="search"
                        />
                        <MicroscopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    <div className="flex items-center ml-3 sm:ml-6">
                        <Button className="ml-3" variant="ghost">
                            <BellIcon className="h-6 w-6" />
                        </Button>
                        <Button className="ml-3" variant="ghost">
                            <CogIcon className="h-6 w-6" />
                        </Button>
                    </div>
                    <div className="sm:hidden flex items-center ml-3">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button className="ml-3" variant="ghost">
                                    <MenuIcon className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="transition-all duration-300 ease-in-out" side="right">
                                <div className="grid gap-4 p-4">
                                    <a
                                        className="text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                                        href="#"
                                    >
                                        Docs
                                    </a>
                                    <a
                                        className="text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                                        href="#"
                                    >
                                        Components
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
}

export default App

function CogIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M12 2v2" />
        <path d="M12 22v-2" />
        <path d="m17 20.66-1-1.73" />
        <path d="M11 10.27 7 3.34" />
        <path d="m20.66 17-1.73-1" />
        <path d="m3.34 7 1.73 1" />
        <path d="M14 12h8" />
        <path d="M2 12h2" />
        <path d="m20.66 7-1.73 1" />
        <path d="m3.34 17 1.73-1" />
        <path d="m17 3.34-1 1.73" />
        <path d="m11 13.73-4 6.93" />
      </svg>
    )
  }
  
  
  function MenuIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    )
  }
  
  
  function MicroscopeIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 18h8" />
        <path d="M3 22h18" />
        <path d="M14 22a7 7 0 1 0 0-14h-1" />
        <path d="M9 14h2" />
        <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
        <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
      </svg>
    )
  }
