import React, { useRef, useCallback } from 'react';

import { FiCheckSquare, FiXCircle } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from './styles';

import Input from '../Input';

interface IFoodPlate {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  available: boolean;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (food: Omit<IFoodPlate, 'id' | 'available'>) => void;
  editingFood: IFoodPlate;
}

interface IEditFoodData {
  name: string;
  image: string;
  price: string;
  description: string;
}

const ModalEditFood: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  editingFood,
  handleUpdateFood,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: IEditFoodData) => {
      handleUpdateFood(data);

      setIsOpen();
    },
    [handleUpdateFood, setIsOpen],
  );

  return (
    <>
      {isOpen && (
        <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
          <span>
            <h1>Editar Prato</h1>
            <FiXCircle size={24} color="#000" onClick={setIsOpen} />
          </span>

          <Input
            title="URL da imagem"
            name="image"
            placeholder="Cole o link aqui"
          />

          <Input title="Nome do prato" name="name" placeholder="Ex: Coffee" />

          <Input title="Preço" name="price" placeholder="Ex: 19.90" />

          <Input
            title="Descrição do prato"
            name="description"
            placeholder="Descrição"
          />

          <button type="submit" data-testid="edit-food-button">
            Editar Prato
            <FiCheckSquare size={24} />
          </button>
        </Form>
      )}
    </>
  );
};

export default ModalEditFood;
