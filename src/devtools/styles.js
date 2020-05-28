export default `
.styles-module_updateList__1cOW1 {
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden; }
  .styles-module_updateList__1cOW1 .styles-module_update__fVud_ {
    padding: 0;
    margin: 0;
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    color: #f7f1ff;
    border-bottom: 1px solid #222222;
    padding: 8px 16px;
    width: 100%;
    height: 52px;
    cursor: pointer;
    transform: translateY(0);
    transition: transform 0.14s 0.07s linear; }
    .styles-module_updateList__1cOW1 .styles-module_update__fVud_:hover {
      background-color: rgba(105, 103, 108, 0.36); }
    .styles-module_updateList__1cOW1 .styles-module_update__fVud_ .styles-module_indicator__3HTNO {
      position: absolute;
      width: 0;
      height: 100%;
      top: 0;
      left: 0;
      background-color: #222222;
      transition: width 0.07s ease-out; }
    .styles-module_updateList__1cOW1 .styles-module_update__fVud_ .styles-module_patchOp__JXTMW {
      width: 100%;
      font-weight: bolder;
      display: block;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      z-index: 1; }
    .styles-module_updateList__1cOW1 .styles-module_update__fVud_ .styles-module_patchPath__2jHAX {
      width: 100%;
      font-size: smaller;
      font-style: italic;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      z-index: 1; }
    .styles-module_updateList__1cOW1 .styles-module_update__fVud_.styles-module_active__3_QdX .styles-module_indicator__3HTNO {
      width: 100%;
      transition: width 0.14s ease-out; }
    .styles-module_updateList__1cOW1 .styles-module_update__fVud_:hover:not(.styles-module_active__3_QdX) .styles-module_indicator__3HTNO {
      width: 10px; }

.styles-module_header__3OdzN {
  width: 100%;
  height: 52px;
  display: flex;
  padding: 0 24px;
  justify-content: flex-end;
  align-items: center; }
  .styles-module_header__3OdzN .styles-module_headerButton__1BfWw {
    background-color: transparent;
    color: #f7f1ff;
    outline: none;
    height: 36px;
    padding: 0 24px;
    margin-left: 8px;
    border: 1px solid #69676c;
    cursor: pointer; }
    .styles-module_header__3OdzN .styles-module_headerButton__1BfWw.styles-module_active__1QJ98 {
      background-color: #69676c; }
    .styles-module_header__3OdzN .styles-module_headerButton__1BfWw:hover:not(.styles-module_active__1QJ98) {
      background-color: #363537; }



.styles-module_view__3Eobm {
  color: #fff; }
  .styles-module_view__3Eobm .styles-module_patchList__AxViL {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }
    .styles-module_view__3Eobm .styles-module_patchList__AxViL .styles-module_patch__Hfweg {
      cursor: pointer;
      user-select: none;
      opacity: 0.5;
      padding: 4px 8px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 3px;
      margin-right: 8px;
      line-height: 1.2; }
      .styles-module_view__3Eobm .styles-module_patchList__AxViL .styles-module_patch__Hfweg.styles-module_selected__16mNE {
        opacity: 1; }
      .styles-module_view__3Eobm .styles-module_patchList__AxViL .styles-module_patch__Hfweg .styles-module_op__3AR7C,
      .styles-module_view__3Eobm .styles-module_patchList__AxViL .styles-module_patch__Hfweg .styles-module_path__2Z_gN {
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden; }
      .styles-module_view__3Eobm .styles-module_patchList__AxViL .styles-module_patch__Hfweg .styles-module_op__3AR7C {
        font-weight: bolder;
        text-transform: uppercase;
        display: block; }
      .styles-module_view__3Eobm .styles-module_patchList__AxViL .styles-module_patch__Hfweg .styles-module_path__2Z_gN {
        width: 100%;
        font-size: smaller;
        font-style: italic; }

/*
RESET
*/
html,
body,
body > div#root {
  width: 100%;
  height: 100%;
  overflow: hidden; }

body {
  font-family: 'Dank Mono', monospace;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-size: 1rem;
  margin: 0;
  padding: 0; }

* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent; }

*::before,
*::after {
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent; }

.styles-module_patchNav__34LfV {
  width: 15%;
  min-width: 280px;
  flex: none;
  background-color: #363537;
  padding: 16px 0;
  overflow-y: auto; }

.styles-module_patchView__1mUjk {
  padding: 16px;
  flex: auto;
  max-width: 85%;
  overflow: hidden; }

.styles-module_view__1lheA {
  height: calc(100% - 52px);
  overflow: auto;
  padding: 24px 0 24px 24px; }
  .styles-module_view__1lheA > main {
    width: max-content; }

.styles-module_viewDiff__2sOf6 .styles-module_heading__1RraC {
  color: #f7f1ff;
  border-bottom: 1px solid #363537;
  padding: 8px 0; }

.styles-module_viewDiff__2sOf6 .styles-module_removedJson__zH-wQ > ol {
  background-color: rgba(255, 0, 0, 0.07) !important; }

.styles-module_viewDiff__2sOf6 .styles-module_addedJson__1Gdz0 > ol {
  background-color: rgba(0, 255, 0, 0.07) !important; }

.styles-module_viewDiff__2sOf6 .styles-module_removedPrim__11XLl {
  position: relative;
  padding: 2px 8px;
  border-radius: 4px;
  min-width: 82px;
  display: inline-block;
  text-align: center;
  background-color: rgba(255, 0, 0, 0.3);
  color: #f7f1ff;
  font-weight: 800;
  text-decoration: line-through; }

.styles-module_viewDiff__2sOf6 .styles-module_fatArrow__a0yKI {
  color: #f7f1ff;
  font-weight: 900;
  display: inline-block; }

.styles-module_viewDiff__2sOf6 .styles-module_addedPrim__14L6j {
  padding: 2px 8px;
  border-radius: 4px;
  min-width: 82px;
  display: inline-block;
  text-align: center;
  background-color: rgba(0, 255, 0, 0.3);
  color: #f7f1ff;
  font-weight: 800; }
`
