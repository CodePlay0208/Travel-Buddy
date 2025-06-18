import React from 'react';
import PickupLocation from './PickupLocation';

const locsFew = [
  { name: 'Kashmiri Gate', subtitle: 'New Delhi' },
  { name: 'Kullu', subtitle: 'Himachal' },
  { name: 'Kasole', subtitle: 'Himachal' },
  { name: 'New Delhi', subtitle: 'India' },
  { name: 'New Delhi', subtitle: 'India' },
];
const locsFew1 = [
  { name: 'Kashmiri Gate', subtitle: 'New Delhi' },
  { name: 'Kullu', subtitle: 'Himachal' },
  { name: 'New Delhi', subtitle: 'India' },
];
const locsFew2 = [
  { name: 'Kashmiri Gate', subtitle: 'New Delhi' },
  { name: 'Kullu', subtitle: 'Himachal' },
];const locsFew3 = [
  { name: 'Kullu', subtitle: 'Himachal' },
];

const locsMany = [
  { name: 'Kashmiri Gate', subtitle: 'New Delhi' },
  { name: 'Kashmiri Gate', subtitle: 'New Delhi' },
  { name: 'Kashmiri Gate', subtitle: 'New Delhi' },
  { name: 'Kashmiri Gate', subtitle: 'New Delhi' },
  { name: 'Kashmiri Gate', subtitle: 'New Delhi' },
  { name: 'Kullu', subtitle: 'Himachal' },
  { name: 'Kasole', subtitle: 'Himachal' },
  { name: 'New Delhi', subtitle: 'India' },
   { name: 'Kashmiri Gate', subtitle: 'New Delhi' },
  { name: 'Kullu', subtitle: 'Himachal' },
  { name: 'Kasole', subtitle: 'Himachal' },
  { name: 'New Delhi', subtitle: 'India' },
];

function PickupLocationDemo() {
  return (
    <div style={{ maxWidth: 800, margin: 'auto', padding: 16 }}>
      <h3>Few locations (&#60;=5):</h3>
      <PickupLocation title="Pick Up Location:" locations={locsFew} />
<h3>Few locations (&#60;=5):</h3>
      <PickupLocation title="Pick Up Location:" locations={locsFew1} />
<h3>Few locations (&#60;=5):</h3>
      <PickupLocation title="Pick Up Location:" locations={locsFew2} />
<h3>Few locations (&#60;=5):</h3>
      <PickupLocation title="Pick Up Location:" locations={locsFew3} />

      <h3 style={{ marginTop: '40px' }}>Many locations (&gt;5):</h3>
      <PickupLocation title="Pick Up Location:" locations={locsMany} />
    </div>
  );
}

export default PickupLocationDemo;
