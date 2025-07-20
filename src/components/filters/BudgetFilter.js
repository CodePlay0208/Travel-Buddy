import React, { useRef, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const BudgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PriceInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputLabel = styled.label`
  font-size: 12px;
  color: #717171;
  font-weight: 500;
  text-transform: uppercase;
`;

const PriceInput = styled.input`
  padding: 12px 16px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  
  &:focus {
    outline: none;
    border-color: #009965;
    box-shadow: 0 0 0 3px rgba(255, 56, 92, 0.1);
  }
  
  &::placeholder {
    color: #b0b0b0;
    font-weight: 400;
  }
`;

const SliderWrapper = styled.div`
  position: relative;
  padding: 20px 0;
  height: 40px;
`;

const SliderTrack = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 6px;
  background: #ebebeb;
  border-radius: 3px;
  width: 100%;
`;

const SliderRange = styled.div`
  position: absolute;
  height: 6px;
  background: #009965;
  border-radius: 3px;
  left: ${props => props.left}%;
  width: ${props => props.width}%;
  top: 50%;
  transform: translateY(-50%);
`;

const SliderHandle = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 22px;
  height: 22px;
  background: #ffffff;
  border: 2px solid #009965;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  z-index: ${props => props.active ? 10 : 5};
  
  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: 0 4px 12px rgba(255, 56, 92, 0.3);
  }
  
  ${props => props.active && `
    transform: translate(-50%, -50%) scale(1.15);
    box-shadow: 0 4px 12px rgba(255, 56, 92, 0.4);
  `}
`;

const SliderLabels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #717171;
  margin-top: 8px;
`;

const CurrentRange = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #222222;
  margin-bottom: 8px;
  padding: 8px 16px;
  background: #f7f7f7;
  border-radius: 8px;
`;

const PresetButtons = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const PresetButton = styled.button`
  padding: 6px 12px;
  border: 1px solid #dddddd;
  border-radius: 20px;
  background: ${props => props.selected ? '#009965' : '#ffffff'};
  color: ${props => props.selected ? '#ffffff' : '#717171'};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #009965;
    color: ${props => props.selected ? '#ffffff' : '#009965'};
  }
`;

// Budget presets
const budgetPresets = [
    { label: 'Budget', min: 1000, max: 10000 },
    { label: 'Mid-range', min: 10000, max: 25000 },
    { label: 'Premium', min: 25000, max: 50000 },
    { label: 'Luxury', min: 50000, max: 100000 }
];

const BudgetFilter = ({ value, onChange }) => {
    const [inputMin, setInputMin] = useState(value.min.toString());
    const [inputMax, setInputMax] = useState(value.max.toString());
    const [activeHandle, setActiveHandle] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);

    // Slider bounds
    const absoluteMin = 1000;
    const absoluteMax = 100000;

    // Update inputs when value prop changes
    useEffect(() => {
        setInputMin(value.min.toString());
        setInputMax(value.max.toString());
    }, [value.min, value.max]);

    // Calculate percentages for positioning
    const getPercent = useCallback((val) =>
        ((val - absoluteMin) / (absoluteMax - absoluteMin)) * 100,
        [absoluteMin, absoluteMax]
    );

    const minPercent = getPercent(value.min);
    const maxPercent = getPercent(value.max);

    // Format currency for display
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    // Convert mouse position to value
    const getValueFromPosition = useCallback((clientX) => {
        if (!sliderRef.current) return 0;

        const rect = sliderRef.current.getBoundingClientRect();
        const percentage = (clientX - rect.left) / rect.width;
        const value = absoluteMin + (percentage * (absoluteMax - absoluteMin));

        // Round to nearest step
        return Math.round(value / 1000) * 1000;
    }, [absoluteMin, absoluteMax]);

    // Determine which handle is closer to click position
    const getClosestHandle = useCallback((clientX) => {
        const clickValue = getValueFromPosition(clientX);
        const distanceToMin = Math.abs(clickValue - value.min);
        const distanceToMax = Math.abs(clickValue - value.max);

        return distanceToMin <= distanceToMax ? 'min' : 'max';
    }, [getValueFromPosition, value.min, value.max]);

    // Handle mouse down on slider area
    const handleMouseDown = useCallback((e) => {
        if (!sliderRef.current) return;

        const closestHandle = getClosestHandle(e.clientX);
        setActiveHandle(closestHandle);
        setIsDragging(true);

        // Immediately update the value
        const newValue = getValueFromPosition(e.clientX);

        if (closestHandle === 'min') {
            const clampedValue = Math.min(newValue, value.max - 1000);
            if (clampedValue >= absoluteMin) {
                onChange({ ...value, min: clampedValue });
            }
        } else {
            const clampedValue = Math.max(newValue, value.min + 1000);
            if (clampedValue <= absoluteMax) {
                onChange({ ...value, max: clampedValue });
            }
        }
    }, [getClosestHandle, getValueFromPosition, value, onChange, absoluteMin, absoluteMax]);

    // Handle mouse move
    const handleMouseMove = useCallback((e) => {
        if (!isDragging || !activeHandle) return;

        const newValue = getValueFromPosition(e.clientX);

        if (activeHandle === 'min') {
            const clampedValue = Math.max(absoluteMin, Math.min(newValue, value.max - 1000));
            onChange({ ...value, min: clampedValue });
        } else {
            const clampedValue = Math.min(absoluteMax, Math.max(newValue, value.min + 1000));
            onChange({ ...value, max: clampedValue });
        }
    }, [isDragging, activeHandle, getValueFromPosition, value, onChange, absoluteMin, absoluteMax]);

    // Handle mouse up
    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
        setActiveHandle(null);
    }, []);

    // Add event listeners
    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('touchmove', handleTouchMove);
            document.addEventListener('touchend', handleMouseUp);

            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
                document.removeEventListener('touchmove', handleTouchMove);
                document.removeEventListener('touchend', handleMouseUp);
            };
        }
    }, [isDragging, handleMouseMove, handleMouseUp]);

    // Handle touch events
    const handleTouchStart = useCallback((e) => {
        e.preventDefault();
        const touch = e.touches[0];
        handleMouseDown({ clientX: touch.clientX });
    }, [handleMouseDown]);

    const handleTouchMove = useCallback((e) => {
        e.preventDefault();
        const touch = e.touches[0];
        handleMouseMove({ clientX: touch.clientX });
    }, [handleMouseMove]);

    // Handle input field changes
    const handleMinInputChange = (e) => {
        const inputValue = e.target.value.replace(/[^0-9]/g, '');
        setInputMin(inputValue);

        const numValue = parseInt(inputValue) || absoluteMin;
        if (numValue <= value.max - 1000 && numValue >= absoluteMin) {
            onChange({ ...value, min: numValue });
        }
    };

    const handleMaxInputChange = (e) => {
        const inputValue = e.target.value.replace(/[^0-9]/g, '');
        setInputMax(inputValue);

        const numValue = parseInt(inputValue) || absoluteMax;
        if (numValue >= value.min + 1000 && numValue <= absoluteMax) {
            onChange({ ...value, max: numValue });
        }
    };

    // Handle input blur
    const handleMinInputBlur = () => {
        const numValue = parseInt(inputMin) || absoluteMin;
        const clampedValue = Math.max(absoluteMin, Math.min(numValue, value.max - 1000));
        setInputMin(clampedValue.toString());
        onChange({ ...value, min: clampedValue });
    };

    const handleMaxInputBlur = () => {
        const numValue = parseInt(inputMax) || absoluteMax;
        const clampedValue = Math.min(absoluteMax, Math.max(numValue, value.min + 1000));
        setInputMax(clampedValue.toString());
        onChange({ ...value, max: clampedValue });
    };

    // Handle preset clicks
    const handlePresetClick = (preset) => {
        onChange({ min: preset.min, max: preset.max });
    };

    const isPresetSelected = (preset) => {
        return value.min === preset.min && value.max === preset.max;
    };

    return (
        <BudgetContainer>
            {/* Current Range Display */}
            <CurrentRange>
                {formatCurrency(value.min)} - {formatCurrency(value.max)}
            </CurrentRange>

            {/* Input Fields */}
            <PriceInputs>
                <InputGroup>
                    <InputLabel>Minimum Budget</InputLabel>
                    <PriceInput
                        type="text"
                        value={inputMin}
                        onChange={handleMinInputChange}
                        onBlur={handleMinInputBlur}
                        placeholder="₹ 1,000"
                    />
                </InputGroup>
                <InputGroup>
                    <InputLabel>Maximum Budget</InputLabel>
                    <PriceInput
                        type="text"
                        value={inputMax}
                        onChange={handleMaxInputChange}
                        onBlur={handleMaxInputBlur}
                        placeholder="₹ 1,00,000"
                    />
                </InputGroup>
            </PriceInputs>

            {/* Custom Dual Range Slider */}
            <SliderWrapper
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            >
                <SliderTrack />
                <SliderRange
                    left={minPercent}
                    width={maxPercent - minPercent}
                />
                <SliderHandle
                    style={{ left: `${minPercent}%` }}
                    active={activeHandle === 'min'}
                />
                <SliderHandle
                    style={{ left: `${maxPercent}%` }}
                    active={activeHandle === 'max'}
                />
            </SliderWrapper>

            <SliderLabels>
                <span>₹1,000</span>
                <span>₹1,00,000+</span>
            </SliderLabels>

            {/* Preset Buttons */}
            <PresetButtons>
                {budgetPresets.map((preset, index) => (
                    <PresetButton
                        key={index}
                        selected={isPresetSelected(preset)}
                        onClick={() => handlePresetClick(preset)}
                    >
                        {preset.label}
                    </PresetButton>
                ))}
            </PresetButtons>
        </BudgetContainer>
    );
};

export default BudgetFilter;
