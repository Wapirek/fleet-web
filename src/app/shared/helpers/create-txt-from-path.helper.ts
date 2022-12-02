// tworzy nazwe pobrana z url, do utworzenia wlasciwego naglowka
export function CreateTxtFromPathHelper(url: string): string {

  // ustawiona nazwa ostatniej sciezki z url bez slasha i bez pierwszej litery
  let header = url.slice(url.toString().lastIndexOf('/') + 2, url.toString().length);

  // gotowa nazwa do przypisana
  return url[url.toString().lastIndexOf('/') + 1].toLocaleUpperCase() + header;
}
