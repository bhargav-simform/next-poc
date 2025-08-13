import styled from 'styled-components';
import { Form } from 'antd';

export const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
`;

export const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 24px;
  }

  .quill {
    .ql-container {
      min-height: 200px;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    .ql-toolbar {
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
`;
