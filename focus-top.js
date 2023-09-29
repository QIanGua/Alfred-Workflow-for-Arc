#!/usr/bin/env osascript -l JavaScript

function run(args) {
  ObjC.import("stdlib");
  let Arc = Application("Arc");
  let query = args[0];
  let [arg1, arg2] = query.split(",");
  let windowIndex = parseInt(arg1);
  let tabIndex = parseInt(arg2);
  // console.log("windowIndex: ", windowIndex);
  // console.log("spaceIndex: ", spaceIndex);
  // console.log("tabIndex:", tabIndex);
  Arc.windows[windowIndex].tabs[tabIndex].select();
  Arc.activate();
}
