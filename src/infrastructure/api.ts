import axios from 'axios';

import { delayedValue } from 'src/utils';

export const PORT = 4100;

const BASE_URL = `http://localhost:${PORT}/api`;

const DELAY_IN_MS = 1200;

export function fetchEntities<T>(path: string): Promise<T[]> {
  const url = BASE_URL + path;

  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .then((entities) => {
      return delayedValue(entities, DELAY_IN_MS);
    });
}

type DataEntityParams<T> = Omit<T, 'id'>;

export function createEntity<T>(path: string, entityData: DataEntityParams<T>): Promise<T> {
  return axios.post(path, entityData)
    .then((response) => response.data)
    .then((createdEntity) => delayedValue(createdEntity, DELAY_IN_MS));
}
