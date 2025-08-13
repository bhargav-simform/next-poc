import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

interface ConfirmationModalProps {
  title: string;
  content: string;
  onConfirm: () => void;
}

const showConfirmationModal = ({
  title,
  content,
  onConfirm,
}: ConfirmationModalProps) => {
  return Modal.confirm({
    title,
    icon: <ExclamationCircleOutlined />,
    content,
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk: onConfirm,
  });
};

export default showConfirmationModal;
