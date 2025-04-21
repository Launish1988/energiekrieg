/* scripts/generateCards.ts
 * -------------------------------------------------------------
 *  Erstellt src/lib/cards.ts mit allen 240 Classic‑Karten
 *  (Stats/Effekte 1:1, aber Fantasienamen + Platzhalter‑Bilder)
 * ------------------------------------------------------------- */
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

interface HsCard {
  id: number;
  name: string;
  cardClass: string;
  rarity?: string;
  cost: number;
  type: string;
  attack?: number;
  health?: number;
  text?: string;
  mechanics?: { name: string }[];
  collectible?: 0 | 1;
}

export interface CardData {
  id: string;
  name: string;
  cost: number;
  attack: number;
  health: number;
  description: string;
  image: string;
  class: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  mechanics?: string[];
}

const OUT = path.resolve("lib/cards.ts");
const HS_JSON =
  "https://api.hearthstonejson.com/v1/25770/enUS/cards.collectible.json"; // Classic Patch 25770

async function main() {
  console.log("Lade Hearthstone‑Daten …");
  const res = await fetch(HS_JSON);
  if (!res.ok) throw new Error("Download fehlgeschlagen");
  const all: HsCard[] = await res.json();

  // Classic‑Set herausfiltern
  const classic = all.filter((c) => c.collectible && c.set === "CORE");
  if (classic.length !== 240)
    console.warn(`Classic‑Karten gefunden: ${classic.length} (erwartet 240)`);

  // Fantasienamen laden
  const nameMap: string[] = JSON.parse(
    fs.readFileSync("scripts/nameMap.json", "utf8"),
  );
  if (nameMap.length < classic.length)
    throw new Error("nameMap.json hat zu wenig Einträge");

  const cards: CardData[] = classic.map((c, idx) => ({
    id: idx.toString().padStart(3, "0"),
    name: nameMap[idx],
    cost: c.cost ?? 0,
    attack: c.attack ?? 0,
    health: c.health ?? 0,
    description: (c.text ?? "").replace(/<[^>]+>/g, ""),
    image: `/cards/${idx.toString().padStart(3, "0")}.jpg`,
    class: mapClass(c.cardClass),
    rarity: mapRarity(c.rarity),
    mechanics: c.mechanics?.map((m) => mapMech(m.name)),
  }));

  const banner =
    "// ⚡ AUTOGENERIERT – NICHT BEARBEITEN (run GitHub Action to update)\\n";
  const out = `${banner}
export type CardData = ${typeLiteral()};

export const allCards: CardData[] = ${JSON.stringify(cards, null, 2)};
`;
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, out, "utf8");
  console.log(`✓ src/lib/cards.ts mit ${cards.length} Karten erstellt`);
}

function mapClass(hs: string) {
  return (
    {
      DRUID: "Naturrufer",
      HUNTER: "Waldhüter",
      MAGE: "Elementarwirker",
      PALADIN: "Lichtwächter",
      PRIEST: "Schattenwirker",
      ROGUE: "Klingenläufer",
      SHAMAN: "Sturmbeschwörer",
      WARLOCK: "Seelenmeister",
      WARRIOR: "Klingenmeister",
      NEUTRAL: "neutral",
    }[hs] || hs.toLowerCase()
  );
}

function mapRarity(r = "COMMON") {
  return (
    { COMMON: "common", RARE: "rare", EPIC: "epic", LEGENDARY: "legendary" }[r]
  );
}

function mapMech(name: string) {
  return (
    {
      TAUNT: "taunt",
      CHARGE: "rush",
      RUSH: "rush",
      SPELLPOWER: "spellpower",
      DEATHRATTLE: "deathrattle",
      BATTLECRY: "battlecry",
      WINDFURY: "windfury",
      STEALTH: "stealth",
      DIVINE_SHIELD: "divineshield",
      FREEZE: "freeze",
      LIFESTEAL: "lifesteal",
    }[name] || name.toLowerCase()
  );
}

function typeLiteral() {
  return `{ id: string; name: string; cost: number; attack: number; health: number; description: string; image: string; class: string; rarity: 'common' | 'rare' | 'epic' | 'legendary'; mechanics?: string[] }`;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
