import { useState, useMemo } from 'react';
import { IDEAL_PARAMETERS_DATA, IdealParametersCategory, IdealParameterProfile } from '../dictionaries/ideal_parameters';

const PRESETS_PER_PAGE = 6; // 6 presets per page (2x3 grid)

interface CategoryStats {
  name: IdealParametersCategory;
  count: number;
  index: number;
}

interface UsePaginationReturn {
  currentPresets: IdealParameterProfile[];
  currentPage: number;
  currentCategory: IdealParametersCategory | null;
  totalPages: number;
  categoryStats: CategoryStats[];
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  selectCategory: (category: IdealParametersCategory) => void;
  goToNextCategory: () => void;
  goToPreviousCategory: () => void;
  currentCategoryIndex: number;
}

export const useIdealParametersPagination = (): UsePaginationReturn => {
  const [currentCategory, setCurrentCategory] = useState<IdealParametersCategory | null>(
    IdealParametersCategory.BUSINESS
  );
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate category statistics
  const categoryStats = useMemo(() => {
    const categories = Object.values(IdealParametersCategory) as IdealParametersCategory[];
    return categories.map((cat, index) => ({
      name: cat,
      count: IDEAL_PARAMETERS_DATA.filter(p => p.category === cat).length,
      index
    }));
  }, []);

  // Filter presets for the current category
  const filteredPresets = useMemo(() => {
    if (!currentCategory) return IDEAL_PARAMETERS_DATA;
    return IDEAL_PARAMETERS_DATA.filter(p => p.category === currentCategory);
  }, [currentCategory]);

  // Calculate number of pages
  const totalPages = Math.ceil(filteredPresets.length / PRESETS_PER_PAGE);

  // Get presets for the current page
  const currentPresets = useMemo(() => {
    const start = currentPage * PRESETS_PER_PAGE;
    const end = start + PRESETS_PER_PAGE;
    return filteredPresets.slice(start, end);
  }, [filteredPresets, currentPage]);

  // Handle transition to the next page
  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  // Handle return to the previous page
  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  // Change category (reset page to 0)
  const selectCategory = (category: IdealParametersCategory) => {
    setCurrentCategory(category);
    setCurrentPage(0);
  };

  // Go to the next category
  const goToNextCategory = () => {
    const currentIndex = categoryStats.findIndex(c => c.name === currentCategory);
    if (currentIndex < categoryStats.length - 1) {
      selectCategory(categoryStats[currentIndex + 1].name);
    }
  };

  // Go to the previous category
  const goToPreviousCategory = () => {
    const currentIndex = categoryStats.findIndex(c => c.name === currentCategory);
    if (currentIndex > 0) {
      selectCategory(categoryStats[currentIndex - 1].name);
    }
  };

  const currentCategoryIndex = categoryStats.findIndex(c => c.name === currentCategory);

  return {
    currentPresets,
    currentPage,
    currentCategory,
    totalPages,
    categoryStats,
    goToNextPage,
    goToPreviousPage,
    selectCategory,
    goToNextCategory,
    goToPreviousCategory,
    currentCategoryIndex
  };
};

