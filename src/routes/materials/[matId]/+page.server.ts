import { error } from '@sveltejs/kit';
import type { PageServerLoad }from './$types'
 
export const load:PageServerLoad = async ({ fetch, params } ) => {
  const res = await fetch(`https://api.recyclecoach.com/ws-p520-dHAM/material/${params.matId}.json`);
  const payload = await res.json();
  
  console.log('payload', payload)
  
  if (payload?.content?.response?.materialDetails) {
    return payload.content.response.materialDetails
  }

 
  throw error(404, 'Not found');
}