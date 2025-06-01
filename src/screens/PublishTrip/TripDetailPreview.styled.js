import styled from 'styled-components'

/**
 * The outer container:
 *   • Has a dynamic height (85% of parent) so that both sections scroll together.
 *   • A light box‐shadow, rounded corners, and a custom scrollbar.
 */
export const Container = styled.div`
  margin: ${(props) => props.margin ?? '0'};
  box-shadow: 0px 0px 8px 0px #0000001a;
  height: ${(props) => props.$height}px;
  border-radius: 10px;
  overflow-y: auto;
  width: 100%;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #d9d9d9;
    border-radius: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 12px;
  }
`

/**
 * SectionTitle is used for both “Pick up Locations” and “Destinations”.
 * It’s sticky at the top of its own content block—though in this layout
 * both sections scroll inside the same Container, so it just appears
 * as a header above each list.
 */
export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #050505;
  margin: 16px 3% 8px 3%;

  /* If you want uppercase or other styling, you can tweak here. */
`

/**
 * Timeline (ul) has no default list‐style; we use padding to indent the entire block.
 */
export const Timeline = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 3% 16px 3%;
`

/**
 * TimelineItem is each row: a flex container with two children:
 *   1) BulletWrapper — fixed 18px width for the bullet + vertical connector
 *   2) LocationBox — a flex item that fills the rest of the row
 */
export const TimelineItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }
`

/**
 * BulletWrapper:
 *   • Exactly 18px wide (to match the SVG).
 *   • Contains the bullet SVG and (if not last) a thin vertical line below it.
 */
export const BulletWrapper = styled.div`
  position: relative;
  width: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .connector {
    /* The “railroad track” line that extends from the bottom of one bullet
       to the top of the next. */
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 200%;
    background-color: rgba(5, 5, 5, 0.2);
  }
`

/**
 * BulletSvg is a styled <svg> so that it never shrinks.
 * (We’re inlining exactly the SVG you provided.)
 */
export const BulletSvg = styled.svg`
  flex-shrink: 0;
`

/**
 * LocationBox is the “rounded box” that appears to the right of each bullet.
 *   • Light mint/teal background (#DDF2EB in your original).
 *   • Rounded corners.
 *   • Displays the name/subtext in a column on the left, and a close–“✕” on the right.
 */
export const LocationBox = styled.div`
  flex: 1;
  background: #ddf2eb;
  border-radius: 8px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Drop a small shadow if you like, e.g.:
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  */

  @media (max-width: 440px) {
    padding: 12px 16px;
  }
`

/**
 * LocationName – the top line (e.g. “Kashmiri Gate”)
 */
export const LocationName = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.2;
  color: #050505;

  @media (max-width: 440px) {
    font-size: 1.8rem;
  }
`

/**
 * LocationSub – the second line (e.g. “New Delhi” or a date).
 */
export const LocationSub = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.2;
  color: #050505;

  @media (max-width: 440px) {
    font-size: 1.6rem;
  }
`

/**
 * CloseButton – the “✕” on the far right.
 */
export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.2rem;
  color: #050505;
  cursor: pointer;

  &:hover {
    color: #b00;
  }

  @media (max-width: 440px) {
    font-size: 2rem;
  }
`
