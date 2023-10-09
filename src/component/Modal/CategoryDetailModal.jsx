import React from 'react';
import { Modal } from 'antd';

const CategoryDetailModal = ({ visible, onClose, category }) => {
  if (!category) {
    return null; // Return null if no category is selected
  }

  return (
    <Modal
      title={category.name}
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={600}
    >
      {/* Render the details of the selected category here */}
      <p>Details for {category.name} go here.</p>
    </Modal>
  );
};

export default CategoryDetailModal;