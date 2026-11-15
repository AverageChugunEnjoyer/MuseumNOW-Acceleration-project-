
import type { Exhibit } from '../types/exhibit';
import { exhibits } from '../data/exhibits';

// Получение экспоната по ID
export function getExhibitById(
  id: number
): Exhibit | undefined {
  return exhibits.find((item) => item.id === id);
}

// Поиск экспонатов по названию, категории и номеру
export function searchExhibits(query: string): Exhibit[] {
  const normalizedQuery = query.trim().toLocaleLowerCase('ru');

  if (!normalizedQuery) {
    return exhibits;
  }

  return exhibits.filter((item) =>
    `${item.name} ${item.category} ${item.inventoryNumber}`
      .toLocaleLowerCase('ru')
      .includes(normalizedQuery)
  );
}

// Фильтрация по категории
export function filterExhibitsByCategory(
  category: string
): Exhibit[] {
  if (!category || category === 'Все категории') {
    return exhibits;
  }

  return exhibits.filter((item) => item.category === category);
}

// Получение списка категорий
export function getCategories(): string[] {
  return [
    'Все категории',
    ...new Set(exhibits.map((item) => item.category)),
  ];
}

// Одновременный поиск и фильтрация
export function filterAndSearchExhibits(
  query: string,
  category: string
): Exhibit[] {
  const normalizedQuery = query.trim().toLocaleLowerCase('ru');

  return exhibits.filter((item) => {
    const matchesCategory =
      !category ||
      category === 'Все категории' ||
      item.category === category;

    const searchableText =
      `${item.name} ${item.category} ${item.inventoryNumber}`
        .toLocaleLowerCase('ru');

    const matchesQuery =
      !normalizedQuery || searchableText.includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });
}
