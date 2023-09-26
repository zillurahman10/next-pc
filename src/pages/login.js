import { Button } from 'antd';
import React from 'react';
import { signIn } from "next-auth/react";

const Login = () => {
    return (
        <div class="flex h-screen bg-slate-900">
            <div class="m-auto">
                <button onClick={() => signIn("google", {
                    callbackUrl: "https://localhost:3000/"
                })}
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Sign In with GOOGLE
                </button>
            </div>
        </div>
    );
};

export default Login;