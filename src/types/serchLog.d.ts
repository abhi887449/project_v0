export interface SearchLog {
  _id: string;
  userId?: string;
  searchQuery: string;
  filtersApplied?: Record<string, any>;
  resultsCount: number;
  timestamp: Date;
}