import React, { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, X as CircleX } from "lucide-react";

interface DangerProps {
    children: React.ReactNode | React.ReactNode[];
    onClose?: () => void;
}

export const Danger: React.FC<DangerProps> = ({ children, onClose }) => {
    const [counter, setCounter] = useState(10);

    useEffect(() => {
        if (!children || (Array.isArray(children) && children.length === 0)) {
            return;
        }
        setCounter(10)
        const interval = setInterval(() => {
            setCounter((prevCounter) => {
                if (prevCounter <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prevCounter - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [children]);
    const isVisible = counter > 0 && !!children && (!Array.isArray(children) || children.length > 0);
    return (
        <>
            <Alert
                variant="destructive"
                className={`${isVisible ? 'block' : 'hidden '} flex flex-col space-y-2  transition-all duration-5000 `}
            >
                {onClose && (
                    <div className="flex justify-end">
                        <CircleX
                            className="cursor-pointer"
                            strokeWidth={1.25}
                            size={15}
                            color="red"
                            onClick={onClose}
                        />
                    </div>
                )}
                <AlertDescription className="text-red-600 ml-3">
                    {Array.isArray(children) ? (
                        <ul className="text-start list-disc">
                            {children.map((value: any, index: number) => (
                                <li key={index}>{value}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{children}</p>
                    )}
                    <span className="flex justify-end">{counter} sec</span>
                </AlertDescription>
            </Alert>
        </>
    );
};
