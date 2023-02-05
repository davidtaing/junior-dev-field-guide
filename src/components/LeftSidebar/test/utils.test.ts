import { Sidebar } from "../../../config";
import { getSidebarItems } from "../utils";

it("returns an array", () => {
  const input: Sidebar = {
    Heading1: [{ text: "Item1", link: "/item1" }],
  };

  const sidebarItems = getSidebarItems(input);

  expect(sidebarItems).toBeInstanceOf(Array);
});

it("returns two groups when there are two headings", () => {
  const input: Sidebar = {
    Heading1: [{ text: "Item1", link: "/item1" }],
    Heading2: [{ text: "Item2", link: "/item2" }],
  };

  const sidebarItems = getSidebarItems(input);

  expect(sidebarItems).toHaveLength(2);
});

it("throws error when empty object is provided", () => {
  const input: Sidebar = {};

  expect(() => getSidebarItems(input)).toThrow();
});

it("correctly returns headings and their group of SidebarItems", () => {
  const input: Sidebar = {
    Heading1: [{ text: "Item1", link: "/item1" }],
    Heading2: [{ text: "Item2", link: "/item2" }],
  };

  const sidebarItems = getSidebarItems(input);

  const expected = [
    ["Heading1", [{ text: "Item1", link: "/item1" }]],
    ["Heading2", [{ text: "Item2", link: "/item2" }]],
  ];

  expect(sidebarItems).toEqual(expected);
});
