"use client";

import { createClient } from "@/utils/supabase/client";
import LoginButton, { Providers } from "@/components/login/login-button";

export default function LoginButtons() {
    const supabase = createClient();

    return (
        <div>
            <LoginButton
                provider={Providers.GOOGLE}
                colorCode={"#fbbc05"}
                supabaseClient={supabase}
            >
                <div className={"h-4 w-4"}>
                    <img src="/google-logo.png" alt="Google Logo" />
                </div>
            </LoginButton>
        </div>
    );
}
