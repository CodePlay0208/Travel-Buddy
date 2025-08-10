import React from 'react';
import { Container, DescriptionField, InputGroup, InputRow } from './PublishTrip.styled';
import { Input, Label } from '../../styles/Global';
import Searchbar from '../../components/Searchbar/Searchbar';
import Pill from '../../components/Pill';

const PREFERENCE_OPTIONS = [
  { id: 'adventure', label: 'Adventure', icon: '🏔️' },
  { id: 'mountain', label: 'Mountain', icon: '⛰️' },
  { id: 'beaches', label: 'Beaches', icon: '🏖️' },
  { id: 'biking', label: 'Biking', icon: '🚴' },
  { id: 'cultural', label: 'Cultural', icon: '🏛️' },
  { id: 'nature', label: 'Nature', icon: '🌿' },
  { id: 'kid-friendly', label: 'Kid-Friendly', icon: '👨👩👧👦' },
  { id: 'trekking', label: 'Trekking', icon: '🥾' },
  { id: 'spa', label: 'Spa', icon: '🧘' },
  { id: 'food-tours', label: 'Food Tours', icon: '🍜' },
  { id: 'safari', label: 'Safari', icon: '🦁' },
  { id: 'theme-parks', label: 'Theme Parks', icon: '🎢' },
];

const TripDetail = ({ tripData, handleChange, handleTripDataChange, isReadOnly }) => {
  const selectedPrefs = Array.isArray(tripData.preferences) ? tripData.preferences : [];

  const togglePref = (id) => {
    if (isReadOnly) return;
    const exists = selectedPrefs.includes(id);
    const updated = exists
      ? selectedPrefs.filter((p) => p !== id)
      : [...selectedPrefs, id];
    handleTripDataChange('preferences', updated);
  };

  return (
    <Container gap="20px" mobileGap="16px">
      <InputRow margin="0 0%">
        <InputGroup>
          <Label fontSize="1rem" fontWeight="500" margin="0% 0 1%">
            Trip Title
          </Label>
          <Input
            type="text"
            name="title"
            autoComplete="off"
            value={tripData.title || ''}
            onChange={handleChange}
            placeholder="Trip Title"
            padding="1.25%"
          />
        </InputGroup>
      </InputRow>
      <InputRow margin="0 0%">
        <InputGroup>
          <Label fontSize="1rem" fontWeight="500" margin="0% 0 1%">
            Pick Up Locations
          </Label>
          <Searchbar
            isReadOnly={isReadOnly}
            inputValues={tripData.startLocation} // array of strings
            setInputValues={(value) => handleTripDataChange('startLocation', value)}
            onValue="startLocation"
            placeholderValue="Enter Start Location"
            style={{ width: '100%' }}
            fontSize="1rem"
            fontWeight="500"
            borderColor="#0b87ac"
            dropDownFontSize="75%"
            isMultiSelect={true}
          />
        </InputGroup>
        <InputGroup>
          <Label fontSize="1rem" fontWeight="500" margin="0% 0 1%">
            Destination
          </Label>
          <Searchbar
            isReadOnly={isReadOnly}
            inputValues={tripData.destination} // array of strings
            setInputValues={(value) => handleTripDataChange('destination', value)}
            onValue="destination"
            placeholderValue="Enter Destination"
            style={{ width: '100%' }}
            fontSize="1rem"
            fontWeight="500"
            borderColor="#0b87ac"
            dropDownFontSize="75%"
            isMultiSelect={true}
          />
        </InputGroup>
      </InputRow>
      <InputRow margin="0 0%">
        <InputGroup>
          <Label fontSize="1rem" fontWeight="500" margin="0% 0 1%">
            Minimun Budget
          </Label>
          <Input
            type="text"
            name="minBudget"
            autoComplete="off"
            value={tripData.minBudget || ''}
            onChange={handleChange}
            placeholder="Enter Minimum Budget"
          />
        </InputGroup>
        <InputGroup>
          <Label fontSize="1rem" fontWeight="500" margin="0% 0 1%">
            Maximum Budget
          </Label>
          <Input
            type="text"
            name="maxBudget"
            autoComplete="off"
            value={tripData.maxBudget || ''}
            onChange={handleChange}
            placeholder="Enter Maximum Budget"
          />
        </InputGroup>
      </InputRow>
      <InputRow margin="0 0%">
        <InputGroup>
          <Label fontSize="1rem" fontWeight="500" margin="0% 0 1%">
            Description
          </Label>
          <DescriptionField name="description" value={tripData.description} onChange={handleChange} placeholder="Enter Trip Description" />
        </InputGroup>
      </InputRow>
      {/* Preferences Pills */}
      <InputRow margin="0 0%">
  <InputGroup>
    <Label fontSize="1rem" fontWeight="500" margin="0% 0 1%">
      Preferences
    </Label>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {PREFERENCE_OPTIONS.map(({ id, label, icon }) => {
          const selected = selectedPrefs.includes(id);
          return (
            <Pill
              key={id}
              selected={selected}
              onClick={() => togglePref(id)}
              disabled={isReadOnly}
            >
              <span aria-hidden="true">{icon}</span>
              <span>{label}</span>
            </Pill>
          );
        })}
      </div>
  </InputGroup>
</InputRow>
    </Container>
  );
};

export default TripDetail;
