import React, { useState, useEffect } from 'react';
import { FiShoppingBag } from 'react-icons/fi';

import Header from '../../components/Header';

import api from '../../services/api';

import Food from '../../components/Food';
import ModalAddFood from '../../components/ModalAddFood';
import ModalEditFood from '../../components/ModalEditFood';
import Loader from '../../components/Loader';

import { FoodsContainer } from './styles';

interface IFoodPlate {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  available: boolean;
}

const Delivery: React.FC = () => {
  const [foods, setFoods] = useState<IFoodPlate[]>([]);
  const [editingFood, setEditingFood] = useState<IFoodPlate>({} as IFoodPlate);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    async function loadFoods(): Promise<void> {
      //const response = await api.get('/foods');
      setFoods([{
        "id": 157,
        "name": "Premium Filter Coffee",
        "description": "Rich tasting and full-bodied coffee with an intense aroma. It's our signature blend but filtered.      ",
        "price": "7.90",
        "available": true,
        "image": "https://www.costa.co.uk/static/pim/5/f/9/a/5f9a409a9cd0009d967d265931e058cf98dad140_filter_coffee_product.jpg"
      }]);
    }

    loadFoods();
  }, []);

  async function handleAddFood(
    food: Omit<IFoodPlate, 'id' | 'available'>,
  ): Promise<void> {
    try {
      const id = Math.floor(Math.random() * 999);

      const updatedFood = { id, ...food, available: true };

      const response = await api.post('/foods', updatedFood);

      setFoods([...foods, response.data]);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateFood(
    food: Omit<IFoodPlate, 'id' | 'available'>,
  ): Promise<void> {
    const { id, available } = editingFood;

    const updatedFood = { id, ...food, available: true };

    const response = await api.put(`/foods/${id}`, updatedFood);

    const updatedState = foods.filter(item => item.id !== id);

    setFoods([...updatedState, response.data]);
  }

  async function handleDeleteFood(id: number): Promise<void> {
    await api.delete(`/foods/${id}`);

    const updatedState = foods.filter(item => item.id !== id);

    setFoods(updatedState);
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditFood(food: IFoodPlate): void {
    setEditingFood(food);
    setEditModalOpen(true);
  }

  return (
    <>
      <Header openModal={toggleModal} text={"Sacola"} icon={FiShoppingBag} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />
      {foods.length > 0 ? (
        <FoodsContainer data-testid="foods-list">
          {foods.map(food => (
            <Food
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
            />
          ))}
        </FoodsContainer>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Delivery;
