// src/components/ErrorBoundary.tsx

import React, { Component, ReactNode } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, Home, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: React.ErrorInfo | null;
}

interface ErrorBoundaryProps {
    children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        // Update state to indicate an error has occurred
        return {
            hasError: true,
            error: error,
            errorInfo: null,
        };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // You can log the error to an error reporting service
        console.error('ErrorBoundary caught an error', error, errorInfo);
        this.setState({
            errorInfo: errorInfo,
        });
    }

    resetError = () => {
        // Reset error boundary state
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
        });
    };

    render() {
        if (this.state.hasError) {
            // Customize the UI to display a fallback UI
            return (
                <div className="flex items-center justify-center min-h-screen bg-background">
                    <Card className="w-[50%]">
                        <CardHeader>
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-destructive/10 text-destructive mb-4">
                                <AlertTriangle size={24} />
                            </div>
                            <CardTitle className="text-2xl font-bold text-center">Oops! Something went wrong</CardTitle>
                            <CardDescription className="text-center">
                                We apologize for the inconvenience. An unexpected error has occurred.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="bg-muted p-3 rounded-md text-sm">
                                <strong>Error:</strong> {this.state.error?.message}
                                {this.state.errorInfo && (
                                    <div className="mt-2">
                                        <strong>Details:</strong> {this.state.errorInfo.componentStack}
                                    </div>
                                )}
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="outline" onClick={this.resetError}>
                                <RotateCcw className="mr-2 h-4 w-4" />
                                Try again
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
