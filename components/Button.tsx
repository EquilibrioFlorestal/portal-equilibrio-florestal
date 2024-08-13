import Link from "next/link";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface Props {
    title: string,
    url: string,
    description?: string,
    tooltipSide?: "left" | "right" | "bottom" | "top"
}

export default function PortalButton({ title, url, description, tooltipSide = "right" }: Props) {
    return (
        <>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href={url} className="w-full">
                            <Button className="w-full" variant={"accent"}>
                                {title}
                            </Button>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side={tooltipSide}>
                        {description}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </>
    )
}