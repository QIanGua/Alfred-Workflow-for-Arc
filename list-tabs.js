#!/usr/bin/env osascript -l JavaScript

function run(args) {
  let browser = "Arc";
  console.log("browser: ", browser);
  if (!Application(browser).running()) {
    return JSON.stringify({
      items: [
        {
          title: `${browser} is not running`,
          subtitle: `Press enter to launch ${browser}`,
        },
      ],
    });
  }

  let chrome = Application(browser);
  chrome.includeStandardAdditions = true;

  let windowCount = chrome.windows.length;
  // console.log("windownCount: ", windowCount);

  let spaceCount = chrome.windows.spaces.length;
  console.log("spaceCount: ", spaceCount);

  let tabsTitle =
    browser === "Safari"
      ? chrome.windows.spaces.tabs.name()
      : chrome.windows.spaces.tabs.title();
  console.log("tabsTitle: ", tabsTitle);
  let tabsUrl = chrome.windows.spaces.tabs.url();
  // console.log("tabsUrl: ", tabsUrl);
  let tabsMap = {};

  for (let w = 0; w < windowCount; w++) {
    for (let s = 0; s < spaceCount; s++) {
      if (tabsTitle[w][s]) {
        for (let t = 0; t < tabsTitle[w][s].length; t++) {
          let url = tabsUrl[w][s][t] || "";
          let matchUrl = url.replace(/(^\w+:|^)\/\//, "");
          let title = tabsTitle[w][s][t] || matchUrl;

          tabsMap[url] = {
            title,
            url,
            subtitle: url,
            windowIndex: w,
            spaceIndex: s,
            tabIndex: t,
            quicklookurl: url,
            arg: `${w},${s},${t},${url}`,
            match: `${title} ${decodeURIComponent(matchUrl).replace(
              /[^\w]/g,
              " "
            )}`,
          };
        }
      }
    }
  }

  let items = Object.keys(tabsMap).reduce((acc, url) => {
    acc.push(tabsMap[url]);
    return acc;
  }, []);

  return JSON.stringify({ items });
}
