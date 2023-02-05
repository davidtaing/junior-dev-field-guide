import { Sidebar, SidebarItem } from "../../config";

type SidebarHeadingGroup = [string, Array<SidebarItem>];

export const getSidebarItems = (
  sidebar: Sidebar
): Array<SidebarHeadingGroup> => {
  const result = Object.entries(sidebar);

  if (result.length === 0)
    throw new Error(
      "Sidebar Config is empty. Please check the file at /src/config.ts."
    );

  return result;
};
