// eslint-disable-next-line
// @ts-nocheck
import { createGlobalStyle } from 'styled-components';
import {
  colorUtilities,
  colorVariables,
  spacingUtilities,
  responsiveSpacing,
  fontUtilities,
  responsiveFonts,
  fontWeightUtilities,
  displayUtilities,
  responsiveDisplay,
  alignItemsUtilities,
  responsiveAlignItems,
  justifyContentUtilities,
  responsiveJustifyContent,
  radiusUtilities,
  responsiveRadius,
  gapUtilities,
  responsiveGap,
  widthUtilities,
  flexDirectionUtilities,
} from './utilityClasses';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "simform";
  font-weight: normal;
  font-style: normal;
  /*
   Issue: In previous path we are facing icon issues, once we do hard reload icon style is remove from the components and 
          file path is change which url have 
   Solution: Moved the fonts folder from src/assets folder to public folder as per the solution given in this stack overflow link
             https://stackoverflow.com/questions/68614420/how-to-use-font-face-in-styled-components-with-react-and-typescript
  */ 
  src: url("/fonts/simform.woff2")
      format("woff2"),
    url("/fonts/simform.woff2")
      format("woff");
}
/*
As per requirenment we use Puvi fonts.This might not be available for free althogh we downloaded from zoho's official site.
source link :
https://workdrive.zohoexternal.com/external/bb64ad2e22bcb0f7b6664e2516898c048d5fb67f2c897caae5bdb9a2d03eeaa1?ireft=nhome&src=typefaces-footer
also we can use alternate font Montserrat which is free to use
source: https://fonts.google.com/specimen/Montserrat
*/
@font-face {
  font-family: "Puvi";
  font-weight: normal;
  font-style: normal;
  src: url("/fonts/Zoho Puvi Regular.ttf") format("truetype");
}
@font-face {
  font-family: "Puvi";
  font-weight: 500;
  font-style: normal;
  src: url("/fonts/Zoho Puvi Medium.ttf") format("truetype");
}
@font-face {
  font-family: "Puvi";
  font-weight: 600;
  font-style: normal;
  src: url("/fonts/Zoho Puvi SemiBold.ttf") format("truetype");
}
@font-face {
  font-family: "Puvi";
  font-weight: 700;
  font-style: normal;
  src: url("/fonts/Zoho Puvi Bold.ttf") format("truetype");
}
/* for offline mode : */
html.offline-mode {
--white:#ffffff99 !important;
--neutral-50:#ffffff99 !important;
--primary:#97999c !important;
--peru:#97999c !important;
--primary-rgb:#97999c !important;
--dark-lemon-lime:#97999c !important;
--dark-tangerine:#97999c !important;
--royal-orange:#97999c !important;
--col-totalh:#97999c !important;
--blue-green:#97999c !important;
--emrald:#97999c !important;
--light-turquoise:#97999c !important;
--light-red:#97999c !important;
--col-nonbillh:#97999c !important;
--col-billh:#97999c !important;
--dark-turquoise:#97999c !important;
--mustard-yellow:#97999c !important;
--sea-serpant:#97999c !important;
--royal-orange:#97999c !important;
--super-pink:#97999c !important;
--dark-lemon-lime:#97999c !important;
--deer:#97999c: !important;
--dark-tangerine:#97999c !important;
--verdigris:#97999c !important;
--tulip:#97999c !important;
--emrald:#97999c !important;
--electric-blue:#97999c !important;
--blue-green:#97999c !important;
--picton-blue:#97999c !important;
--rose-pink:#97999c !important;
--pale-taupe:#97999c !important;
--brilliant-azure:#97999c !important;
--bright-lavender:#97999c !important;
--peru:#97999c !important;
--pewter-blue:#97999c !important;
--pastel-red:#97999c !important;
--light-yellow:#97999c !important;
}

.sim-screen-freez{
  position: absolute;
  display: block;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
 }


*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

${colorVariables}

body {
  line-height: 1.5;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--neutral-50);
  color: var(--neutral-500);
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

a {
  text-decoration: none;
}


i {
  font-family: 'simform';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  letter-spacing: 0;
  -webkit-font-feature-settings: 'liga';
  -moz-font-feature-settings: 'liga=1';
  -moz-font-feature-settings: 'liga';
  -ms-font-feature-settings: 'liga' 1;
  font-feature-settings: 'liga';
  -webkit-font-variant-ligatures: discretionary-ligatures;
  font-variant-ligatures: discretionary-ligatures;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

${colorUtilities}
${spacingUtilities}
${responsiveSpacing}
${fontUtilities}
${responsiveFonts}
${fontWeightUtilities}
${displayUtilities}
${responsiveDisplay}
${alignItemsUtilities}
${responsiveAlignItems}
${justifyContentUtilities}
${responsiveJustifyContent}
${radiusUtilities}
${responsiveRadius}
${gapUtilities}
${responsiveGap}
${widthUtilities}
${flexDirectionUtilities}

.ant-select-item.selected-user {
  background: var(--primary-bg);
  .ant-select-item-option-content{
    color: var(--primary);
  }
}

.h-full{
  height: 100%;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.text-left {
  text-align: left !important;
}

.align-middle{
  vertical-align: middle;
}

.flexwrap {
  flex-wrap: wrap;
}

.flexnowrap {
  flex-wrap: nowrap;
}

.shrink {
  flex-shrink: 1;
}

.noshrink {
  flex-shrink: 0;
}

.grow {
  flex-grow: 1;
}

.nogrow {
  flex-grow: 0;
}

.nowrap {
  white-space: nowrap;
}

.line-height-reset{
  line-height: 1.5;
}

.h-100{
  height: 100%;
}

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
  font-size:15px;
  color:var(--neutral-600);
  /* text-transform: capitalize; */
  &.ellipsed-cell{
    max-width: 150px;
    overflow: visible;
    .ant-select-selection-placeholder{
      max-width: 150px;
    }
    .ant-select-selection-item{
     div{
       line-height: 32px;
       max-width: 150px;
       overflow: hidden;
     }
   }}
  .ant-avatar{
    flex-shrink: 0;
  }
}

.overflow-auto{
  overflow: auto;
}

.underline {
  text-decoration: underline;
}

.pointer {
  cursor: pointer;
}

.cursor-copy{
  cursor:copy;
}

.ml-auto {
  margin-inline-start: auto;
}

.mr-auto {
  margin-inline-end: auto;
}

.mt-auto {
  margin-block-start: auto;
}

.mb-auto {
  margin-block-end: auto;
}

.br-none{
  border-right: none !important;
}

.flex-none{
  flex: 0 0 auto;
}

.w-full{
  width:100%;
}

.h-full{
  height:100%;
}
.truncate-anywhere{
  overflow-wrap: anywhere;
}
/* ======== ======== Styles for Form ======== ======== */
.tags-input {
    max-width: 180px;
    order: 10;
    padding: 0;
    border: none;
  }
  .tag-items {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0 14px 0 10px;
    border-radius: 3px 2px 2px 3px;
    margin: 3px 6px;
    background-color: var(--color);
    cursor: pointer;
    color: var(--white);
    font-size: 14px;
    clip-path: polygon(
      0 0,
      calc(100% - 10px - 0.5px) 0px,
      calc(100% - 10px + 0.1px) 0.1px,
      calc(100% - 10px + 0.3px) 0.2px,
      calc(100% - 10px + 0.6px) 0.3px,
      calc(100% - 10px + 0.9px) 0.5px,
      calc(100% - 10px + 1.2px) 0.7px,
      calc(100% - 10px + 1.4px) 0.9px,
      calc(100% - 0.8px) calc(50% - 0.3px),
      calc(100% - 0.7px) 50%,
      calc(100% - 0.8px) calc(50% + 0.3px),
      calc(100% - 10px + 1.4px) calc(100% - 0.9px),
      calc(100% - 10px + 1.2px) calc(100% - 0.7px),
      calc(100% - 10px + 0.9px) calc(100% - 0.5px),
      calc(100% - 10px + 0.6px) calc(100% - 0.3px),
      calc(100% - 10px + 0.3px) calc(100% - 0.2px),
      calc(100% - 10px + 0.1px) calc(100% - 0.1px),
      calc(100% - 10px - 0.5px) 100%,
      0 100%,
      0 0
    );
    &.mx-full{
      max-width: 100%;
    }
    .tag-text{
      max-width: 100%;  
      white-space: nowrap;  
      overflow: hidden;  
      text-overflow: ellipsis;
    }
  }
  .remove-tag {
    width: 13px;
    height: 13px;
    font-size: 13px;
  }
.ant-form-vertical {
  .ant-form-item-label {
    padding: 0 0 4px;
    > label{
      width: 100%;
      &::after {
        display: none;
      }
    }   
  } 
  .ant-form-item-required {
    flex-direction: row-reverse;
    justify-content: flex-end;
    &::before {
      font-size: 19px;
    }
  }
}

/* ======== ======== ======== ======== ======== ======== */

/* ======== ======== Hide number input spinner for Chrome, Safari, and Edge ======== ======== */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Hide number input spinner for Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

/* ======== ======== ======== ======== ======== ======== */

/*  Move Task dropdown > select :if we render select in body itself then above styles will be applied */
.ant-popover{
  &.popover-huge{
    min-width: 500px;
  }
}
.move-select {
    .ant-select-item-option-content {
      overflow: visible;
      white-space: unset;
      text-overflow: unset;
    }
  }
/* status select */
.select-mw-180 {
  min-width: 180px !important ;
  
}

/* ======== ======== Styles for Select dropdown ======== ======== */
.ant-select-dropdown {
  padding: 0;
  .ant-select-item {
    font-size: 15px;
    &:hover {
      background-color: rgba(var(--primary-rgb), 0.07);
    }
  }
  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: var(--neutral-50);
    color: var(--primary);
    font-weight: 400;
  }
  .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
    background-color: rgba(var(--primary-rgb), 0.07);
    color: var(--primary);
  }
}
/* ======== ======== ======== ======== ======== ======== ======== */

/* ======== ======== Styles for DatePicker dropdown ======== ======== */
.ant-picker-dropdown {
  font-size: 12px;
  .ant-picker-footer {
    border-top: none;
    a {
      color: var(--primary);
    }
  }
  .ant-picker-cell {
    padding: 2px 0;
  }
  .ant-picker-cell-in-view {
    &.ant-picker-cell-today {
      .ant-picker-cell-inner {
        &::before {
          border-radius: 20px;
        }
      }
    }
    &.ant-picker-cell-selected {
      .ant-picker-cell-inner {
        border-radius: 20px;
      }
    }
  }
}
/* ======== ======== ======== ======== ======== ======== ======== */

/* ======== ======== Styles for TimePicker dropdown ======== ======== */
.ant-picker-dropdown {
  .ant-picker-time-panel-column {
    & > li.ant-picker-time-panel-cell-selected {
      .ant-picker-time-panel-cell-inner {
        background-color: rgba(var(--primary-rgb), 0.07);
        color: var(--primary);
      }
    }
  }
  .ant-picker-now-btn {
    color: var(--primary);
  }
  .ant-picker-ok {
    .ant-btn-primary {
      box-shadow: none;
      &:disabled {
        border-color: var(--neutral-200);
      }
    }
  }
}
/* ======== ======== ======== ======== ======== ======== ======== */

/* ======== ======== Styles for tag select box ======== ======== */
.owner-select-popup{
  width: 200px !important;
}
.tag-select {
  max-width: 100%;
  &.ant-select-dropdown {
    .ant-select-item {
      padding: 0;
      min-height: unset;
      margin-bottom: 8px;
    }
    .ant-select-item-option {
      &-selected,
      &-active {
        &:not(.ant-select-item-option-disabled) {
          background-color: transparent;
          font-weight: 400;
        }
      }
    }
    .ant-select-item-option-state {
      display: none;
    }
  }
  .rc-virtual-list-holder-inner {
    flex-direction: row !important;
    flex-wrap: wrap;
    max-height: 150px;
    padding: 10px;
    overflow: auto;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.tag-wrap{
  .ant-select{
  .ant-select-selector{&.ant-select-selector{&.ant-select-selector{
    height: 100% ;
  }}}}
}
.dot {
  margin-right: 8px;
  display: inline-block;
  background-color: var(--color);
  width: 13px;
  height: 13px;
  border-radius: 13px;
  border: 1px solid var(--color);
  &.other {
    --status-color: var(--neutral-50);
    border-color: var(--neutral-100);
      color: var(--neutral-500);
  }
}
/* ======== ======== ======== ======== ======== ======== ======== */

/* ======== ======== Styles for ant-btn ======== ======== */

.ant-btn {
  box-shadow: unset;
}/* ======== ======== ======== ======== ======== ======== ======== */

/* ======== ======== Styles for ant-dropdown ======== ======== */

.ant-dropdown{
  .ant-dropdown-menu {
    .ant-dropdown-menu-item{
      font-size: 15.5px;
      color: var(--black-100);
      &:hover{
        background-color: var(--primary-hover);
      }
    }
    .ant-dropdown-menu-item-selected {
      background-color: var(--primary-hover);
      &:hover{
        background-color: var(--primary-hover);
      }
    }
  }
}
/* ======== ======== ======== ======== ======== ======== ======== */
.ant-menu-light:not(.ant-menu-horizontal) .ant-menu-item:not(.ant-menu-item-selected):hover, 
.ant-menu-light>.ant-menu:not(.ant-menu-horizontal) .ant-menu-item:not(.ant-menu-item-selected):hover {
  background-color: rgba(var(--primary-rgb), 0.07);
  color: var(--primary);
}
.ant-menu-light .ant-menu-item-selected, 
.ant-menu-light>.ant-menu .ant-menu-item-selected {
  background-color: rgba(var(--primary-rgb), 0.07);
  color: var(--primary);
}
/* ======== ======== Styles for ant-notification ======== ======== */
.ant-notification {
  .ant-notification-notice {
    padding: 22px;
    .ant-notification-notice-icon {
      left: 20px;
      font-size: 40px;
      top: 50%;
      transform: translateY(-50%);
    }
    .ant-notification-notice-with-icon {
      .ant-notification-notice-message {
        margin-bottom: 0;
        margin-inline-start: 46px;
        font-size: 16px;
        font-weight: 500;
        color: var(--neutral-600);
        text-align: left;
      }
      .ant-notification-notice-description{
        margin-inline-start: 46px;
        font-size: 14px;
        color: var(--neutral-600);
        text-align:left;
      }
    } 
    .ant-notification-notice-close {
      top: 11px;
      font-family: "simform";
      speak: none;
      font-style: normal;
      font-weight: normal;
      font-variant: discretionary-ligatures;
      text-transform: none;
      line-height: 1;
      letter-spacing: 0px;
      font-feature-settings: "liga";
      -webkit-font-smoothing: antialiased;
      font-size: 11px;
      &:before {
        content: '\\e943'
      }
    }  
  }
}
.ant-notification {
    &.ant-notification-top {
      inset: 0 auto auto 50% !important;
    }
    .ant-notification-notice {
      &.notify-center {
        box-shadow: none;
        width: auto;
        padding: 5px 45px 10px 45px;
        border-radius: 0;
        position: relative;
        background: transparent;
        &:before {
          content: '';
          width: 100%;
          background-color: transparent;
          position: absolute;
          top: -1px;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1 !important;
          text-align: center !important;
          border: unset;
          border-left: 0;
          transform: perspective(15px) rotateX(-2deg);
          -moz-transform: perspective(15px) rotateX(-2deg);
          -webkit-transform: perspective(15px) rotateX(-2deg);
          transform-origin: top;
          border-radius: 0 0 10px 10px;
        }
        &.ant-notification-notice-success {
          &:before {
            background-color: var(--notify-success);
            box-shadow: inset 0 5px 4px -2px var(--notify-success);
          }
        }
        &.ant-notification-notice-warning {
          &:before {
            background-color: var(--primary);
            box-shadow: inset 0 5px 4px -2px var(--primary);
          }
        }
        &.ant-notification-notice-error {
          &:before {
            background-color: var(--pastel-red);
            box-shadow: inset 0 5px 4px -2px var(--pastel-red);
          }
        }
        .ant-notification-notice-icon {
          display: none;
        }
        .ant-notification-notice-with-icon {
          .ant-notification-notice-message {
            margin-bottom: 0;
            margin-inline-start: 0;
            padding-inline-end: 0;
            color: var(--white);
          }
        }
        .ant-notification-notice-close {
          display: none;
        }
      }
    }
  }

/* ======== ======== Styles for ant-loader ======== ======== */
.ant-spin-nested-loading {
  >div {
    >.ant-spin{
      max-height: none;
    }
  }
}

.active-bg {
  background-color: var(--primary-bg);
}

.uploaded-attachments {
  border-bottom: 1px solid var(--gray-230);
  &:last-child {
    border-bottom: 0px;
  }
}
.w-120 {
  width: 120px;
  display: inline-block;
}
.public-DraftStyleDefault-block {
    user-select: none;
    margin: 0;
    pointer-events: none;
}
.public-DraftEditor-content, .public-DraftEditorPlaceholder-inner {
  padding: 10px 0 0 10px;
}
.ant-select {
    &.move-select {
      width: 390px;
      height: 32px;
      background-color: var(--white);
      .ant-select-arrow {
        display: block;
      }
      .ant-select-selector {
        height: 32px;
        .ant-select-selection-item {
          line-height: 32px;
        }
        .ant-select-selection-search-input {
          height: 32px;
          line-height: 32px;
        }
        .ant-select-selection-placeholder {
          line-height: 32px;
        }
      }
      :hover {
        .ant-select-arrow {
          color: var(--neutral-200);
        }
      }
    }
}
.ant-picker {
  .ant-picker-input {
    .ant-picker-clear {
      display: none;
    }
  }
}
  .tag-wrapper{
    display: flex;
    flex-wrap: wrap;
    row-gap: 8px;
    margin-bottom: 8px;
    /* max-width: calc(100vw - 200px); */
    &:last-child{
      margin-bottom: 0;
    }
  }
.ant-modal {
  &.globalsearch-modal {
    width: 100%;
    max-width: 750px;
    .ant-modal-content {
      padding: 0;
    }
    .globalsearch-header {
      justify-content: space-between;
      background: var(--white);
      border-bottom: 0;
      padding: 6px;
      border-radius: 4px;
      h2 {
        display: none;
      }
      .search-bar {
        border: 0;
      }
    }
  }
}

.ant-modal-confirm-btns {

  .ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover{
    color: var(--primary);
    border-color: var(--primary);
  }

  .ant-btn-primary {
    background-color: var(--primary);
    border-color: var(--primary);
    
    &.ant-btn-primary:not(:disabled):not(.ant-btn-disabled):hover{
      background-color: var(--primary);

    }
  }
}

.ant-picker-dropdown .ant-picker-cell-in-view{
  &.ant-picker-cell-in-range:not(.ant-picker-cell-disabled):before{
  background-color: var(--primary-hover);
}

&.ant-picker-cell-range-end:not(.ant-picker-cell-disabled):before {
  background-color: var(--primary-hover);
}

&.ant-picker-cell-range-start:not(.ant-picker-cell-disabled):before{
  background-color: var(--primary-hover);
}
}

`;

export default GlobalStyle;
