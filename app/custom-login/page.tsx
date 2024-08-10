"use client";

import LoginButton, { Providers } from "@/components/login/login-button";

export default function Page() {
    return (
        <div className={"flex items-center justify-center h-full w-full"}>
            <LoginButton provider={Providers.GOOGLE} colorCode={"#fbbc05"} />
        </div>
    );
}
