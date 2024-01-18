import { useState } from "react";
import {
  Dialog,
  Disclosure,
  Popover,
  Transition,
  Menu,
} from "@headlessui/react";
import {
  Bars3Icon,
  TableCellsIcon,
  ArrowUturnDownIcon,
  CalculatorIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, ShoppingBagIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const products = [
  {
    name: "Ghế công thái học",
    description:
      "Cung cấp sự thoải mái và hỗ trợ cho người ngồi trong quá trình làm việc hoặc học tập.",
    href: "#",
    icon: TableCellsIcon,
  },
  {
    name: "Bàn nâng hạ",
    description:
      "Là một sản phẩm được thiết kế để cung cấp giải pháp nâng cao trong quá trình làm việc",
    href: "#",
    icon: ArrowUturnDownIcon,
  },
  {
    name: "Bàn phím",
    description:
      "là một sản phẩm độc đáo được tùy chỉnh để đáp ứng nhu cầu và sở thích của người sử dụng",
    href: "#",
    icon: CalculatorIcon,
  },
  {
    name: "Phụ kiện",
    description: "Các sản phẩm khác của nhà ByteCrafters",
    href: "#",
    icon: SquaresPlusIcon,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems } = useSelector((state: RootState) => state.cart);

  return (
    <header className="bg-white fixed z-10 w-[-webkit-fill-available] shadow-sm ">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">ByteCrafters</span>
            <Image
              width={300}
              height={300}
              className="h-8 w-auto"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6ocdE_RrSSpR3MSo5yHdYa67Jc7rihLWwS4VBvzhiGBkiQ9Vg9ZGmJtLdEYYgq30JEg&usqp=CAU"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            href={`/shop`}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Shop
          </Link>

          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Về ByteCrafters
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Blog
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Liên hệ
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href={"/cart"}>
            <div className="z-50 relative inline-block group w-7">
              <ShoppingBagIcon className="w-5 h-5" />
              <span className="absolute top-0 left-3 bg-red-500 text-white px-1 rounded-full text-xs">
                {cartItems.length > 0 && (
                  <span className="btn-cart__count">{cartItems.length}</span>
                )}
              </span>
            </div>
          </Link>

          <Link
            href="/login"
            className="text-sm font-semibold leading-6 ml-3 text-gray-900"
          >
            Đăng kí <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                width={300}
                height={300}
                className="h-8 w-auto"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6ocdE_RrSSpR3MSo5yHdYa67Jc7rihLWwS4VBvzhiGBkiQ9Vg9ZGmJtLdEYYgq30JEg&usqp=CAU"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Sản phẩm
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Về ByteCrafters
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Liên hệ
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Đăng kí
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
