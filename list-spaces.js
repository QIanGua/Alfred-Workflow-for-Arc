#!/usr/bin/env osascript -l JavaScript

function run(args) {
  let browsers = "Arc";

  let browser = Application(browsers);
  browser.includeStandardAdditions = true;

  let windowCount = browser.windows.length;
  console.log("windownCount: ", windowCount);

  let windowIndex = browser.windows.index();
  console.log("windowIndex[0]:", windowIndex[0]);

  let windowName = browser.windows.name();
  console.log("windowIndex[0] name:", windowName[0]);

  let spaceCount = browser.windows.spaces.length;
  console.log("spaceCount: ", spaceCount);

  let spacesTitle = browser.windows.spaces.title();
  console.log("spacesTitle: ", spacesTitle);

  let spacesId = browser.windows.spaces.id();
  console.log("spacesId: ", spacesId);

  let result = { "items": [] };

  for (let w = 0; w < windowCount; w++) {
    for (let s = 0; s < spaceCount; s++) {
      let item = {
        "title": browser.windows[w].spaces[s].title(),
        "subtitle": browser.windows[w].spaces[s].id(),
        "arg": `${w},${s}`,
      };
      result.items.push(item);
    }
  }

  console.log(JSON.stringify({ items: result.items }));
  return JSON.stringify({ items: result.items });
}

