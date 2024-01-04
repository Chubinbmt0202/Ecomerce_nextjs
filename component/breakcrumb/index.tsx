const Breakcrumb = () => {
    return (
        <nav aria-label="Breadcrumb">
        <ol
          role="list"
          className="mx-auto pt-28 flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <li>
            <div className="flex items-center">
              <a
                href={"/shop"}
                className="mr-2 text-sm font-medium text-gray-900"
              >
                shop
              </a>
              <svg
                width={16}
                height={20}
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li className="text-sm">
            <a
              href="/"
              aria-current="page"
              className="font-medium text-gray-500 hover:text-gray-600"
            >
              shop
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                width={16}
                height={20}
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
              <a href={""} className="mr-2 text-sm font-medium text-gray-900">
                Sản phẩm 1
              </a>
            </div>
          </li>
        </ol>
      </nav>
    )
}

export default Breakcrumb