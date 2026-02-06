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
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 p-4"
            onClick={onClose}
        >
            {/* Top Close Button (Backup) */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-[110]"
                aria-label="Close lightbox"
            >
                <X size={32} />
            </button>

            <div
                className="flex items-center justify-center gap-4 md:gap-8 max-w-full max-h-full"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Prev Button - Now relative to flow */}
                {images.length > 1 && (
                    <button
                        onClick={handlePrev}
                        className="text-white/50 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 shrink-0"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={48} />
                    </button>
                )}

                {/* Main Image Container */}
                <div className="relative max-h-[85vh] max-w-[80vw]">
                    <img
                        src={images[currentIndex]}
                        alt={`Gallery image ${currentIndex + 1}`}
                        className="max-h-[85vh] max-w-full object-contain shadow-2xl rounded-sm select-none"
                    />

                    {/* Image Counter */}
                    {images.length > 1 && (
                        <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded text-white/70 text-xs font-medium tracking-widest uppercase backdrop-blur-sm">
                            {currentIndex + 1} / {images.length}
                        </div>
                    )}

                    {/* Bottom Right Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute -bottom-12 -right-0 md:-right-12 text-white/70 hover:text-white transition-colors p-2 flex items-center gap-1 group"
                        aria-label="Close lightbox"
                    >
                        <span className="text-sm font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
                        <X size={24} />
                    </button>
                </div>

                {/* Next Button - Now relative to flow */}
                {images.length > 1 && (
                    <button
                        onClick={handleNext}
                        className="text-white/50 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 shrink-0"
                        aria-label="Next image"
                    >
                        <ChevronRight size={48} />
                    </button>
                )}
            </div>
        </div>
    );
};
