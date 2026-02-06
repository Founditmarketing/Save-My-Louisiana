import React, { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
    images: string[];
    initialIndex: number;
    isOpen: boolean;
    onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ images, initialIndex, isOpen, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    // Sync internal state when opened
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
        }
    }, [isOpen, initialIndex]);

    // Navigation handlers
    const handlePrev = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    const handleNext = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    // Keyboard support
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        // Prevent scrolling behind lightbox
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose, handlePrev, handleNext]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300"
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-[110]"
                aria-label="Close lightbox"
            >
                <X size={32} />
            </button>

            {/* Navigation Buttons - Only show if multiple images */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors p-4 rounded-full hover:bg-white/10 z-[110]"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={40} />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors p-4 rounded-full hover:bg-white/10 z-[110]"
                        aria-label="Next image"
                    >
                        <ChevronRight size={40} />
                    </button>
                </>
            )}

            {/* Main Image Container */}
            <div
                className="relative max-w-7xl w-full h-full max-h-screen p-4 md:p-12 flex items-center justify-center"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image area
            >
                <img
                    src={images[currentIndex]}
                    alt={`Gallery image ${currentIndex + 1}`}
                    className="max-w-full max-h-full object-contain shadow-2xl rounded-sm select-none"
                />

                {/* Image Counter */}
                {images.length > 1 && (
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/50 text-sm font-medium tracking-widest uppercase">
                        {currentIndex + 1} / {images.length}
                    </div>
                )}
            </div>
        </div>
    );
};
