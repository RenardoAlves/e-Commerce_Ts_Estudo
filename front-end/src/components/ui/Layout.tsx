import Header from "./Header"

const Layout = ({ children }: any) => {
    return (
        <div className="flex min-h-svh p-6 bg-gray-900">
            <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
            <Header/>
            { children }
            </div>
        </div>
    )
}

export default Layout;