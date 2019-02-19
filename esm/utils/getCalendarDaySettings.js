import getPhrase from './getPhrase';
import { BLOCKED_MODIFIER } from '../constants';
export default function getCalendarDaySettings(day, ariaLabelFormat, daySize, modifiers, phrases) {
  var chooseAvailableDate = phrases.chooseAvailableDate,
      dateIsUnavailable = phrases.dateIsUnavailable,
      dateIsSelected = phrases.dateIsSelected,
      dateIsSelectedAsStartDate = phrases.dateIsSelectedAsStartDate,
      dateIsSelectedAsEndDate = phrases.dateIsSelectedAsEndDate;
  var daySizeStyles = {
    width: daySize,
    height: daySize - 1
  };
  var useDefaultCursor = modifiers.has('blocked-minimum-nights') || modifiers.has('blocked-calendar') || modifiers.has('blocked-out-of-range');
  var selected = modifiers.has('selected') || modifiers.has('selected-start') || modifiers.has('selected-end');
  var hoveredSpan = !selected && (modifiers.has('hovered-span') || modifiers.has('after-hovered-start'));
  var isOutsideRange = modifiers.has('blocked-out-of-range');
  var formattedDate = {
    date: day.format(ariaLabelFormat)
  };
  var ariaLabel = getPhrase(chooseAvailableDate, formattedDate);

  if (selected) {
    if (modifiers.has('selected-start') && dateIsSelectedAsStartDate) {
      ariaLabel = getPhrase(dateIsSelectedAsStartDate, formattedDate);
    } else if (modifiers.has('selected-end') && dateIsSelectedAsEndDate) {
      ariaLabel = getPhrase(dateIsSelectedAsEndDate, formattedDate);
    } else {
      ariaLabel = getPhrase(dateIsSelected, formattedDate);
    }
  } else if (modifiers.has(BLOCKED_MODIFIER)) {
    ariaLabel = getPhrase(dateIsUnavailable, formattedDate);
  }

  return {
    daySizeStyles: daySizeStyles,
    useDefaultCursor: useDefaultCursor,
    selected: selected,
    hoveredSpan: hoveredSpan,
    isOutsideRange: isOutsideRange,
    ariaLabel: ariaLabel
  };
}