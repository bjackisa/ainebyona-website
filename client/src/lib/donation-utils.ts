export function generateReferenceCode(phoneNumber: string): string {
  const prefixes = ['LYN', 'CAM', 'WYM', 'AIN', 'NIC', 'WES', 'YTH', 'POL'];
  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const phoneWithoutZero = phoneNumber.substring(1);
  return randomPrefix + phoneWithoutZero;
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}

export function formatCurrency(amount: number, currency: string = 'UGX'): string {
  return new Intl.NumberFormat('en-UG', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

export function validatePhoneNumber(phone: string): boolean {
  return phone.startsWith('0') && phone.length === 10 && /^\d+$/.test(phone);
}
