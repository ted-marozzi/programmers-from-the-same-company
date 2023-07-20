/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import { Site } from "./Site";

const root = document.getElementById("root");

render(() => <Site />, root!);
