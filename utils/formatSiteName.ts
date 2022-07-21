export function formatSiteName(site: string): string {
  if(!site || site.length == 0) return '';

  const siteFormats = [
    {
      name: `game_reactor`,
      formattedName: `Game Reactor Suomi`,
    },
    {
      name: `konsolifin`,
      formattedName: `KonsoliFIN`,
    },
    {
      name: `muropaketti`,
      formattedName: `Muropaketti`,
    },
    {
      name: `game_reality`,
      formattedName: `GameReality`,
    },
    {
      name: `respawn`,
      formattedName: `Respawn`,
    },
    {
      name: `live_gamers`,
      formattedName: `Livegamers`,
    },
  ];

  const foundItem = siteFormats.find((t) => t.name === site);
  return !!foundItem
    ? foundItem.formattedName
    : `${site.charAt(0).toUpperCase()}${site.slice(1)}`;
}
