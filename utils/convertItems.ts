export function convertItems(items: any) {
  return items.map((item: any) => {
    return {
      ...item,
      href: `/kooste/${item.slug}`
    };
  });
}
