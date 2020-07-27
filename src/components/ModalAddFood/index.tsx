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

interface ICreateFoodData {
  name: string;
  image: string;
  price: string;
  description: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: Omit<IFoodPlate, 'id' | 'available'>) => void;
}

const ModalAddFood: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddFood,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICreateFoodData) => {
      handleAddFood(data);
      setIsOpen();
    },
    [handleAddFood, setIsOpen],
  );

  return (
    <>
      {isOpen && (
        <Form ref={formRef} onSubmit={handleSubmit}>
          <span>
            <h1>Novo Prato</h1>
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

          <button type="submit" data-testid="add-food-button">
            Adicionar Prato
            <FiCheckSquare size={24} />
          </button>
        </Form>
      )}
    </>
  );
};

export default ModalAddFood;
