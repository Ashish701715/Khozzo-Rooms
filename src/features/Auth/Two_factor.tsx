import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { twoFactorAuthenticate } from "@/utils/api"
import { Button, InputOtp } from "@nextui-org/react"
import { useLocation, useNavigate, useParams } from "react-router"
import { setLocalStorage } from "@/common/localStore"
export default function TwoFactorAuthPage() {

    const [ErrorMessage, setErrorMessage] = useState<string>('');
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const clientSecret = queryParams.get('client_secret');
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [formData, setFormData] = React.useState<{ otp: string, client_id: string }>({
        otp: '',
        client_id: clientSecret || '',
    });

    const route = useNavigate();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleForm_submission = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('')
        try {
            const response = await twoFactorAuthenticate(formData);
            if (response?.status === false) {
                setErrorMessage(response?.message)
            } else {
                setLocalStorage('jwt', response?.jwt);
                setLocalStorage('clientName', response?.infomation?.ClientName);
                setLocalStorage('clientEmail', response?.infomation?.Email);
                setLocalStorage('sessionId', response?.infomation?.sessionID);
                route('/dashboard/admin')
            }
            setIsLoading(false);
        } catch (Error: any) {
            console.error(Error?.message)
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-[450px] bg-white rounded-[30px]">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Two-Factor Authentication</CardTitle>
                    <CardDescription className="text-center">
                        Enter the 6-digit code from your authenticator app
                    </CardDescription>
                </CardHeader>
                <div className="flex justify-center">
                    <form onSubmit={handleForm_submission}>
                        <CardContent>

                            <InputOtp
                                id="verificationCode"
                                value={formData.otp}
                                onChange={handleChange}
                                isRequired
                                aria-label="OTP input field"
                                length={6}
                                name="otp"
                                placeholder="Enter code"
                                errorMessage="Error while validating"
                                validationBehavior="native"
                            />


                        </CardContent>
                        <CardFooter>
                            <Button isLoading={isLoading} type="submit" className="w-full rounded-[5px] bg-blue-600" disabled={isLoading} style={{ color: 'white' }}>
                                {isLoading ? "Process..." : "VERIFY"}
                            </Button>
                        </CardFooter>
                    </form>
                </div>
                <div className="text-center ml-5">
                    <span className="text-red-400">{ErrorMessage}</span>
                </div>
                <div className="text-center mt-2 mb-3">
                    <a href="#" className="text-sm text-blue-600 hover:underline">
                        Didn't receive a code?
                    </a>
                </div>


            </Card>
        </div>
    )
}

