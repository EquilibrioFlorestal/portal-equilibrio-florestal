"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Logo from "@/public/images/logo.png";
import LogoBranco from "@/public/images/logo-branco.png";

import ListButton from "@/components/ListButton";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {

    const useThemeDetector = () => {
        const getCurrentTheme = () => {
            if (typeof window !== 'undefined') {
                return window.matchMedia("(prefers-color-scheme: dark)").matches;
            }
            return false; // Valor padrão se o código estiver no servidor
        };

        const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme);

        useEffect(() => {
            // Verifica se está no cliente antes de usar o `window`
            if (typeof window !== 'undefined') {
                const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
                const mqListener = (e: { matches: boolean }) => {
                    setIsDarkTheme(e.matches);
                };

                darkThemeMq.addListener(mqListener);

                // Limpeza do listener quando o componente for desmontado
                return () => darkThemeMq.removeListener(mqListener);
            }
        }, []);

        return isDarkTheme;
    }
    
    const isDarkTheme = useThemeDetector();

    return (
        <>
            <div className="flex flex-col gap-4 min-h-screen items-center justify-center" style={{ backgroundImage: 'url(/images/background-4.svg)' }}>
                <Card className="w-full max-h-fit max-w-md min-h-60">
                    <CardHeader className="select-none p-3">
                        <Link href="https://equilibrioflorestal.com.br">
                            <Image src={isDarkTheme ? LogoBranco : Logo} alt="Equilibrio Florestal logo" className="rounded-md object-cover" priority />
                        </Link>
                    </CardHeader>
                    <CardContent className="pb-5">
                        <div>
                            <Separator className="mb-4" />
                            <ListButton />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
