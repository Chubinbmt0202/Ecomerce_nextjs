import Navbar from "@/component/header";
import Head from "next/head";

type LayoutType = {
    title?: string;
    children?: React.ReactNode;
}

const LayoutMain = ({children, title = 'Trung anh title'}: LayoutType) => {
    return (
        <div className="app-main">
          <Head>
            <title>{ title }</title>
          </Head>
          <Navbar />
          <main>
            {children}
          </main>
        </div>
    )
}

LayoutMain.displayName = "LayoutMain"
export default LayoutMain