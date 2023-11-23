import EnumSites from "./enums/EnumSites";

export const HTP_PREFIX = 'http://';

export default function CreateLink(domain: EnumSites, path: string): string {
  const link = String(HTP_PREFIX + domain + path);
  return link;
}