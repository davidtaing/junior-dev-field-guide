export type SidebarItem = {
  text: string;
  link: string;
};

export type Sidebar = {
  [key: string]: Array<SidebarItem>;
};

export const SIDEBAR: Sidebar = {
  "Open Source": [
    { text: "Getting Started", link: "/open-source/getting-started" },
  ],
};
