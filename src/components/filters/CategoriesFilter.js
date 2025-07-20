import React from 'react';
import styled from 'styled-components';

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 8px;
`;

const CategoryChip = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 8px;
  border-radius: 12px;
  border: 1px solid #dddddd;
  background: ${props => props.selected ? '#009965' : '#ffffff'};
  color: ${props => props.selected ? '#ffffff' : '#222222'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${props => props.selected ? '#009965' : '#b0b0b0'};
    transform: translateY(-2px);
  }
`;

const CategoryIcon = styled.div`
  font-size: 24px;
  line-height: 1;
`;

const CategoryLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
`;

const categories = [
    { id: 'adventure', label: 'Adventure', icon: '🏔️' },
    { id: 'mountain', label: 'Mountain', icon: '⛰️' },
    { id: 'beaches', label: 'Beaches', icon: '🏖️' },
    { id: 'biking', label: 'Biking', icon: '🚴' },
    { id: 'cultural', label: 'Cultural', icon: '🏛️' },
    { id: 'nature', label: 'Nature', icon: '🌿' },
    { id: 'kid-friendly', label: 'Kid-Friendly', icon: '👨‍👩‍👧‍👦' },
    { id: 'trekking', label: 'Trekking', icon: '🥾' },
    { id: 'spa', label: 'Spa', icon: '🧘' },
    { id: 'food-tours', label: 'Food Tours', icon: '🍜' },
    { id: 'safari', label: 'Safari', icon: '🦁' },
    { id: 'theme-parks', label: 'Theme Parks', icon: '🎢' }
];

const CategoriesFilter = ({ value, onChange }) => {
    const toggleCategory = (categoryId) => {
        const isSelected = value.includes(categoryId);
        if (isSelected) {
            onChange(value.filter(id => id !== categoryId));
        } else {
            onChange([...value, categoryId]);
        }
    };

    return (
        <CategoriesGrid>
            {categories.map(category => (
                <CategoryChip
                    key={category.id}
                    selected={value.includes(category.id)}
                    onClick={() => toggleCategory(category.id)}
                >
                    <CategoryIcon>{category.icon}</CategoryIcon>
                    <CategoryLabel>{category.label}</CategoryLabel>
                </CategoryChip>
            ))}
        </CategoriesGrid>
    );
};

export default CategoriesFilter;
