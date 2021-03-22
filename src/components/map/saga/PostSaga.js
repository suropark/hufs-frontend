export function* registerPostAsync(action) {
  console.log(action);
  debugger;
  yield console.log("finish");
}
