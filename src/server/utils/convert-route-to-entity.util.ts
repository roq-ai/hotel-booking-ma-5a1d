const mapping: Record<string, string> = {
  bookings: 'booking',
  hotels: 'hotel',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
