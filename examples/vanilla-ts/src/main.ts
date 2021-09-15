import { parseToneScript } from "@webtone/parser";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

const exampleToneScript =
    "392@-19,440@-19,494@-19,294@-19,457@-19;3.5(.7/0/4,.8/0/1,.6/0/1,.5/0/3,.7/0/2,.2/0/1);30(*/0/2+5)";
const ast = parseToneScript(exampleToneScript);

if (app) {
    app.innerHTML = `
  <h1>Webtone</h1>
  <p>Input ToneScript: <code>${exampleToneScript}</code></p>
  <p>Output AST:</p>
  <pre>${JSON.stringify(ast)}</pre>
`;
}
