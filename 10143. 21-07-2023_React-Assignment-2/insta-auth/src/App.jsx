import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import logo from "./assets/instagram.png";

function App() {
    const [signIn, setSignIn] = useState(true);

    const doSignUp = () => {
        setSignIn(!signIn);
    };

    return (
        <main className="flex justify-center items-center h-[100vh] font-sans">
            <div className="flex justify-between items-center flex-col gap-8 border-2 border-[rgb(137,136,115)] rounded-[10px] py-12 w-[25%]">
                <img className="w-[65%]" src={logo} alt="instagram.png" />
                <div className="flex justify-between items-center flex-col gap-2 w-[80%]">
                    {!signIn ? (
                        <>
                            <input
                                className="border-[1px] border-[rgb(137,136,115)] text-black placeholder:text-[rgb(137,136,115)] h-[32px] w-[100%] px-1 placeholder:px-3 placeholder:text-sm pb-[4px] "
                                type="text"
                                placeholder="Mobile Number or Email"
                            />
                            <input
                                className="border-[1px] border-[rgb(137,136,115)] text-black placeholder:text-[rgb(137,136,115)] h-[32px] w-[100%] px-1 placeholder:px-3 placeholder:text-sm pb-[4px] "
                                type="text"
                                placeholder="Full Name"
                            />
                        </>
                    ) : null}
                    <input
                        className="border-[1px] border-[rgb(137,136,115)] text-black placeholder:text-[rgb(137,136,115)] h-[32px] w-[100%] px-1 placeholder:px-3 placeholder:text-sm pb-[4px] "
                        type="text"
                        placeholder="Phone number, username or email"
                    />
                    <input
                        className="border-[1px] border-[rgb(137,136,115)] text-black placeholder:text-[rgb(137,136,115)] h-[32px] w-[100%] px-1 placeholder:px-3 placeholder:text-sm pb-[4px] "
                        type="password"
                        placeholder="Password"
                    />
                    <button className="h-[32px] px-[5px] bg-[rgb(76,181,249)] text-white rounded-[5px] w-[100%] text-sm">
                        {!signIn ? "Sign up" : "Sign in"}
                    </button>
                </div>
                <p>
                    {signIn ? "Dont have account?" : "Have an account?"}{" "}
                    {signIn ? (
                        <span
                            className="cursor-pointer text-[rgb(76,181,249)]"
                            onClick={doSignUp}
                        >
                            Sign up
                        </span>
                    ) : (
                        <span
                            className="cursor-pointer text-[rgb(76,181,249)]"
                            onClick={doSignUp}
                        >
                            Log in
                        </span>
                    )}
                </p>
            </div>
        </main>
    );
}

export default App;
