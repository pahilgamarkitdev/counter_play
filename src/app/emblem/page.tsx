import React from 'react';
import { getAllEmblemsAction } from './actions';
import EmblemsClient from './_components/EmblemsClient';

export default async function EmblemPage() {
  // Fetch all emblems on the server
  const emblems = await getAllEmblemsAction();

  return <EmblemsClient initialEmblems={emblems} />;
}