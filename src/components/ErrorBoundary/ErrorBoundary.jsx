import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor() {
        super();

        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <img
                        // className="img-fluid"
                        style={{ width: '70%', height: '100%' }}
                        src={`${process.env.PUBLIC_URL}/assests/images/error-img.jpg`}
                        alt="404"
                    />
                    <h2> Something went wrong</h2>
                </div>
            );
        }

        return children;
    }
}
