import { PREFERENCE_OPTIONS } from '../constants/preferences';
import ReadonlyPill from './ReadonlyPill';

const PreferencesSection = ({ preferences = [] }) => {
  const selected = new Set(preferences.filter(Boolean));
  const selectedOptions = PREFERENCE_OPTIONS.filter(opt => selected.has(opt.id));

  if (!selectedOptions.length) {
    return (
      <div style={{ color: '#6e7781', fontSize: '0.95rem' }}>
        No preferences selected
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: ' 16px 0px' }}>
      {selectedOptions.map(({ id, label, icon }) => (
        <ReadonlyPill key={id}>
          <span aria-hidden="true">{icon}</span>
          <span>{label}</span>
        </ReadonlyPill>
      ))}
    </div>
  );
};

export default PreferencesSection;
