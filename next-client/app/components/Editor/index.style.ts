import { Modal } from 'antd'
import styled from 'styled-components'

export const EditorStyle = styled.div`
  .rdw-editor-toolbar {
    border: 1px solid var(--neutral-100);
    margin-bottom: 0;
  }
  .rdw-editor-main {
    border: 1px solid var(--neutral-100);
    border-top: none;
  }
  .rdw-option-wrapper,
  .rdw-dropdown-wrapper {
    border: none;
    padding: 0;
    height: 30px;
    &:hover {
      box-shadow: none;
      background-color: rgba(var(--primary-rgb), 0.07);
    }
    a {
      color: var(--neutral-500);
    }
  }
  .rdw-dropdown-optionwrapper {
    padding: 0;
    &:hover {
      box-shadow: none;
    }
  }
  .rdw-embedded-modal {
    left: -65px;
    width: 255px;
    height: 210px;
  }
  .rdw-link-modal {
    width: 375px;
    height: fit-content;
    box-shadow: 3px 4px 8px rgba(var(--black-100-rgb), 0.2);
  }
  .rdw-colorpicker-modal {
    width: 290px;
    height: 240px;
  }
  .rdw-link-modal-label {
    font-size: 14px;
    color: var(--neutral-600);
  }
  .rdw-link-modal-input {
    padding: 4px 5px;
    height: auto;
    border: none;
    box-shadow: none;
    border-bottom: 1px solid var(--primary-border);
    transition: border-color 0.3s ease-in-out;
    &:hover {
      border-bottom: 1px solid var(--gray-138);
    }
    &:focus {
      border-bottom: 1px solid var(--blue-border);
    }
  }
  .rdw-link-modal-btn {
    border-radius: 20px;
    height: 34px;
    border: 1px solid var(--primary);
    color: var(--primary);
    &:disabled {
      cursor: not-allowed;
      color: var(--white);
      background-color: rgba(var(--primary-rgb), 0.4);
      border-color: rgba(var(--primary-rgb), 0.4);
      box-shadow: none;
    }
    &:first-child:not(:disabled) {
      color: var(--white);
      background-color: var(--primary);
    }
  }
  .rdw-option-wrapper {
    width: 30px;
  }
  .rdw-fontfamily-optionwrapper {
    width: 150px;
  }
  .DraftEditor-editorContainer {
    min-height: 150px;
    max-height: 300px;
    /* overflow: auto; */
    /* padding: 0 10px; */
  }
`
export const EditorFooter = styled.div`
  border: 1px solid var(--neutral-100);
  border-top: none;
  .files {
    max-height: 300px;
    overflow: auto;
  }
`
export const UploadModalStyle = styled(Modal)`
  .ant-modal {
    &-content {
      padding: 0;
    }
    &-header {
      margin-bottom: 0;
    }
    &-title {
      padding: 0 25px 0 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: var(--neutral-50);
      border-bottom: 1px solid var(--neutral-100);
      .switch {
        padding: 15px;
        border-radius: 0;
        border-bottom: 2px solid transparent;
        height: unset;
        font-size: 16px;
        &.active {
          border-bottom: 2px solid var(--primary);
        }
      }
    }
  }
`

export const LocalStyle = styled.div`
  &.has-files {
    display: grid;
    grid-template-columns: 690px 1fr;
  }
  .upload {
    padding: 50px;
    background-color: var(--neutral-60);
    .ant-upload-wrapper .ant-upload-drag:not(.ant-upload-disabled) {
      border: none;
    }
    .ant-upload-btn {
      background-color: var(--neutral-50);
      border: 2px dashed rgba(var(--primary-rgb), 0.5);
    }
    .ant-upload-drag-container {
      min-height: 500px;
      height: calc(100vh - 300px);
      max-height: 650px;
      display: grid;
      place-content: center;
      place-items: center;
    }
    .ant-upload-drag-icon {
      width: 170px;
    }
    .ant-upload-text {
      font-size: 18px;
      font-weight: 500;
      margin-top: 16px;
    }
    .ant-upload-list {
      display: none;
    }
  }
  .list {
    padding: 10px 0;
    position: relative;
    .files {
      max-height: 700px;
      overflow: auto;
    }
    .actions {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 20px 26px;
      display: flex;
      align-items: center;
      gap: 8px;
      background-color: var(--neutral-50);
      width: 100%;
    }
  }
`

export const FileItemStyle = styled.div`
  padding: 10px 10px 10px 26px;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }
  .ant-btn {
    margin-inline-start: auto;
  }
  &:hover {
    background-color: rgba(var(--primary-rgb), 0.05);
  }
  &::after {
    content: '';
    position: absolute;
    left: 5%;
    bottom: 0;
    height: 1px;
    width: 90%;
    background-color: var(--neutral-100);
  }
`
export const CharacterCounter = styled.div<{
  textLength: number
  COMMENT_EDITOR_CHARACTER_LIMIT: number
}>`
  text-align: right;
  font-size: 12px;
  color: ${({ textLength, COMMENT_EDITOR_CHARACTER_LIMIT }) =>
    textLength > COMMENT_EDITOR_CHARACTER_LIMIT ? 'red' : '#888'};
`
