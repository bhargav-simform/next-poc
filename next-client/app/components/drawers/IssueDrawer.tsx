import { Drawer } from 'antd';
import type { IssueFormData } from '@/app/types/issue';
import IssueForm from '../forms/IssueForm';

interface IssueDrawerProps {
  initialValues?: IssueFormData;
  open: boolean;
  onSubmit: () => void;
  onClose: () => void;
  title: string;
  isLoading?: boolean;
}

function IssueDrawer({
  open,
  onClose,
  initialValues,
  onSubmit,
  title,
  isLoading,
}: Readonly<IssueDrawerProps>) {
  return (
    <Drawer title={title} open={open} onClose={onClose} width={800} destroyOnHidden={false}>
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
