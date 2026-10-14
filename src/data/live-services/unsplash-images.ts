// Unsplash photos used for service inner pages (hero + cards), grouped by topic.
// Each page gets hero = first photo of its topic pool, cards = following photos (cycled). The topic pool is padded
// with general clinic photos so a page with 7 cards never repeats a photo.
const u = (id: string) => `https://images.unsplash.com/photo-${id}?q=80&w=1200&auto=format&fit=crop`;

const clinic = [
  '1629909613654-28e377c37b09', '1598256989800-fe5f95da9787', '1698749778813-ad5f2814e50f',
  '1777331903190-341a3dd0441b', '1588776814546-daab30f310ce', '1606811971618-4486d14f3f99',
  '1771442873038-dda05b6ca447', '1588776814546-1ffcf47267a5', '1606811841689-23dfddce3e95',
];

const topics: Record<string, string[]> = {
  implants: ['1593022356769-11f762e25ed9', '1787303856266-8c4f0b61ecf1', '1771442873035-474765b40ac6', '1777444270707-850bfe730c10', '1777445826358-f95518f49b44', '1600170311833-c2cf5280ce49', '1777793389944-f7165259a05c'],
  cosmetic: ['1677026010083-78ec7f1b84ed', '1654373535457-383a0a4d00f9', '1489278353717-f64c6ee8a4d2', '1769559893692-c6d0623bf8e4', '1670250492416-570b5b7343b1', '1664529845836-433c172142ca', '1663182234283-28941e7612da', '1660732205495-f65510d8180e'],
  aligners: ['1609840114035-3c981b782dfe', '1777793636393-a0fec488f3fb', '1564420228450-d9a5bc8d6565', '1777446899714-c26de766dffd', '1609840113929-b130355987e1', '1785860817740-c95735ba03b1'],
  kids: ['1758205307836-0829c799890b', '1758205308106-5760d0227cc7', '1609840113564-ab4aba4956c4'],
  hygiene: ['1777446523856-e7acffa844a7', '1607613009820-a29f7bb81c04', '1520013573795-38516d2661e4', '1606811971618-4486d14f3f99'],
  pain: ['1758600588830-1bbcc78d3500', '1758600432436-f8abdbf44bde', '1664529842504-5743d286ec1b', '1660732205525-eb180e4d29f8', '1758600436156-4a20b922bdd2', '1698749778813-ad5f2814e50f'],
  clinic: [],
};

function topicFor(slug: string): keyof typeof topics {
  if (/implant|missing-teeth|denture|bridge/.test(slug)) return 'implants';
  if (/whitening|veneer|laminate|makeover|uneven|cosmetic|bonding|tooth-colored/.test(slug)) return 'cosmetic';
  if (/invisalign|inisalign|brace|orth/.test(slug)) return 'aligners';
  if (/pediatric|child/.test(slug)) return 'kids';
  if (/preventive|hygiene/.test(slug)) return 'hygiene';
  if (/emergency|throbbing|pain/.test(slug)) return 'pain';
  return 'clinic';
}

export function unsplashPoolFor(slug: string): string[] {
  const pool = [...topics[topicFor(slug)], ...clinic];
  return Array.from(new Set(pool)).map(u);
}
