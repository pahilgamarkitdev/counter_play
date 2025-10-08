import React from 'react';
import { getAllItemsAction } from './actions';
import ItemsClient from './_components/ItemsClient';

export default async function ItemsPage() {
  const items = await getAllItemsAction();

  return <ItemsClient items={items} />;
}