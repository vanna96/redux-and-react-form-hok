import React from "react";
import Lottie from "react-lottie-player";
import loadingJson from '@/assets/loading2.json';

export const Loading: React.FC = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh', // Set the minimum height of the container to 100% of the viewport height
                backgroundColor: '#f0f0f0', // Optional: Add background color for better visibility
            }}
        >
            <div style={{ width: '250px', height: '250px' }}>
                <Lottie
                    loop
                    animationData={loadingJson}
                    play
                    style={{ width: '100%', height: '100%' }} // Set animation container size to 100% of parent
                />
            </div>
        </div>
    );
}
