import { useEffect, type CSSProperties } from 'react';
import type { PaintingData } from '../data/exhibitionData';

interface PaintingModalProps {
    painting: PaintingData | null;
    onClose: () => void;
}

export const PaintingModal = ({ painting, onClose }: PaintingModalProps) => {
    // Close on Escape key
    useEffect(() => {
        if (!painting) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape' || e.key === 'f' || e.key === 'F') {
                e.preventDefault();
                e.stopPropagation();
                onClose();
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [painting, onClose]);

    if (!painting) return null;

    return (
        <div style={styles.overlay} onClick={onClose}>
            <div style={styles.container} onClick={(e) => e.stopPropagation()}>
                {/* Close button */}
                <button style={styles.closeBtn} onClick={onClose}>
                    ✕
                </button>

                {/* Layout: Image left, Description right */}
                <div style={styles.content}>
                    {/* Painting image */}
                    <div style={styles.imageContainer}>
                        <img
                            src={painting.imagePath}
                            alt={painting.title}
                            style={styles.image}
                        />
                    </div>

                    {/* Description panel */}
                    <div style={styles.descriptionPanel}>
                        <h2 style={styles.title}>{painting.title}</h2>
                        <div style={styles.divider}></div>
                        <p style={styles.description}>{painting.description}</p>
                        <div style={styles.hint}>
                            <span style={styles.keyBadge}>F</span> hoặc <span style={styles.keyBadge}>ESC</span> để đóng
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles: Record<string, CSSProperties> = {
    overlay: {
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.3s ease-out',
    },
    container: {
        position: 'relative',
        display: 'flex',
        maxWidth: '90vw',
        maxHeight: '85vh',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 25px 60px rgba(0,0,0,0.6), 0 0 40px rgba(255,200,50,0.1)',
        background: 'linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    },
    closeBtn: {
        position: 'absolute',
        top: '12px',
        right: '16px',
        zIndex: 10,
        background: 'rgba(255,255,255,0.1)',
        border: 'none',
        color: '#fff',
        fontSize: '20px',
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.2s',
    },
    content: {
        display: 'flex',
        flexDirection: 'row' as const,
        gap: '0',
        height: '100%',
    },
    imageContainer: {
        flex: '1 1 60%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0a0a',
        padding: '20px',
        minWidth: '0',
    },
    image: {
        maxWidth: '100%',
        maxHeight: '80vh',
        objectFit: 'contain' as const,
        borderRadius: '4px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
    },
    descriptionPanel: {
        flex: '1 1 40%',
        padding: '40px 32px',
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center',
        maxWidth: '420px',
        minWidth: '300px',
        overflowY: 'auto' as const,
    },
    title: {
        margin: '0 0 16px 0',
        fontSize: '24px',
        fontWeight: '700',
        color: '#f0c040',
        lineHeight: '1.3',
        fontFamily: "'Playfair Display', serif",
    },
    divider: {
        width: '60px',
        height: '3px',
        background: 'linear-gradient(90deg, #f0c040, transparent)',
        marginBottom: '20px',
        borderRadius: '2px',
    },
    description: {
        margin: '0 0 24px 0',
        fontSize: '15px',
        lineHeight: '1.8',
        color: '#d0d0d8',
        fontFamily: "'Inter', sans-serif",
    },
    hint: {
        marginTop: 'auto',
        fontSize: '13px',
        color: '#888',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
    },
    keyBadge: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '24px',
        height: '24px',
        borderRadius: '4px',
        background: 'rgba(255,255,255,0.15)',
        border: '1px solid rgba(255,255,255,0.25)',
        fontSize: '12px',
        fontWeight: '700',
        color: '#fff',
    },
};
