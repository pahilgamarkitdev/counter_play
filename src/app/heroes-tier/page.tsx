import React from 'react';
import { getAllHeroesByTierAction } from './actions';
import HeroesTierClient from './_components/HeroesTierClient';

export default async function HeroesTierPage() {
  const tierSections = await getAllHeroesByTierAction();

  return (
    <HeroesTierClient initialTierSections={tierSections} />
  );
}