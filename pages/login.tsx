import { login } from "@/store/reducers/user";
import { server } from "@/utils/server";
import { postData } from "@/utils/services";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch()
  
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    try {
      const res = await postData(`${server}/api/login`, loginData);
      
      if (res.status == true) {
        dispatch(login(loginData))
        router.push('/')
      }

      // Add any logic here based on the response, e.g., redirect the user on successful login
    } catch (error) {
      console.error("An error occurred during login:", error);
      // Handle error scenarios
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <Link
        href={"/shop"}
        className="flex font-semibold text-indigo-600 text-sm"
      >
        <svg
          className="fill-current mr-2 text-indigo-600 w-4"
          viewBox="0 0 448 512"
        >
          <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
        </svg>
        Quay lại
      </Link>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          width={300}
          height={300}
          className="mx-auto h-10 w-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6ocdE_RrSSpR3MSo5yHdYa67Jc7rihLWwS4VBvzhiGBkiQ9Vg9ZGmJtLdEYYgq30JEg&usqp=CAU"
          alt=""
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Đăng nhập
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                placeholder="abc@gmail.com"
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mật khẩu
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Đăng nhập
            </button>
          </div>
        </form>

        <div>
          <p className=" text-center font-light text-xs text-gray-500 my-4">
            Đăng nhập bằng cách khác
          </p>
          <div className=" flex ">
            <div className=" w-1/2 mr-2">
              <button
                type="submit"
                className="flex border-2 w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-gray shadow-sm hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Facebook
              </button>
            </div>
            <div className=" w-1/2">
              <button
                type="submit"
                className="flex w-full border-2 justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-gray shadow-sm hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Google
              </button>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Bạn chưa có tài khoản?{" "}
          <Link
            href="/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Đăng kí tại đây
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
