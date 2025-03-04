import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/component/ui/button"
import { Input } from "@/component/ui/input"
import { Label } from "@/component/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/component/ui/tabs"
import { NavLink, useNavigate } from "react-router"
import Google_svg from '/svg/google.svg';
import { Danger } from '../../common/Alert';
import { apiCalling, googleLogin } from "@/utils/api"
import axios from "axios"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const route = useNavigate();
    const [Error, setError] = React.useState([]);
    const [formData , setFormData] = React.useState({
        email:"",
        password:""
    })
    async function onSubmit(event: any) {
        event.preventDefault()

        try {
            setIsLoading(true)
       
            const {data} = await axios.post('http://localhost:3000/v1/user/login', formData);
            if (data.success === 0) {
                setIsLoading(false)
                
            } else {
                setIsLoading(false)
                route(`/auth/two-factor?client_secret=${encodeURIComponent(data?.user?.id)}&email=${encodeURIComponent(data?.user?.email)}`);

            }
        } catch (error) {
            console.error(error)
            setIsLoading(false)
        }
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            {Error.length > 0 && (
                <Danger>
                    {Error}
                </Danger>
            )}

            <form onSubmit={onSubmit}>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email" className="flex justify-start">Email</Label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            name="username"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password" className="flex justify-start">Password</Label>
                        <Input
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            placeholder="Enter your password"
                            type="password"
                            autoCapitalize="none"
                            autoComplete="current-password"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>


                    <Button disabled={isLoading} className="text-white" style={{ color: 'white' }}>
                        {isLoading ? 'Authenticate...' : 'Sign In with Email'}
                    </Button>

                    <div className="grid gap-4">
                        <Button disabled={isLoading} type="button" variant="outline">
                            <img src={Google_svg} alt="google-auth-svg" width={20} />
                            Sign In with Google
                        </Button>
                    </div>
                </div>
            </form>
            <div className="flex flex-col space-y-2 text-center text-sm">
                <NavLink to="" className="text-muted-foreground hover:underline">
                    Forgot your password?
                </NavLink>
                <span className="text-muted-foreground">
                    Don't have an account?{" "}
                    <NavLink to="" className="text-primary hover:underline">
                        Sign up
                    </NavLink>
                </span>
            </div>
        </div>
    )
}

