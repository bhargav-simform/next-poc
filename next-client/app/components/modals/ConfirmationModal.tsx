import { Modal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';

interface ConfirmationModalProps {
  title: string;
  content: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

const { confirm } = Modal;

const showConfirmationModal = ({ title, content, onConfirm, onCancel }: ConfirmationModalProps) => {
  confirm({
    title,
    icon: <ExclamationCircleFilled />,
    content,
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk: onConfirm,
    onCancel,
  });
};

export default showConfirmationModal;
