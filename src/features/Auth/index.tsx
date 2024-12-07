"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NavLink } from "react-router"
import Google_svg from '/svg/google.svg';
import { google_login } from "@/utils/api"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }
    
    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={onSubmit}>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email" className="flex justify-start">Email</Label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password" className="flex justify-start">Password</Label>
                        <Input
                            id="password"
                            placeholder="Enter your password"
                            type="password"
                            autoCapitalize="none"
                            autoComplete="current-password"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>


                    <Button  className="text-white" style={{color:'white'}}>
                        Sign In with Email
                    </Button>

                    <div className="grid gap-4">
                        <Button type="button" variant="outline" onClick={google_login}>
                            <img src={Google_svg} alt="google-auth-svg" width={20} />
                            Sign In with Google
                        </Button>
                    </div>
                </div>
            </form>
            <div className="flex flex-col space-y-2 text-center text-sm">
                <NavLink to="/forgot-password" className="text-muted-foreground hover:underline">
                    Forgot your password?
                </NavLink>
                <span className="text-muted-foreground">
                    Don't have an account?{" "}
                    <NavLink to="/signup" className="text-primary hover:underline">
                        Sign up
                    </NavLink>
                </span>
            </div>
        </div>
    )
}

