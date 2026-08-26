import React, { useState } from 'react';
import { Facebook, Twitter, Mail, Link2, Check, Share2 } from 'lucide-react';

interface ShareButtonsProps {
    /** Absolute URL of the page being shared. */
    url: string;
    title: string;
    /** Compact renders a single share icon (native share sheet, or copy-link fallback). */
    compact?: boolean;
    className?: string;
}

const openPopup = (href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer,width=600,height=500');
};

export const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title, compact = false, className = '' }) => {
    const [copied, setCopied] = useState(false);

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(url);
        } catch {
            const el = document.createElement('textarea');
            el.value = url;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const nativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({ title, url });
                return;
            } catch {
                // user dismissed the share sheet - fall through to copy
            }
        }
        copyLink();
    };

    if (compact) {
        return (
            <button
                onClick={nativeShare}
                className={`inline-flex items-center gap-1.5 text-gray-400 hover:text-brand-blue transition-colors font-bold uppercase tracking-widest text-[10px] ${className}`}
                aria-label={`Share ${title}`}
            >
                {copied ? <Check size={14} className="text-green-600" /> : <Share2 size={14} />}
                {copied ? 'Link Copied' : 'Share'}
            </button>
        );
    }

    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    return (
        <div className={`flex flex-wrap items-center gap-3 ${className}`}>
            <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mr-1">Share This</span>
            <button
                onClick={() => openPopup(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`)}
                className="bg-[#1877F2] text-white p-2.5 rounded-full hover:scale-110 transition-transform shadow-md"
                aria-label="Share on Facebook"
            >
                <Facebook size={16} />
            </button>
            <button
                onClick={() => openPopup(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`)}
                className="bg-black text-white p-2.5 rounded-full hover:scale-110 transition-transform shadow-md"
                aria-label="Share on X"
            >
                <Twitter size={16} />
            </button>
            <a
                href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
                className="bg-gray-600 text-white p-2.5 rounded-full hover:scale-110 transition-transform shadow-md"
                aria-label="Share by email"
            >
                <Mail size={16} />
            </a>
            <button
                onClick={copyLink}
                className={`p-2.5 rounded-full hover:scale-110 transition-all shadow-md ${copied ? 'bg-green-600 text-white' : 'bg-brand-blue text-white'}`}
                aria-label="Copy link"
            >
                {copied ? <Check size={16} /> : <Link2 size={16} />}
            </button>
            {copied && <span className="text-green-600 font-bold text-xs">Link copied!</span>}
        </div>
    );
};
