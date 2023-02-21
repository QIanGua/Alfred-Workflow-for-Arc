#!/usr/bin/env osascript -l JavaScript

function run(args) {
  ObjC.import("stdlib");
  let Arc = Application("Arc");
  let query = args[0];
  let [arg1, arg2, arg3] = query.split(",");
  let windowIndex = parseInt(arg1);
  let spaceIndex = parseInt(arg2);
  let tabIndex = parseInt(arg3);
  // console.log("windowIndex: ", windowIndex);
  // console.log("spaceIndex: ", spaceIndex);
  // console.log("tabIndex:", tabIndex);
  Arc.windows[windowIndex].spaces[spaceIndex].tabs[tabIndex].select();
  Arc.activate();
}
