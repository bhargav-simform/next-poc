import { Drawer } from 'antd';
import { Issue, IssueFormData } from '@/app/types/issue';
import IssueForm from '../forms/IssueForm';

interface IssueDrawerProps {
  initialValues?: Issue;
  isModalVisible: boolean;
  onSubmit: (values: IssueFormData) => void;
  onClose: () => void;
  isLoading?: boolean;
}

function IssueDrawer({
  isModalVisible,
  onClose,
  initialValues,
  onSubmit,
  isLoading,
}: IssueDrawerProps) {
  return (
    <Drawer
      title={initialValues ? 'Edit Issue' : 'Create Issue'}
      open={isModalVisible}
      onClose={onClose}
      width={600}
      destroyOnHidden={false}
    >
      <IssueForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        onCancel={onClose}
        isLoading={isLoading}
      />
    </Drawer>
  );
}

export default IssueDrawer;
