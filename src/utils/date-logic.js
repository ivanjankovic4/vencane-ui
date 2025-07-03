// Fajl: src/utils/date-logic.js

function getOrthodoxEaster(year) {
  const a = year % 4;
  const b = year % 7;
  const c = year % 19;
  const d = (19 * c + 15) % 30;
  const e = (2 * a + 4 * b - d + 34) % 7;
  const month = Math.floor((d + e + 114) / 31);
  const day = ((d + e + 114) % 31) + 1;
  const easterDate = new Date(year, month - 1, day);
  easterDate.setDate(easterDate.getDate() + 13);
  return easterDate;
}

/**
 * Funkcija koja pronalazi sledeću proslavu Trojica (Duhovski ponedeljak)
 * @returns {Date} - Vraća Date objekat za sledeći Duhovski ponedeljak.
 */
export function getNextTrojiceMonday() {
  const danas = new Date();
  const trenutnaGodina = danas.getFullYear();

  let vaskrs = getOrthodoxEaster(trenutnaGodina);
  let trojicePonedeljak = new Date(vaskrs);
  trojicePonedeljak.setDate(vaskrs.getDate() + 50);

  if (trojicePonedeljak < danas) {
    vaskrs = getOrthodoxEaster(trenutnaGodina + 1);
    trojicePonedeljak = new Date(vaskrs);
    trojicePonedeljak.setDate(vaskrs.getDate() + 50);
  }

  return trojicePonedeljak;
}