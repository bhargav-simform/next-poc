import { OverrideToken, AliasToken } from 'antd/es/theme/interface'

export const getAntTheme: Partial<AliasToken> = {
  fontFamily: `'Puvi', 'Roboto',sans-serif`,
  colorPrimary: 'var(--primary)',
  colorTextBase: 'var(--neutral-500)',
  colorText: 'var(--neutral-500)',
  colorBorder: 'var(--neutral-100)',
  lineWidthFocus: 1,
  borderRadius: 2
}

export const getComponent: OverrideToken = {
  Button: {
    controlHeightSM: 26,
    borderRadiusSM: 26,
    controlHeight: 32,
    borderRadius: 32,
    controlHeightLG: 38,
    borderRadiusLG: 38,
    colorPrimary: 'var(--primary)',
    colorBorder: 'var(--primary)',
    colorPrimaryHover: 'var(--primary)',
    colorPrimaryText: 'var(--primary)',
    colorBgTextActive: 'var(--primary)',
    colorBgSpotlight: 'var(--primary)',
    colorText: 'var(--primary)',
    colorLink: 'var(--primary)',
    colorLinkHover: 'var(--primary)',
    colorBgContainerDisabled: 'transparent',
    colorBgTextHover: 'transparent'
  },
  Layout: {
    colorBgLayout: 'var(--white)'
  },
  Tooltip: {
    colorBgSpotlight: 'var(--neutral-500)',
    borderRadius: 4,
    fontSize: 12,
    zIndexPopup: 1000
  },
  Radio: {
    controlInteractiveSize: 15,
    colorBorder: 'var(--primary)',
    colorPrimaryHover: 'var(--primary)',
    colorPrimary: 'var(--primary)'
  },
  Checkbox: {
    controlInteractiveSize: 15,
    colorBorder: 'var(--primary)',
    colorPrimary: 'var(--primary)',
    colorPrimaryHover: 'var(--primary)'
  },
  DatePicker: {
    controlHeight: 38,
    controlHeightSM: 32,
    colorPrimary: 'var(--primary)',
    colorPrimaryHover: 'var(--primary)',
    colorBorder: 'var(--gray-50)',
    controlOutlineWidth: 0
  },
  Form: {
    fontSize: 15.5
  },
  Tabs: {
    fontSize: 15.5,
    colorPrimary: 'var(--primary)',
    colorPrimaryHover: 'var(--primary)'
  },
  Switch: {
    colorPrimary: 'var(--primary)',
    colorPrimaryHover: 'var(--primary)'
  },
  Select: {
    colorBorder: 'var(--gray-50)',
    colorFillSecondary: 'var(--primary)',
    colorPrimaryHover: 'var(--primary)',
    controlOutline: 'var(--gray-50)',
    controlOutlineWidth: 1,
    controlHeight: 38
  },
  Upload: {
    colorPrimaryHover: 'var(--gray-100)'
  },
  Input: {
    colorBorder: 'var(--gray-50)',
    colorPrimaryHover: 'var(--primary)',
    controlOutlineWidth: 0,
    controlHeight: 38
  },
  InputNumber: {
    colorBorder: 'var(--gray-50)',
    colorPrimaryHover: 'var(--primary)',
    controlOutlineWidth: 0
  },
  Modal: {
    colorBgMask: 'rgba(var(--black-rgb), 0.82)'
  },
  Timeline: {
    colorPrimary: 'var(--primary)'
  },
  Calendar: {
    colorPrimary: 'var(--primary)',
    colorLinkActive: 'var(--primary)'
  },
  Menu: {
    itemDisabledColor: 'var(--neutral-300)'
  },
  Spin: {
    colorPrimary: 'var(--primary)'
  }
}
