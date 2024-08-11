export function addComma(value: string | number): string {
  const valueAsString = String(value);

  const valueWithComma = valueAsString
    .replace(/[^0-9]/g, '')
    .replace(/(\d)(?=(\d{3})+$)/g, '$1,');

  return valueWithComma;
}

export function formatCurrency(value: string): string {
  if (!value) return '';
  const numberValue = parseFloat(value.replace(/,/g, ''));
  return numberValue.toLocaleString('ko-KR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export function numberToDay(index: number): string {
  switch (index) {
    case 0:
      return '월요일';
    case 1:
      return '화요일';
    case 2:
      return '수요일';
    case 3:
      return '목요일';
    case 4:
      return '금요일';
    case 5:
      return '토요일';
    case 6:
      return '일요일';
    default:
      return '월요일';
  }
}

export function convertToAmPm(time: string): string {
  const [hourString, minuteString] = time.split(':');
  const hour = Number(hourString);
  const minute = Number(minuteString);

  if (isNaN(hour) || isNaN(minute)) {
    throw new Error(`Invalid time format: ${time}`);
  }

  const period = hour >= 12 ? '오후' : '오전';
  const adjustedHour = hour % 12 || 12; // 0시는 12시로 변환
  return `${period} ${String(adjustedHour).padStart(2, '0')}:${String(
    minute,
  ).padStart(2, '0')}`;
}

const statusTranslations: { [key: string]: string } = {
  ready: '준비',
  pending: '대기중',
  completed: '완료',
  failed: '실패',
  processing: '처리중',
};

// 상태 문자열을 한글로 변환하는 함수
export function translateStatus(status: string): string {
  const translation = statusTranslations[status];
  if (!translation) {
    throw new Error(`Unknown status: ${status}`);
  }
  return translation;
}
