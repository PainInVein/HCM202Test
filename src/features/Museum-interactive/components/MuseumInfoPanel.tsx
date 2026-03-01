import { useEffect, useState } from 'react';

interface MuseumInfoPanelProps {
    visible: boolean;
}

/**
 * Cinematic game-style HUD panel — appears when approaching the museum.
 */
export const MuseumInfoPanel = ({ visible }: MuseumInfoPanelProps) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (visible) {
            requestAnimationFrame(() => setShow(true));
        } else {
            setShow(false);
        }
    }, [visible]);

    if (!visible) return null;

    return (
        <>
            <style>{cssAnimation}</style>
            <div className={`museum-panel ${show ? 'museum-panel--visible' : ''}`}>
                {/* Gold top accent */}
                <div className="museum-panel__accent" />

                {/* Image banner */}
                <div className="museum-panel__banner">
                    <img
                        src="https://bvhttdl.mediacdn.vn/291773308735864832/2024/5/2/du-khach-xuc-dong-khi-xem-buc-tranh-toan-canh-tai-hien-chien-dich-dien-bien-phu-lich-su-11-17143754002681167801204-1714615288646-17146152888932063091096.jpg"
                        alt="Bảo tàng Chiến thắng lịch sử Điện Biên Phủ"
                    />
                    <div className="museum-panel__banner-overlay">
                        <span className="museum-panel__badge">🏛️ DI TÍCH QUỐC GIA</span>
                    </div>
                </div>

                {/* Content */}
                <div className="museum-panel__content">
                    <h2 className="museum-panel__title">
                        Bảo tàng Chiến thắng<br />Điện Biên Phủ
                    </h2>
                    <p className="museum-panel__location">
                        📍 Mường Thanh, TP. Điện Biên Phủ
                    </p>
                    <p className="museum-panel__desc">
                        Khánh thành <strong>5/5/2014</strong>, kiến trúc hình mũ nan ngụy trang
                        của chiến sĩ Điện Biên. Sở hữu bức tranh panorama lớn nhất Đông Nam Á.
                    </p>

                    {/* Stats */}
                    <div className="museum-panel__stats">
                        <div className="museum-panel__stat">
                            <span className="museum-panel__stat-value">22.000</span>
                            <span className="museum-panel__stat-unit">m² diện tích</span>
                        </div>
                        <div className="museum-panel__stat">
                            <span className="museum-panel__stat-value">1.000+</span>
                            <span className="museum-panel__stat-unit">hiện vật</span>
                        </div>
                        <div className="museum-panel__stat">
                            <span className="museum-panel__stat-value">3.225</span>
                            <span className="museum-panel__stat-unit">m² panorama</span>
                        </div>
                    </div>
                </div>

                {/* Action bar */}
                <div className="museum-panel__action">
                    <div className="museum-panel__key">F</div>
                    <span className="museum-panel__action-text">Vào tham quan bảo tàng</span>
                </div>
            </div>
        </>
    );
};

const cssAnimation = `
  .museum-panel {
    position: fixed;
    bottom: 32px;
    left: 32px;
    z-index: 90;
    pointer-events: none;
    width: 380px;
    border-radius: 16px;
    overflow: hidden;
    background: linear-gradient(170deg, rgba(12,12,16,0.92) 0%, rgba(20,18,14,0.95) 100%);
    border: 1px solid rgba(212,175,55,0.15);
    box-shadow:
      0 24px 64px rgba(0,0,0,0.7),
      0 0 0 1px rgba(0,0,0,0.3),
      inset 0 1px 0 rgba(255,255,255,0.04);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    opacity: 0;
    transform: translateY(24px) scale(0.96);
    transition: opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1);
    font-family: 'Inter', -apple-system, sans-serif;
  }

  .museum-panel--visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .museum-panel__accent {
    height: 3px;
    background: linear-gradient(90deg, #c49b28, #f0d060, #c49b28);
    box-shadow: 0 0 12px rgba(212,175,55,0.4);
  }

  .museum-panel__banner {
    position: relative;
    width: 100%;
    height: 160px;
    overflow: hidden;
  }

  .museum-panel__banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: brightness(0.85) contrast(1.1);
  }

  .museum-panel__banner-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 40%, rgba(12,12,16,0.95) 100%);
    display: flex;
    align-items: flex-end;
    padding: 12px 16px;
  }

  .museum-panel__badge {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: rgba(240,208,96,0.9);
    background: rgba(212,175,55,0.12);
    border: 1px solid rgba(212,175,55,0.2);
    padding: 4px 10px;
    border-radius: 4px;
    backdrop-filter: blur(8px);
  }

  .museum-panel__content {
    padding: 16px 20px 14px;
  }

  .museum-panel__title {
    margin: 0 0 6px;
    font-size: 18px;
    font-weight: 800;
    line-height: 1.25;
    letter-spacing: 0.2px;
    background: linear-gradient(135deg, #f0d060, #d4af37);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .museum-panel__location {
    margin: 0 0 10px;
    font-size: 11.5px;
    color: rgba(255,255,255,0.4);
  }

  .museum-panel__desc {
    margin: 0;
    font-size: 12.5px;
    line-height: 1.6;
    color: rgba(255,255,255,0.6);
  }

  .museum-panel__desc strong {
    color: rgba(255,255,255,0.85);
    font-weight: 600;
  }

  .museum-panel__stats {
    display: flex;
    gap: 0;
    margin-top: 14px;
    border-top: 1px solid rgba(255,255,255,0.06);
    padding-top: 12px;
  }

  .museum-panel__stat {
    flex: 1;
    text-align: center;
    position: relative;
  }

  .museum-panel__stat:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 2px;
    bottom: 2px;
    width: 1px;
    background: rgba(255,255,255,0.06);
  }

  .museum-panel__stat-value {
    display: block;
    font-size: 16px;
    font-weight: 800;
    color: #f0d060;
    line-height: 1;
  }

  .museum-panel__stat-unit {
    display: block;
    font-size: 9.5px;
    color: rgba(255,255,255,0.3);
    margin-top: 4px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 500;
  }

  .museum-panel__action {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px 20px;
    background: rgba(212,175,55,0.04);
    border-top: 1px solid rgba(212,175,55,0.1);
  }

  .museum-panel__key {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 7px;
    background: linear-gradient(145deg, #f0d060, #c49b28);
    color: #111;
    font-size: 14px;
    font-weight: 900;
    box-shadow: 0 2px 8px rgba(212,175,55,0.35), inset 0 1px 0 rgba(255,255,255,0.2);
    animation: keyPulse 2s ease-in-out infinite;
  }

  .museum-panel__action-text {
    font-size: 13px;
    font-weight: 500;
    color: rgba(255,255,255,0.55);
    letter-spacing: 0.2px;
  }

  @keyframes keyPulse {
    0%, 100% { box-shadow: 0 2px 8px rgba(212,175,55,0.35); }
    50% { box-shadow: 0 2px 16px rgba(212,175,55,0.6), 0 0 24px rgba(212,175,55,0.2); }
  }
`;
