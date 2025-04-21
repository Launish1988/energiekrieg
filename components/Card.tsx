import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

/**
 * Base‐Daten einer Karte. Halte diese Struktur synchron mit lib/cards.ts
 */
export interface CardData {
  id: string;
  name: string;
  cost: number;
  attack: number;
  health: number;
  description: string;
  image: string;
}

/**
 * Zusätzliche Props, die der Spiel‑State zur Laufzeit liefert.
 */
export interface CardProps extends CardData {
  /**
   * Wird aufgerufen, wenn der Spieler die Karte ausspielt.
   */
  onPlay?: (cardId: string) => void;
  /**
   * Ist true, wenn der Spieler aktuell genug Mana hat und Zugrecht besitzt.
   * Aktiviert visuelle Hervorhebung & Click‑Handler.
   */
  isPlayable?: boolean;
  /**
   * Optionaler Glow‑Effekt z. B. bei Battlecry‑Hinweis.
   */
  glow?: boolean;
}

/**
 * Eine einzelne spielbare Karte.
 *
 * * Verwendet **Tailwind CSS** für Stilierung
 * * Nutzt **Framer Motion** für Hover‑ / Tap‑Animationen
 */
const Card: React.FC<CardProps> = ({
  id,
  name,
  cost,
  attack,
  health,
  description,
  image,
  onPlay,
  isPlayable = false,
  glow = false,
}) => {
  const handleClick = () => {
    if (isPlayable && onPlay) onPlay(id);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        "relative flex flex-col items-center w-28 sm:w-32 select-none",
        isPlayable ? "cursor-pointer" : "cursor-not-allowed opacity-60",
        glow && "ring-4 ring-yellow-400",
      )}
      onClick={handleClick}
    >
      {/* Mana‑Kosten */}
      <div className="absolute top-1 left-1 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-blue-900 text-xs font-bold text-white shadow">
        {cost}
      </div>

      {/* Karten‑Bild */}
      <Image
        src={image}
        alt={name}
        width={200}
        height={280}
        priority
        className="rounded-md shadow-md"
      />

      {/* Name */}
      <div className="mt-1 px-1 text-center text-xs font-semibold text-slate-200 drop-shadow-sm">
        {name}
      </div>

      {/* Beschreibung */}
      <div className="mt-0.5 h-[34px] overflow-hidden px-1 text-center text-[10px] leading-tight text-slate-300">
        {description}
      </div>

      {/* Stats */}
      <div className="mt-1 flex w-full justify-between px-1 text-xs font-bold text-white">
        <span className="text-yellow-400">{attack}</span>
        <span className="text-red-500">{health}</span>
      </div>
    </motion.div>
  );
};

export default Card;
