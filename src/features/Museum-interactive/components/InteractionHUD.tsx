import type { CSSProperties } from 'react';

interface InteractionHUDProps {
    visible: boolean;
    paintingTitle?: string;
}

/**
 * Shows "Press F to view" prompt when near a painting.
 * Rendered as an HTML overlay on top of the 3D canvas.
 */
export const InteractionHUD = ({ visible, paintingTitle }: InteractionHUDProps) => {
    if (!visible) return null;

    return (
        <div style={styles.container}>
            <div style={styles.prompt}>
                <span style={styles.keyBadge}>F</span>
                <span style={styles.text}>
                    {paintingTitle ? `Xem: ${paintingTitle}` : 'Nhấn F để xem tranh'}
                </span>
            </div>
        </div>
    );
};

const styles: Record<string, CSSProperties> = {
    container: {
        position: 'fixed',
        bottom: '120px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        pointerEvents: 'none',
    },
    prompt: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 20px',
        borderRadius: '12px',
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 204, 0, 0.3)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
        animation: 'fadeInUp 0.3s ease-out',
    },
    keyBadge: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32px',
        height: '32px',
        borderRadius: '6px',
        background: 'linear-gradient(135deg, #f0c040, #e0a020)',
        color: '#1a1a1a',
        fontSize: '16px',
        fontWeight: '800',
        boxShadow: '0 2px 8px rgba(240,192,64,0.4)',
    },
    text: {
        color: '#ffffff',
        fontSize: '15px',
        fontWeight: '500',
        fontFamily: "'Inter', sans-serif",
        maxWidth: '280px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap' as const,
    },
};
