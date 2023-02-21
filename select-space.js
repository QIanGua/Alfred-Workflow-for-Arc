#!/usr/bin/env osascript -l JavaScript

function run(args) {
  ObjC.import("stdlib");
  let Arc = Application("Arc");
  let query = args[0];
  let [arg1, arg2] = query.split(",");
  let windowIndex = parseInt(arg1);
  let spaceIndex = parseInt(arg2);
  console.log("windowIndex: ", windowIndex);
  console.log("spaceIndex: ", spaceIndex);
  Arc.windows[windowIndex].spaces[spaceIndex].focus();
  Arc.activate();
}
